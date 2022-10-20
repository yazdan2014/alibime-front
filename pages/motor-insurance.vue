<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <form-wizard ref="formwizard" @onComplete="onComplete" @onNextStep="nextStep" @onPreviousStep="previousStep" @onReset="reset">
      <tab-content title="نوع وسیله نقلیه خود را انتخاب کنید" :selected="true">
        <div class="form-group">
          <div class="grid-view">
            <item-clickable
              v-for="item in getCarTypes"
              :key="item.carType"
              for="cartype"
              :title="item.carType"
              :src="item.icon"
              :selected="item.carTypeID === selectedType.carTypeID"
              @click.native="
                selectCar(item),
                  CarTypeName(item.carType),
                  CarTypeNameLatin(item.carTypeLatin),
                  carTypeID(selectedType.carTypeID),
                  $refs.formwizard.nextTab()
              "
            />
          </div>
        </div>
      </tab-content>
      <tab-content title="برند وسیله نقلیه خود را انتخاب کنید">
        <div class="form-group">
          <div class="grid-view">
            <div class="scrollbar scrollbar-primary">
              <item-clickable
                v-for="item in selectedType.brand"
                :key="item.latinName"
                for="carbrand"
                :title="item.name"
                :src="item.icon"
                :selected="item.id === selectedBrandId"
                @click.native="
                  selectBrandId(item.id), selectBrand(item), CarBrandName(item.name), CarBrandNameLatin(item.latinName), $refs.formwizard.nextTab()
                "
              />
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="مدل وسیله نقلیه را انتخاب کنید">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">مدل را انتخاب کنید</div>
              <b-form-select v-model="formData.setCarModel" class="scrollbar scrollbar-primary single_select" :select-size="10">
                <option
                  v-for="item in selectedBrand.model"
                  :key="item.model"
                  for="carmodelName"
                  :title="item.name"
                  :selected="item.id === selectedModelId"
                  @click="selectModelId(item.id), CarModelName(item.name), CarCylinder(item.cylinder), $refs.formwizard.nextTab()"
                >
                  {{ item.name }}
                </option>
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="سال ساخت خودرو را مشخص کنید">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">سال ساخت وسیله نقلیه را مشخص کنید</div>
              <b-form-select
                id="carbuildselected"
                v-model="formData.setCarYear"
                class="scrollbar scrollbar-primary single_select"
                :options="carBuildItems"
                :select-size="10"
                @change="selectCarYear(formData.setCarYear), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="این خودرو تاکنون بیمه شخص‌ثالث داشته است؟">
        <select :class="hasError('referral') ? 'is-invalid' : ''" class="form-control d-none"></select>
        <div class="form-group">
          <div class="grid-view">
            <div class="scrollbar scrollbar-primary ml-1">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="formData.setCarIns"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="no"
                  @change="changeLTabTrue1($event)"
                  >فاقد بیمه نامه</b-form-radio
                >
                <b-form-radio
                  v-model="formData.setCarIns"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="yes"
                  @change="changeLTabFalse($event)"
                  >دارای بیمه نامه قبلی</b-form-radio
                >
              </b-form-group>
              <div v-if="formData.setCarIns == 'yes'" class="grid-view m-0">
                <item-clickable
                  v-for="item in companyList"
                  :key="item.companyList"
                  v-model="companyList"
                  for="companyList"
                  :title="item.companyName"
                  :src="item.icon"
                  :selected="item.companyId === selectCompanyID"
                  @click.native="selectCompany(item), selectCoID(item.companyId), $refs.formwizard.nextTab()"
                />
              </div>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="تاریخ اعتبار بیمه نامه قبلی خود را انتخاب کنید">
        <div class="form-group dates__data">
          <div class="date__sec">
            <div class="date_title">تاریخ شروع بیمه نامه قبلی</div>
            <base-date-text-field
              v-model="lastPolicyStartDate"
              label="تاریخ شروع بیمه نامه قبلی"
              type="date"
              :pastyearenabled="true"
              :auto-submit="true"
              class="input__dates"
              display-format="jYYYY/jMM/jDD"
              outlined
            />
          </div>
          <div class="date__sec">
            <div class="date_title">تاریخ پایان بیمه نامه قبلی</div>
            <base-date-text-field
              v-model="lastPolicyExpDate"
              label="تاریخ پایان بیمه نامه قبلی"
              type="date"
              class="input__dates"
              :auto-submit="true"
              :disabled="!lastPolicyStartDate"
              :max="lastPolicyStartDate"
              display-format="jYYYY/jMM/jDD"
              outlined
              @input="SelectedlastPolicyExpDate(), $refs.formwizard.nextTab()"
            />
          </div>
        </div>
      </tab-content>
      <tab-content title="میزان تخفیف بیمه نامه قبلی خود را مشخص کنید">
        <div class="grid-view">
          <div class="single__sbox">
            <div class="_title">تخفیف شخص ثالث</div>
            <b-form-select
              id="carbuildselected"
              v-model="formData.setDisThirdparty"
              class="scrollbar-primary select__ custom-select custom-select"
              :options="carThirdDiscounts"
              @change="selectDisThirdparty(formData.setDisThirdparty)"
            >
            </b-form-select>
            <div v-if="formData.setDisThirdparty">
              <div class="_title">تخفیف حوادث راننده</div>
              <b-form-select
                id="carbuildselected"
                v-model="formData.setDisDriver"
                class="scrollbar-primary select__ custom-select custom-select"
                :options="carDriverDiscounts"
                @change="selectDisHavades(formData.setDisDriver), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="سابقه دریافت خسارت از بیمه نامه قبلی را انتخاب کنید">
        <div class="form-group">
          <div class="grid-view">
            <div class="scrollbar scrollbar-primary ml-1">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="formData.setCarIns"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="no"
                  @change="changeLTabTrue2($event)"
                  >بدون خسارت</b-form-radio
                >
                <b-form-radio
                  v-model="formData.setCarIns"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="yes"
                  @change="changeLTabFalse($event)"
                  >دارای خسارت</b-form-radio
                >
              </b-form-group>
              <div class="damage text-center">
                <div class="damage_selects">
                  <div class="date_title">خسارت مالی</div>
                  <b-form-select id="carbuildselected" v-model="damageFD" class="select__" :options="carFDamage" @change="damageselectchanges()">
                  </b-form-select>
                </div>
                <div class="damage_selects">
                  <div class="date_title">خسارت جانی</div>
                  <b-form-select id="carbuildselected" v-model="damageLD" class="select__" :options="carLDamage" @change="damageselectchanges()">
                  </b-form-select>
                </div>
                <div class="damage_selects">
                  <div class="date_title">خسارت حوادث راننده</div>
                  <b-form-select id="carbuildselected" v-model="damageDD" class="select__" :options="carDDamage" @change="damageselectchanges()">
                  </b-form-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>
    </form-wizard>
    <div class="container">
      <div class="about-ins">
        <ul id="myTabJust" class="nav nav-tabs nav-justified md-tabs indigo mw-625" role="tablist">
          <li class="nav-item mw-200">
            <a
              id="home-tab-just"
              class="nav-link active"
              data-toggle="tab"
              href="#home-just"
              role="tab"
              aria-controls="home-just"
              aria-selected="true"
              >درباره بیمه شخص ثالث</a
            >
          </li>
          <li class="nav-item mw-200">
            <a
              id="profile-tab-just"
              class="nav-link"
              data-toggle="tab"
              href="#profile-just"
              role="tab"
              aria-controls="profile-just"
              aria-selected="false"
              >سوالات متداول</a
            >
          </li>
          <li class="nav-item mw-200">
            <a
              id="contact-tab-just"
              class="nav-link"
              data-toggle="tab"
              href="#contact-just"
              role="tab"
              aria-controls="contact-just"
              aria-selected="false"
              >درخواست مشاوره</a
            >
          </li>
        </ul>
        <div id="myTabContentJust" class="tab-content card pt-5">
          <div id="home-just" class="tab-pane fade ins-tabs show active" role="tabpanel" aria-labelledby="home-tab-just">
            <div class="scrollbar scrollbar-primary content-scrollbar">
              <div class="col-12 content-ins">
                <!-- wp:heading -->
                <h2 id="h-">بیمه موتورسیکلت</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  همانند هر بیمه شخص ثالث، هر فرد زیاندیده در حادثه رانندگی غیر از راننده موتور سیکلت مقصر را ، شخص ثالث می نامند. در واقع ماهیت بیمه
                  شخص ثالث موتور سیکلت مشابه بیمه شخص ثالث خودرو است.<br />به طور کلی در بیمه موتورسیکلت خسارات جانی و مالی که راننده مقصر موتورسیکلت
                  به شخص زیان دیده یا وسیله نقلیه او وارد کرده است تا سقف تعهدات بیمه پرداخت خواهد شد. همچنین خسارات جانی وارد شده به راننده
                  موتورسیکلت که شامل هزینه های درمان، نقص عضو و فوت وی باشد هم تحت پوشش بیمه قرار می گیرد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--1">موارد پوشش بیمه موتورسیکلت</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  خسارت مالی به اشخاص ثالث<br />بیمه‌گر خسارت مالی وارده به شخص ثالث را مطابق پوشش های بیمه‌نامه شخص ثالث موتورسیکلت می پردازد.<br />خسارت‌های
                  جانی اشخاص ثالث<br />بیمه گر خسارت جانی شامل فوت و نقص عضو وارده به شخص ثالث را مطابق توافق های بیمه‌شخص ثالث می پردازد.<br />خسارت
                  جانی راننده مقصر<br />اگر راننده موتورسیکلت طی حادثه خسارت جانی ببیند، بیمه نامه شخص ثالث موتورسیکلت غرامت او را پرداخت می کند.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--2">مواردی که تحت پوشش بیمه شخص ثالث قرار نمی‌گیرد:</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  خسارت&nbsp; وارد شده به موتور سیکلت راننده مقصر<br />خسارت وارد شده به بار یا محموله موتورسیکلت بیمه‌شده<br />خسارت وارد شده ناشی از
                  اشعه رادیواکتیو و هر گونه تشعشعات رادیواکتیویته<br />پرداخت جرائم ناشی از محکومیت قضایی و جزایی
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--3">عوامل موثر بر قیمت بیمه موتورسیکلت</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>عوامل مختلفی در نرخ بیمه شخص ثالث موتورسیکلت تاثیرگذار هستند:</p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--4">نوع موتورسیکلت</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>نرخ پایه بیمه موتور سیکلت بر اساس سیلندر موتورها محاسبه می شود. موتورسیکلت ها به چهار دسته کلی زیر تقسیم می شوند:</p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>موتورسیکلت گازی</li>
                  <li>موتورسیکلت دنده ای یک سیلندر</li>
                  <li>موتورسیکلت دو سیلندر و بالاتر</li>
                  <li>موتورسیکلت دارای سه چرخ و سایدکار</li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:paragraph -->
                <p>بطور کلی هرچه تعداد چرخ و سیلندر موتور بیشتر باشد، قیمت بیمه ثالث نیز بالاتر می‌رود.</p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--5">سال تولید موتورسیکلت</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  مهم ترین عامل در تعیین نرخ بیمه شخص ثالث موتورسیکلت، سال تولید آن است.هرچه موتور سیکلت جدیدتر باشد،ریسک آن کمتر خواهد بود و نرخ بیمه
                  موتورسیکلت نیز پایین می آید.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--6">نوع و ساختار موتور</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  موتورسیکلت‌های برقی و دنده ای نرخ بیمه های متفاوتی دارند.با بالاتر رفتن قدرت موتورسیکلت و بزرگتر شدن سایز آن ، هزینه بیمه شخص ثالث
                  آن نیز افزایش خواهد یافت.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--7">نرخ پوشش مالی انتخابی</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  هر چه پوشش مالی بیشتری انتخاب گردد که گاهی این پوشش ها به سقف هزینه های مالی مربوطه نیز می رسد ، بالاتر رفتن نرخ حق بیمه شخص ثالث
                  موتور را به همراه خواهد داشت.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--8">تخفیف عدم خسارت بیمه موتورسیکلت</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>تخفیف هایی که به موتورسوارانی تعلق می گیرد که از خسارت های بیمه نامه شخص ثالث خود در سال های قبل استفاده نکرده باشند.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>میزان سقف تخفیف عدم خسارت 70 درصد درنظر گرفته شده است.</p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--9">جریمه دیرکرد بیمه موتورسیکلت</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  جریمه دیرکرد&nbsp;عامل دارای تاثیر غیرمستقیم بر نرخ بیمه شخص ثالث موتورسیکلت است که در صورت دیرکرد بیمه کردن موتورسیکلت بعد از
                  سررسید بیمه شخص ثالث به آن تعلق می‌گیرد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--10">مدت زمان بیمه‌نامه موتورسیکلت</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  شرکت های بیمه‌گر، بیمه شخص ثالث خودرو را به صورت بلندمدت با اعتبار یک ساله یا به صورت کوتاه مدت در بازه های زمانی مثلا یک ماهه ، دو
                  ماهه و … ارائه می‌دهند ولی تنها دوره زمانی درنظر گرفته شده برای اعتبار بیمه‌نامه موتورسیکلت یک سال است و امکان خرید بیمه موتورسیکلت
                  کوتاه مدت وجود ندارد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--11">انتقال بیمه موتورسیکلت</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  هنگام فروش وسایل نقلیه نظیر خودرو ، موتور سیکلت ، مساله مهم انتقال بیمه آن ها می باشد. برای انتقال بیمه موتورسیکلت راه های مختلفی
                  وجود دارد که بیمه‌گزار با توجه به شرایط و صلاحدید خود باید به انتخاب از بین آن ها بپردازد:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>
                    <strong>انتقال مالکیت موتورسیکلت</strong><br />در انتقال مالکیت موتورسیکلت، بیمه شخص ثالث نیز که جزو الحاقات و متعلق به موتورسیکلت
                    است به مالک جدید انتقال می یابد.
                  </li>
                  <li>
                    <strong>حفظ تخفیف های موتورسیکلت برای موتورسیکلت بعدی مالک و بیمه گزار فعلی</strong><br />در این حالت، بیمه گزار تمایلی به انتقال
                    بیمه موتورسیکلت خود به مالک جدید ندارد لذا به شعب بیمه مراجعه کرده و تخفیف های بیمه را برای موتورسیکلت بعدی خود حفظ می کند. مدت
                    اعتبار تخفیف های موتورسیکلت در این حالت بین 6 الی 12 ماه آتی است که در صورت خرید موتور جدید، تخفیف های یاد شده در بیمه موتورسیکلت
                    جدید لحاظ خواهد شد.
                  </li>
                  <li>
                    <strong>مراجعه حضوری به شعب بیمه</strong><br />بیمه گزار به شعب بیمه مراجعه کرده و به انتقال بیمه شخص ثالث موتورسیکلت برای مالک
                    جدید می پردازد.
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading -->
                <h2 id="h--12">بیمه موتورسیکلت بدون گواهینامه</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  طبق قوانین بیمه موتورسیکلت، اگر راکب موتورسیکلت مقصر در تصادف فاقد گواهی نامه باشد، بیمه گر خسارت زیاندیده را بدون قید و شرط پرداخت
                  می کند ولی استرداد مبلغ خسارت به بیمه گر توسط راکب مقصر الزامی است و در شرایطی که تصادف یا حادثه منجر به خسارت جانی و پرداخت دیه
                  گردد، پرداخت دیده از طرف بیمه‌گر غیرممکن است زیرا برحسب ماده 3 قانون بیمه موتورسیکلت، شرایط پرداخت دیه به راننده مقصر، داشتن
                  گواهینامه متناسب با وسیله نقلیه است.
                </p>
                <!-- /wp:paragraph -->
              </div>
            </div>
          </div>
          <div id="profile-just" class="tab-pane fade ins-tabs" role="tabpanel" aria-labelledby="profile-tab-just">
            <div class="scrollbar scrollbar-primary content-scrollbar">
              <section>
                <!-- Section description -->
                <p class="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">
                  اگر سوال خود را در بین سوالات زیر پیدا نکردید با پشتیبانی علی‌بیمه تماس بگیرید.
                </p>

                <div class="col-md-12 col-lg-10 mx-auto mb-5 text-right">
                  <!--Accordion wrapper-->
                  <div id="accordionEx" class="accordion md-accordion" role="tablist" aria-multiselectable="true">
                    <!-- Accordion card -->
                    <div class="card border-top border-bottom-0 border-left border-right border-light">
                      <!-- Card header -->
                      <div id="headingOne1" class="card-header border-bottom border-light" role="tab">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                          <h5 class="black-text font-weight-normal mb-0">
                            چرا باید بیمه شخص ثالث داشته باشیم؟
                            <i class="fas fa-angle-down rotate-icon float-left"></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                        <div class="card-body">
                          تصور کنید شما در هنگام رانندگی با اتومبیل و یا موتور سیکلت به شخص یا اشخاصی خسارت وارد کنید، و در آن حادثه مقصر شناخته شوید،
                          طبق قانون شما مسئول جبران این خسارت به زیان‌دیدگان هستید. بنابراین نیاز به بیمه‌ای دارید تا در هنگام بروز این حوادث در جبران
                          خسارت پشتوانه شما باشد. ممکن است این خسارت مالی و یا جانی باشد.بر اساس قانون مالک خودرو یا کسی که خودرو در اختیار اوست باید
                          اقدام به تهیه بیمه شخص ثالث نماید. (در این صورت، این شخص بیمه‌گذار نامیده می‌شود.)
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div class="card border-bottom-0 border-left border-right border-light">
                      <!-- Card header -->
                      <div id="headingTwo2" class="card-header border-bottom border-light" role="tab">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          <h5 class="black-text font-weight-normal mb-0">
                            آیا هنگام فروش وسیله نقلیه، امکان انتقال تخفیف‌های بیمه‌نامه شخص ثالث به خودرو جدید وجود دارد؟
                            <i class="fas fa-angle-down rotate-icon float-left"></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                        <div class="card-body">
                          بله؛ در صورتی که تقاضای بیمه‌گذار قبل از تاریخ انتقال بیمه‌نامه باشد، امکان انتقال تخفیف‌ها به خودرو جدید با همان تعداد
                          سیلندر که متعلق به خودش و یا متعلق به همسر، والدین و یا فرزندانش باشد، وجود دارد.
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div class="card border-bottom-0 border-left border-right border-light">
                      <!-- Card header -->
                      <div id="headingThree3" class="card-header border-bottom border-light" role="tab">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree3"
                          aria-expanded="false"
                          aria-controls="collapseThree3"
                        >
                          <h5 class="black-text font-weight-normal mb-0">
                            عواقب نداشتن و یا دیرکرد تمدید بیمه شخص ثالث چیست؟
                            <i class="fas fa-angle-down rotate-icon float-left"></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                        <div class="card-body">
                          در صورت دیرکرد تمدید بیمه شخص ثالث، علاوه بر عواقب مالی، مشکلات دیگری نیز وجود خواهد داشت که موجب صرف زمان زیادی می‌شود. از
                          عواقب نداشتن بیمه شخص ثالث می‌توان به موارد زیر اشاره کرد: جریمه توسط پلیس: در صورت شناسایی خودروی فاقد بیمه شخص ثالث توسط
                          پلیس راهنمایی و رانندگی، خودرو متوقف شده و به پارکینگ منتقل می‌شود. در این حالت شخص خاطی باید بیمه‌نامه شخص ثالث دارای
                          اعتبار تهیه کند و باید علاوه بر حق‌بیمه جدید، حق‌بیمه روزهایی را هم که وسیله نقلیه او بیمه نداشته (تا حداکثر یک سال) را
                          بپردازد، و همچنین علاوه بر پرداخت جریمه دیرکرد، هزینه پارکینگ را نیز بپردازد. پرداخت خسارت مالی و جانی : در صورت نداشتن بیمه
                          شخص ثالث در حوادث، اگر مالک خودرو مقصر باشد، هیچ شرکت بیمه‌ای خسارت را پرداخت نمی‌کند، باید کلیه هزینه‌ها را شخصاً بپردازد.
                          طبق قوانین جدید بیمه شخص ثالث، در شرایطی که راننده مقصر بیمه شخص ثالث نداشته باشد و در صورت بروز حوادث منجر به فوت یا خسارات
                          بدنی دیگر، جبران این گونه خسارت‌ها به عهده صندوق تامین خسارت‌های بدنی است؛ و پرداخت دیه را برای راننده مقصر حادثه به صورت
                          قسطی خواهد بود. این قانون برای حمایت از اشخاص ثالث زیان‌دیده است. خرید و فروش خودرو : امکان خرید و فروش خودرویی که تحت پوشش
                          بیمه شخص ثالث نیست وجود ندارد.
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div class="card border-left border-right border-light">
                      <!-- Card header -->
                      <div id="headingThree4" class="card-header border-bottom border-light" role="tab">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree4"
                          aria-expanded="false"
                          aria-controls="collapseThree4"
                        >
                          <h5 class="black-text font-weight-normal mb-0">
                            آیا دیه زن و مرد، مسلمان و غیر مسلمان برابر است؟
                            <i class="fas fa-angle-down rotate-icon float-left"></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div id="collapseThree4" class="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordionEx">
                        <div class="card-body">
                          بله؛ در قوانین جدید بیمه شخص ثالث دیه زن و مرد و همچنین شخص مسلمان و غیر مسلمان (اهل کتاب) برابر است.
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->
                  </div>
                  <!-- Accordion wrapper -->
                </div>
              </section>
            </div>
          </div>
          <div id="contact-just" class="tab-pane fade ins-tabs" role="tabpanel" aria-labelledby="contact-tab-just">
            <div class="">
              <div class="card-body text-center p-5">
                <!-- Section heading -->
                <h3 class="font-weight-bold my-4">گفتگو با کارشناسان علی‌بیمه</h3>
                <!-- Section description -->
                <p class="font-weight-light mx-auto mb-4 pb-2">برای شروع گفتگو با کارشناسان علی‌بیمه فیلدهای زیر را به درستی پر کنید</p>

                <form class="mb-4 mx-md-5" action="">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <!-- Name -->
                      <input id="name" type="text" class="form-control" placeholder="نام کامل" />
                    </div>
                    <div class="col-md-6 mb-4">
                      <!-- Email -->
                      <input id="email" type="email" class="form-control" placeholder="ایمیل" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <!-- Subject -->
                      <input id="subject" type="text" class="form-control" placeholder="موضوع گفتگو" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <textarea id="message" class="form-control rounded" rows="3" placeholder="توضیحات"></textarea>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-info btn-md">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <check-modal ref="checkout"></check-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import momentJalaali from 'moment-jalaali'
import moment from 'moment'
import FormWizard from '@/components/car-items/thirdparty/FormWizardThirdParty'
import TabContent from '@/components/car-items/TabContent'
import ValidationHelper from '@/components/ValidationHelper'
import ItemClickable from '@/components/car-items/ItemClickable'
import { store } from '@/store/wizard.js'
// import SelectStep from '@/components/car-items/SelectStep'
// import mdbSelect from 'mdbvue'
// const checked = (value) => value === true
export default {
  layout: 'landing-pages',
  components: {
    FormWizard,
    TabContent,
    ItemClickable,
    CheckModal: () => import('@/components/car-items/motorcycle/CheckoutModal'),
  },
  mixins: [ValidationHelper],
  data() {
    return {
      // Steps Data's
      formData: {
        setCarType: null,
        setCarBrand: null,
        setCarModel: null,
        setCarYear: null,
        setCarIns: null,
        setCompanyList: null,
        lastPolicyExpDate: null,
        setDisThirdparty: null,
        setDisDriver: null,
      },
      // Vuelidate Validation Rules
      validationRules: [
        { setCarType: { required } },
        { setCarBrand: { required } },
        { setCarModel: { required } },
        { setCarYear: { required } },
        { setCarIns: { required }, setCompanyList: { required } },
        { lastPolicyExpDate: { required } },
      ],
      // Main Data's
      cartypeName: null,
      cartypeNameLatin: null,
      carbrandName: null,
      carbrandNameLatin: null,
      carmodelName: null,
      CarCylinderData: 0,
      carbuildyear: 0,
      previousCompany: null,
      lastPolicyStartDate: null,
      lastPolicyStartDate1: null,
      lastPolicyExpDate: null,
      lastPolicyExpDate1: null,
      thirdPartyDis: null,
      disHavades: null,
      damageFD: null,
      damageLD: null,
      damageDD: null,
      carTID: null,
      carBID: null,
      carMID: null,

      storeState: store.state,
      lastTab: 0,
      selected: null,
      selectedType: {},
      selectedBrand: {},
      selectedBrandId: 0,
      selectedModelId: 0,
      selectCompanyID: null,
      carBuildModel: {},

      dateNow: null,
    }
  },
  computed: {
    ...mapGetters({
      getCarTypes: 'car/getCarTypes',
      companyList: 'company/companyList',
      carBuildYears: 'carBuildYearList',
      carThirdDiscounts: 'carThirdDiscountList',
      carDriverDiscounts: 'carDriverDiscountList',
      carFDamage: 'carThirdFinancialDamageList',
      carLDamage: 'carThirdLifeDamageList',
      carDDamage: 'carDriverLifeDamageList',
    }),
    carBuildItems() {
      const years = this.$misc.cloneDeep(this.carBuildYears)
      return years.sort((a, b) => b.value - a.value)
    },
  },
  watch: {
    lastTab() {
      store.setLastTab(this.lastTab)
    },
    cartypeName() {
      store.setcartypeName(this.cartypeName)
    },
    carbrandName() {
      store.setcarBrandName(this.carbrandName)
    },
    carmodelName() {
      store.setcarmodelName(this.carmodelName)
    },
    carbuildyear() {
      store.setcarbuildyear(this.carbuildyear)
    },
    previousCompany() {
      store.setpreviousCompanyName(this.previousCompany)
    },
    deep: true,
  },

  methods: {
    // set Car Data's
    CarTypeName(item) {
      this.cartypeName = item
      console.log(this.cartypeName) // eslint-disable-line
    },
    CarTypeNameLatin(item) {
      this.cartypeNameLatin = item
      console.log(this.cartypeNameLatin) // eslint-disable-line
    },
    CarBrandName(item) {
      this.carbrandName = item
      console.log(this.carbrandName) // eslint-disable-line
    },
    CarBrandNameLatin(item) {
      this.carbrandNameLatin = item
      console.log(this.carbrandNameLatin) // eslint-disable-line
    },
    CarModelName(item) {
      this.carmodelName = item
      console.log(this.carmodelName) // eslint-disable-line
    },
    CarCylinder(item) {
      if (item === undefined) {
        this.CarCylinderData = 0
      } else {
        this.CarCylinderData = item
      }
      console.log(this.CarCylinderData) // eslint-disable-line
    },
    selectCarYear(item) {
      this.carbuildyear = item
      console.log(this.carbuildyear) // eslint-disable-line
    },
    selectCompany(item) {
      this.formData.setCompanyList = item
      this.previousCompany = item.companyName
      console.log(this.previousCompany) // eslint-disable-line
    },
    SelectedlastPolicyExpDate() {
      this.lastPolicyStartDate1 = moment(this.lastPolicyStartDate).format('YYYY/MM/DD')
      this.lastPolicyExpDate1 = moment(this.lastPolicyExpDate).format('YYYY/MM/DD')
      this.formData.lastPolicyExpDate = this.lastPolicyExpDate
    },
    selectDisThirdparty(data) {
      this.thirdPartyDis = data
      console.log(this.thirdPartyDis) // eslint-disable-line
    },
    selectDisHavades(data) {
      this.disHavades = data
      console.log(this.disHavades) // eslint-disable-line
    },

    // Post to Next Page
    changeLTabTrue1(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty/?car_type=${this.cartypeNameLatin}&car_brand=${this.carbrandNameLatin}&car_model=${this.carmodelName}&carTID=${this.carTID}&carBID=${this.selectedBrandId}&carMID=${this.selectedModelId}&car_build_year=${this.storeState.getCarbuildyear}`,
      })
    },
    changeLTabTrue2(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty/?car_type=${this.cartypeNameLatin}&car_brand=${this.carbrandNameLatin}&car_model=${this.carmodelName}&carTID=${
          this.carTID
        }&carBID=${this.selectedBrandId}&carMID=${this.selectedModelId}&car_build_year=${this.storeState.getCarbuildyear}&previous_company=${
          this.previousCompany
        }&lastPolicy_StartDate=${momentJalaali(this.lastPolicyStartDate).format('jYYYY/jMM/jDD')}&lastPolicy_ExpDate=${
          this.lastPolicyExpDate1
        }&DisThirdparty=${this.formData.setDisThirdparty}&DisDriver=${this.formData.setDisDriver}`,
      })
    },
    changeLTabTrue3() {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty/?car_type=${this.cartypeNameLatin}&car_brand=${this.carbrandNameLatin}&car_model=${this.carmodelName}&carTID=${
          this.carTID
        }&carBID=${this.selectedBrandId}&carMID=${this.selectedModelId}&car_build_year=${this.storeState.getCarbuildyear}&previous_company=${
          this.previousCompany
        }&lastPolicy_StartDate=${momentJalaali(this.lastPolicyStartDate).format('jYYYY/jMM/jDD')}&lastPolicy_ExpDate=${
          this.lastPolicyExpDate1
        }&DisThirdparty=${this.formData.setDisThirdparty}&DisDriver=${this.formData.setDisDriver}&financialDamage=${this.damageFD}&lifeDamage=${
          this.damageLD
        }&havadesDamage=${this.damageDD}`,
      })
    },

    // Middle Data's
    selectCar(item) {
      this.selectedType = item
      this.formData.setCarType = item
    },
    carTypeID(item) {
      this.carTID = item

      console.log(this.carTID) // eslint-disable-line
    },
    selectBrand(item) {
      this.selectedBrand = item
    },
    selectBrandId(item) {
      this.selectedBrandId = item
      this.formData.setCarBrand = item
    },
    selectModelId(item) {
      this.selectedModelId = item
      console.log(this.selectedModelId) // eslint-disable-line
    },
    selectCoID(item) {
      this.selectCompanyID = item
    },
    damageselectchanges() {
      console.log(this.damageFD + this.damageLD + this.damageDD) // eslint-disable-line
      if (this.damageFD && this.damageLD && this.damageDD) {
        return this.changeLTabTrue3()
      }
    },
    onComplete() {
      this.$refs.formwizard.changeStatus()
    },
    reset() {
      for (const field in this.formData) {
        this.formData[field] = null
      }
    },
    onRunCheckoutModal() {
      this.$refs.checkout.showModal()
    },

    nextStep() {
      // eslint-disable-line
    },

    previousStep() {
      // alert("On Previous Step");
    },

    changeLTabFalse(event) {
      this.lastTab = 0
    },
  },
}
</script>

<style></style>
