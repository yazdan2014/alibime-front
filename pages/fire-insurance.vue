<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <form-wizard ref="formwizard" @onComplete="onComplete" @onNextStep="nextStep" @onPreviousStep="previousStep" @onReset="reset">
      <tab-content title="نوع ملک خود را انتخاب کنید">
        <div class="form-group">
          <div class="grid-view">
            <item-clickable
              v-for="item in homeTypeItems"
              :key="item.title"
              for="homeType"
              :title="item.title"
              :src="item.src"
              :selected="item.id === selectBuildingTypeID"
              @click.native="BuildingSelectId(item.id), $refs.formwizard.nextTab()"
            />
          </div>
        </div>
      </tab-content>
      <tab-content title="نوع سازه ساختمان را انتخاب کنید">
        <select :class="hasError('referral') ? 'is-invalid' : ''" class="form-control d-none"></select>
        <div class="form-group">
          <div class="grid-view">
            <item-clickable
              v-for="item in materialTypeItems"
              :key="item.title"
              for="homeType"
              :title="item.title"
              :src="item.src"
              :selected="item.id === selectMaterialTypeid"
              @click.native="MaterialSelectId(item.id), $refs.formwizard.nextTab()"
            />
          </div>
        </div>
      </tab-content>
      <tab-content title="سال ساخت ساختمان">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">سال ساخت ساختمان را مشخص کنید</div>
              <b-form-select
                id="carbuildselected"
                v-model="buildingProductionYear"
                class="scrollbar scrollbar-primary single_select"
                :options="BuildingYears"
                :select-size="10"
                @change="selectBuildingYear(), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="متراژ را مشخص کنید">
        <div class="text-center">
          <div v-if="selectBuildingTypeID === 1" class="date_title">متراژ واحد را وارد کنید</div>
          <div v-if="selectBuildingTypeID === 2" class="date_title">متراژ زیربنا را وارد کنید</div>
          <div v-if="selectBuildingTypeID === 3" class="date_title">متراژ مجتمع را وارد کنید</div>
          <b-form-input
            v-model="buildingMeter"
            v-currency="{
              locale: 'ir',
              currency: { prefixmeter, suffixmeter },
              valueAsInteger: true,
              distractionFree: false,
              precision: 0,
              autoDecimalMode: false,
              valueRange: { min: 50, max: 5000 },
              allowNegative: false,
            }"
            placeholder="مثلا 100 متر مربع"
            class="select__ input_currency text-center"
            @change="selectMeter()"
          >
          </b-form-input>
        </div>
      </tab-content>
      <tab-content title="ارزش لوازم خانه">
        <div class="text-center">
          <div class="date_title">ارزش لوازم داخل خانه را وارد کنید</div>
          <b-form-input
            v-model="buildingPropertiesValue"
            v-currency="{
              locale: 'ir',
              currency: { prefix, suffix },
              valueAsInteger: false,
              distractionFree: false,
              precision: 0,
              autoDecimalMode: false,
              valueRange: { min: 500000, max: 5000000000 },
              allowNegative: false,
            }"
            class="select__ input_currency text-center"
            placeholder="مثلا 50,000,000 تومان"
            @change="selectPropertiesValue()"
          >
          </b-form-input>
          <b-form-checkbox
            id="PropertiesNotValue"
            name="PropertiesNotValue"
            value="accepted"
            unchecked-value="not_accepted"
            @change="selectPropertiesNotValue(), $refs.formwizard.nextTab()"
          >
            قصد بیمه لوازم خانه را ندارم
          </b-form-checkbox>
        </div>
      </tab-content>
      <tab-content title="پوشش های مدنظر را مشخص کنید">
        <div class="grid-view">
          <div class="text-center">
            <div class="date_title">پوشش های مورد نظر را انتخاب کنید</div>
            <div class="single__sbox">
              <div class="scrollbar scrollbar-primary single_select custom-select text-right">
                <b-form-checkbox
                  id="CoverEarthquake"
                  name="CoverEarthquake"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverEarthquake()"
                >
                  زلزله
                </b-form-checkbox>
                <b-form-checkbox
                  id="CoverRainSnowDamage"
                  name="CoverRainSnowDamage"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverRainSnowDamage()"
                >
                  ضایعات ناشی از آب باران و برف
                </b-form-checkbox>
                <b-form-checkbox
                  id="CoverTheftByBreak"
                  name="CoverTheftByBreak"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverTheftByBreak()"
                >
                  سرقت با شکست حرز
                </b-form-checkbox>
                <b-form-checkbox
                  id="CoverPipeBreak"
                  name="CoverPipeBreak"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverPipeBreak()"
                >
                  ترکیدگی لوله
                </b-form-checkbox>
                <b-form-checkbox
                  id="SubsidenceLandslide"
                  name="SubsidenceLandslide"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverSubsidenceLandslide()"
                >
                  نشست و رانش زمین
                </b-form-checkbox>
                <b-form-checkbox id="CoverFlood" name="CoverFlood" value="not_accepted" unchecked-value="accepted" @change="setCoverFlood()">
                  سیل و طقیان آب
                </b-form-checkbox>
                <b-form-checkbox id="CoverStorm" name="CoverStorm" value="not_accepted" unchecked-value="accepted" @change="setCoverStorm()">
                  طوفان و گردباد
                </b-form-checkbox>
                <b-form-checkbox
                  id="CoverAvalanche"
                  name="CoverAvalanche"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverAvalanche()"
                >
                  سقوط بهمن
                </b-form-checkbox>
                <b-form-checkbox
                  id="CoverHeavySnow"
                  name="CoverHeavySnow"
                  value="not_accepted"
                  unchecked-value="accepted"
                  @change="setCoverHeavySnow()"
                >
                  ریزش سقف براثر سنگینی برف
                </b-form-checkbox>
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
                <h2 id="h-"><strong>بیمه آتش سوزی چیست؟!</strong><strong></strong></h2>

                <p>
                  حفظ و نگهداری اموال از خطرات گوناگون همواره از مهمترین دغدغه های انسان ها بوده است. اقدامات بسياری می توان براي افزايش ضريب امنيت
                  انجام داد. با اين حال تجربه نشان داده است كه حتی استفاده از پيشرفته ترين تجهيزات نيز ضامن امنيت كامل نبوده و نياز به تمهيداتی است كه
                  در صورت وقوع حادثه آتش سوزی و بلايای طبيعی، خسارت وارده به دارايی ها جبران گردد. بیمه آتش سوزی می تواند خسارت هایی که به اموال منقول
                  و غیرمنقول وارد شده است را جبران کند و هزینه آن ها را پرداخت کند
                </p>

                <p>همه این اتفاقات می‌تواند دلیل بسیار مهمی باشد تا به اهمیت بیمه آتش سوزی پی برده و محل کار یا زندگیمان را بیمه کنیم.</p>

                <h3 id="h--1"><strong>بیمه آتش سوزی چیست؟</strong></h3>

                <p>
                  بیمه آتش سوزی بیمه‌نامه‌ای است برای جبران خسارات مالی وارد شده به اموال فرد بر اثر حوادثی که منجر به آتش سوزی و سایر خسارات تحت پوشش
                  این بیمه نامه باشد و در صورتیکه صدمه‌ای به افراد برسد، معمولاً این بیمه آنرا پوشش نمی‌دهد.&nbsp;
                </p>

                <p>
                  در بیمه آتش سوزی شما با پرداخت مبلغی به عنوان حق بیمه، محل مورد نظر و اثاثیه و محتویات متعلق به خود را در برابر خسارات ناشی از آتش
                  سوزی و زلزله تحت پوشش بیمه قرار می‌دهید.
                </p>

                <h3 id="h--2"><strong>پوشش‌های بیمه آتش سوزی</strong><strong></strong></h3>

                <p>پوشش‌های بیمه آتش سوزی شامل دو بخش پوشش های اصلی و پوشش های اضافی می باشد.</p>

                <h4 id="h--3"><strong>پوشش‌های اصلی بیمه آتش سوزی</strong><strong></strong></h4>

                <p>خطرات اصلی که در بیمه آتش سوزی تحت پوشش می‌باشند عبارتند از:</p>

                <ul>
                  <li>
                    <strong>آتش سوزی</strong><br />ترکیب هر نوع ماده با اکسیژن که با تولید شعله همراه شود در دسته خطرات اصلی قرار می‌گیرد که اغلب
                    حوادث و خسارات ناشی از آتش سوزی می‌باشد.
                  </li>
                  <li>
                    <strong>صاعقه</strong><br />تخلیه الکتریکی بین دو ابر یا بین ابر و زمین که منجربه خسارت و یا حتی آتش سوزی شود در این دسته قرار
                    می‌گیرد.
                  </li>
                  <li>
                    <strong>انفجار</strong><br />خساراتی که در اثر آزاد شدن گاز یا بخار انرژی زیادی صورت بگیرد و خسارات زیادی را ایجاد کند در دسته
                    خطرات اصلی بیمه نامه قرار می‌گیرند. البته برخی از انفجارات از جمله انفجارات ناشی از فعل و انفعالات هسته‌ای تحت پوشش این بیمه نامه
                    نمی‌باشد.
                  </li>
                </ul>

                <h4 id="h--4"><strong>پوشش‌های اضافی بیمه آتش سوزی</strong><strong></strong></h4>

                <p>
                  بیمه آتش سوزی تنها خطرات اصلی را پوشش داده و برای جبران خسارت در مقابل خطرات اضافی باید پوشش‌های اضافی را بیمه گذار خریداری نماید.
                  انتخاب هر یک از پوشش‌ها در نحوه محاسبه نرخ بیمه آتش سوزی و استعلام نرخ بیمه آتش سوزی موثر می‌باشد. پوشش های اضافی در بیمه آتش سوزی
                  عبارتند از:
                </p>

                <ul>
                  <li>سیل و طغیان آب رودخانه</li>
                  <li>زلزله و آتش­فشان</li>
                  <li>جبران خسارات ناشی از ترکیدن لوله آب</li>
                  <li>جبران خسارات ضایعات ناشی از آب باران و ذوب برف و تگرگ</li>
                  <li>شکست شیشه</li>
                  <li>سرقت با شکست حرز</li>
                  <li>ریزش سقف ناشی از سنگینی برف</li>
                  <li>رانش زمین</li>
                  <li>سقوط بهمن</li>
                </ul>

                <p>با توجه به ریسک مورد بیمه و انتخاب پوشش‌های اضافی قیمت بیمه آتش سوزی تغییر می‌نماید.</p>

                <h3 id="h--5"><strong>انواع بیمه آتش سوزی</strong><strong></strong></h3>

                <p>تقسیم بندی انواع بیمه نامه‌های آتش سوزی بر اساس نوع کاربری محل مورد بیمه شده به سه دسته تقسیم می‌شود:</p>

                <ul>
                  <li>
                    <strong>منازل مسکونی</strong><br />که در این بیمه نامه همراه ساختمان و اثاثیه،&nbsp; هزینه پاکسازی و سایر خساراتی که در شرایط بیمه
                    آتش سوزی تحت پوشش&nbsp; است قابل جبران می‌باشد.
                  </li>
                  <li>
                    <strong>ساختمان‌های صنعتی</strong><br />ساختمان های صنعتی شامل کارخانجات و غیره می‌باشد که در این بیمه نامه ساختمان، تاسیسات،
                    ماشین آلات و … که در بیمه نامه آورده شده را تحت پوشش قرار می‌دهد.
                  </li>
                  <li>
                    <strong>ساختمان‌های غیر صنعتی</strong><br />شامل واحد‌های تجاری، اداری، خدماتی، رفاهی، خدماتی حتی بیمه آتش سوزی مغازه است که شامل
                    ساختمان، تاسیسات، ارزش دکوراسیون، اثاثیه اداری، موجودی کالا و غیره می باشد که تحت پوشش قرار می‌گیرد.
                  </li>
                </ul>

                <p>
                  در همه انواع بیمه آتش سوزی اوراق بهادار، پول نقد و اشیاء قیمتی، آثار هنری و … &nbsp;در هیچ کدام از شرکت‌های بیمه تحت پوشش قرار
                  نمی‌گیرند.
                </p>

                <h3 id="h--6"><strong>مزایای بیمه آتش سوزی</strong></h3>

                <ul>
                  <li>جبران تمام و کمال خسارت های وارد شده به ساختمان بیمه شده و خطرات احتمالی آن.</li>
                  <li>تامین هزینه هایی که برای جلوگیری از توسعه خسارت انجام می‌پذیرد.</li>
                  <li>کارشناسان بیمه از محل مورد رایگان بازدید کرده و نکات لازم برای جلوگیری از بروز حادثه را گوش زد می‌کنند.</li>
                </ul>

                <h3 id="h--7"><strong>نحوه پرداخت خسارت در بیمه آتش سوزی</strong><strong></strong></h3>

                <p>
                  مهمترین بخش هر بیمه نامه، نحوه پرداخت خسارت در آن &nbsp;بیمه نامه می‌باشد. بیمه آتش سوزی نیز از جمله بیمه نامه‌هایی است که علی رغم
                  حق بیمه بسیار کم در زمان خسارت با انتخاب پوشش‌های درست خسارت قابل توجهی را پرداخت می‌نماید. در این قسمت به بررسی شرایط عمومی بیمه
                  آتش سوزی در زمان خسارت می‌پردازیم.
                </p>

                <h3 id="h--8"><strong>وظایف بیمه گذار در زمان حادثه</strong><strong></strong></h3>

                <p>اگر شما بیمه گذار بیمه نامه آتش سوزی هستید، دانستن چند نکته مهم در زمان اتفاق افتادن آتش سوزی بسیار ضروری می‌باشد.</p>

                <ul>
                  <li>اقدامات لازم برای پیشگیری از از گسترش آتش را حتما انجام دهید.</li>
                  <li>شما به عنوان بیمه گذار، باید حداکثر ظرف مدت 5 روز شرکت بیمه را از حادثه آتش سوزی مطلع کنید.</li>
                  <li>
                    اگر در حین حادثه توانسته‌اید وسایلی را نجات دهید ، تا 10 روز بعد از حادثه لیستی از وسایل نجات داده شده و مبلغ تقریبی خسارت وارد
                    شده را به شرکت بیمه اعلام نمایید.
                  </li>
                  <li>
                    شما حداکثر تا 15 روز وقت دارید که فهرستی از اموال موجود در مکانی که دچار حریق شده و میزان اموال از بین رفته را تهیه&nbsp; به شرکت
                    بیمه ارسال کنید.
                  </li>
                </ul>

                <p>البته پرداخت خسارت بر اساس لیستی که ضمیمه بیمه نامه بوده انجام می‌شود.</p>

                <h4 id="h--9"><strong>کارشناسی خسارت آتش سوزی</strong><strong></strong></h4>

                <p>
                  بعد از این که شما گزارش آتش سوزی را به شرکت بیمه ارسال کرده و شرکت بیمه را از حادثه مطلع کرده‌اید، کارشناسی از سوی بیمه گر برای
                  ارزیابی خسارت به محل حادثه ارسال می‌شود.
                </p>

                <p>
                  کارشناس با بررسی تمامی جوانب حادثه ارزیابی میزان خسارت را انجام داده و &nbsp;شرکت بیمه بر اساس گزارش کارشناس میزان خسارت پرداختی را
                  به بیمه گذار اعلام می‌نماید. اگر طرفین در میزان خسارت برآورد شده به توافق برسند‌، مبلغ خسارت پرداخت می‌شود.
                </p>

                <p>
                  اما اگر در میزان خسارت برآورد شده شرکت بیمه و بیمه گذار به توافق نرسند، بر اساس درخواستی که شما به شرکت بیمه ارائه می‌نمایید هیاتی 3
                  نفره در شرکت بیمه تشکیل و درخواست شما بررسی می‌شود.
                </p>

                <h4 id="h--10"><strong>فرانشیز بیمه آتش سوزی</strong><strong></strong></h4>

                <p>
                  همانطور که می‌دانید فرانشیز آن قیمت از خسارت است که باید توسط خود بیمه گذار پرداخت شود. در بیمه‌های آتش سوزی معمولا از اعمال فرانشیز
                  خودداری می‌کنند چراکه خسارت‌های بیمه نامه‌های آتش‌سوزی نسبت به حق بیمه‌ای که بیمه گذار پرداخت کرده بسیار ناچیز می‌باشد. اما اگر
                  خسارت مربوط به پوشش‌های اضافی باشد، فرانشیز خسارت در بیمه نامه منظور می‌شود.
                </p>

                <p>میزان فرانشیز در خسارت‌های مختلف و در شرکت‌های بیمه مختلف متفاوت است.</p>

                <h3 id="h--11"><strong>محاسبه نرخ بیمه آتش سوزی</strong><strong></strong></h3>

                <p>برای محاسبه نرخ بیمه آتش سوزی باید تمامی عواملی که در محاسبه تعرفه بیمه آتش سوزی ساختمان و اموال موثرند را بررسی کنیم.</p>

                <p>همه شرکت‌های بیمه در محاسبه نرخ بیمه آتش سوزی از فاکتورهای زیر استفاده می‌کنند:</p>

                <ul>
                  <li><strong>میزان زیربنا</strong><br />سطح زیر بنای ساختمان از فاکتورهای مهم قیمت بیمه آتش سوزی می‌باشد.</li>
                  <li>
                    <strong>نوع سازه بنا</strong><br />نرخ بیمه آتش سوزی برای هر کدام از ساختمان‌ها با اسکلت فلزی و یا اسکلت بتنی و گلی و آجری متفاوت
                    می‌باشد. برای ساختمان‌های دارای آیین نامه 2800 نیز نرخ متفاوتی اعلام می‌شود.
                  </li>
                  <li>
                    <strong>هزینه ساخت و بازسازی هر متربع از بنا</strong><br />هزینه بازسازی ساختمان نیز از عوامل&nbsp; تعیین کننده در قیمت بیمه آتش
                    سوزی است.
                  </li>
                  <li>
                    <strong>ارزش اثاثیه و موجودی</strong><br />ارزش ریالی همه لوازمی که می‌خواهید تحت پوشش بیمه قرار بگیرد باید مشخص شود و بر اساس
                    ارزش واقعی هر کدام از اثاثیه بیمه نامه صادر می‌شود. برای ساختمان‌های مسکونی ارزش لوازم منزل، برای ساختمان‌های غیر صنعتی ارزش
                    دکوراسیون و موجودی انبار و برای ساختمان‌های صنعتی ارزش تاسیسات و ماشین آلات به ارزش بنا اضافه شده و باعث افزایش حق بیمه می‌شود.
                  </li>
                </ul>

                <p>افرادی که مستاجر هستند می‌توانند تنها لوازم منزلشان را بیمه آتش سوزی کنند و مبلغ کمتری را نیز بابت بیمه نامه پرداخت کنند.</p>

                <h4 id="h--12"><strong>انتخاب پوشش‌های اضافی</strong><strong></strong></h4>

                <p>
                  انتخاب هر پوشش‌های اضافی بر اساس نرخی که دارد، در قیمت بیمه آتش سوزی موثر می‌باشد. بیمه زلزله در حقیقت یکی از پوشش‌های اضافی مهم در
                  بیمه آتش سوزی است.
                </p>

                <h4 id="h--13"><strong>ریسک منطقه محل بیمه شده</strong><strong></strong></h4>

                <p>
                  محاسبه ریسک مکانی که قرار است بیمه نامه داشته باشد از مهمترین گزینه‌های محاسبه نرخ بیمه نامه آتش سوزی است، ریسک مناطقی که تراکم
                  بالای جمعیت دارند و یا حتی در بافت فرسوده هستند همانند بافت بازارهای قدیمی از لحاظ ریسک پذیری در سطح بالایی بوده و نرخ بالایی را
                  خواهند داشت.
                </p>

                <h2 id="h--14">بیمه زلزله</h2>

                <p>
                  بیمه زلزله یکی از پوشش های اضافی بیمه آتش سوزی می‌باشد و طبق قوانین شرکت بیمه موظف به پرداخت خسارت در صورت از بین رفتن ساختمان
                  ،اموال و دارایی های موجود می باشد.
                </p>

                <p>با پرداخت اندک هزینه بیمه زلزله ،تمام خسارت های که بر اثر آتش سوزی و زلزله به اموال و دارایی شخص وارد می‌شود ،جبران خواهد شد.</p>

                <p>
                  لازم به ذکر است که شما نمی‌توانید بیمه زلزله را به صطورت جداگانه خرید نمایید زیرا که جزء پوشش اضافی بیمه آتش سوزی می‌باشد و بیمه
                  زلزله تنها خسارت های مالی را تحت پوشش خود قرار می‌دهد و تعهدی نسبت به خسارت جانی ندارد.
                </p>

                <h3 id="h--15">نرخ بیمه زلزله</h3>

                <p>تعیین نرخ بیمه زلزله به پارامترهای مختلفی بستگی دارد که باهم به بررسی آنها می‌ پردازیم:</p>

                <ul>
                  <li>تفاوت در نوع سازه و اسکلت بندی ساختمان (بتنی ،فلزی ،آجری وگلی).</li>
                  <li>میزان متراژ ملک</li>
                  <li>هزینه ساخت یک متر مربع بنا.</li>
                  <li>ارزش اثاثیه منزل</li>
                  <li>
                    محل جغرافیایی و شهری که درآن ملک وجود دارد که با توجه به مناطق زیر دسته بندی می‌شوند:<br />منطقه ۱ (حداقل خطر):اصفهان ،سنندج ،اراک
                    و...<br />منطقه ۲ :ابهر ،یزد ،سوسنگرد ،شهرکرد<br />منطقه ۳ :مشهد ، اهواز ، بوشهر<br />منطقه ۴ :شیراز ،زاهدان ،ایلام ،تبریز و...<br />منطقه
                    ۵ (حداکثر خطر) :تهران ،کرج ،قم ،قزوین ،کرمان و...
                  </li>
                </ul>

                <h3 id="h--16">تضمین پرداخت خسارت در زمان زلزله</h3>

                <p>
                  یکی از نگرانی هایی که وجود دارد در مورد تضمین پرداخت خسارت در زمان زلزله می‌باشد برای برطرف شدن چنین مشکلی شما باید به گستردگی شرکت
                  های بیمه توجه داشته باشید و بدانید که شرکت بیمه مختص به یک شهر نمی‌باشد.
                </p>
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
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { CurrencyDirective } from 'vue-currency-input'
import { store } from '@/store/wizard.js'
import TabContent from '@/components/car-items/TabContent'
import FormWizard from '@/components/fire-insurance/FormWizardFireIns'
import ItemClickable from '@/components/fire-insurance/ItemClickable'
import ValidationHelper from '@/components/ValidationHelper'

export default {
  layout: 'main',
  directives: {
    currency: CurrencyDirective,
  },
  components: {
    FormWizard,
    TabContent,
    ItemClickable,
  },
  mixins: [ValidationHelper],
  data() {
    return {
      formData: {
        selectHomeType: null,
        selectMaterialType: null,
        setBuildingYear: null,
        setMeter: null,
        setAccessoriPrice: null,
        setCover: null,
      },
      validationRules: [
        { selectHomeType: { required } },
        { selectMaterialType: { required } },
        { setBuildingYear: { required } },
        { setMeter: { required } },
        { setAccessoriPrice: { required } },
        { setCover: { required } },
      ],

      // Main Data's
      buildingType: null,
      buildingStructureType: null,
      buildingProductionYear: null,
      buildingMeter: null,
      buildingPropertiesValue: null,
      buildingCostPerAreaUnit: 1000000,
      coverTheftByBreak: false,
      coverPipeBreak: false,
      coverSubsidenceLandslide: false,
      coverEarthquake: false,
      coverRainSnowDamage: false,
      coverFlood: false,
      coverStorm: false,
      coverAvalanche: false,
      coverHeavySnow: false,

      // Middle Data's
      lastTab: 0,
      buildingTypeName: null,
      buildingStructureTypeName: null,
      selectBuildingTypeID: null,
      selectMaterialTypeid: null,
      suffixmeter: ' متر مربع',
      prefixmeter: null,
      suffix: ' تومان',
      prefix: null,
      homeTypeItems: [
        {
          id: 1,
          title: 'یک واحد آپارتمانی',
          src: '/resource/img/icons/fire-ins/single-apartment.svg',
        },
        {
          id: 2,
          title: 'یک واحد ویلایی',
          src: '/resource/img/icons/fire-ins/house.svg',
        },
        {
          id: 3,
          title: 'مجتمع مسکونی',
          src: '/resource/img/icons/fire-ins/apartment.svg',
        },
      ],
      materialTypeItems: [
        {
          id: 1,
          value: 'concrete',
          title: 'ساختمان بتنی',
          src: '/resource/img/icons/fire-ins/concrete.svg',
        },
        {
          id: 2,
          value: 'iron',
          title: 'ساختمان فلزی',
          src: '/resource/img/icons/fire-ins/iron.svg',
        },
        {
          id: 3,
          value: 'brick',
          title: 'ساختمان آجری',
          src: '/resource/img/icons/fire-ins/brick.svg',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      BuildingYears: 'BuildingYear',
    }),
  },
  watch: {
    lastTab() {
      store.setLastTab(this.lastTab)
    },
    buildingTypeName() {
      store.setBuildingType(this.buildingTypeName)
    },
    buildingStructureTypeName() {
      store.setbuildingStructureType(this.buildingStructureTypeName)
    },
    buildingProductionYear() {
      store.setbuildingProductionYear(this.buildingProductionYear)
    },
    buildingMeter() {
      store.setbuildingMeter(this.buildingMeter)
    },
    buildingPropertiesValue() {
      store.setbuildingPropertiesValue(this.buildingPropertiesValue)
    },

    deep: true,
  },
  methods: {
    setCoverEarthquake() {
      this.coverEarthquake = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverTheftByBreak() {
      this.coverTheftByBreak = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverPipeBreak() {
      this.coverPipeBreak = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverSubsidenceLandslide() {
      this.coverSubsidenceLandslide = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverRainSnowDamage() {
      this.coverRainSnowDamage = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverFlood() {
      this.coverFlood = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverStorm() {
      this.coverStorm = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverAvalanche() {
      this.coverAvalanche = true
      this.formData.setCover = 1
      this.lastTab = 1
    },
    setCoverHeavySnow() {
      this.coverHeavySnow = true
      this.formData.setCover = 1
      this.lastTab = 1
    },

    BuildingSelectId(id) {
      this.selectBuildingTypeID = id
      this.formData.selectHomeType = id
      if (id === 1) {
        this.buildingType = 'single-apartment'
        this.buildingTypeName = 'آپارتمانی'
      } else if (id === 2) {
        this.buildingType = 'house'
        this.buildingTypeName = 'ویلایی'
      } else {
        this.buildingType = 'apartment'
        this.buildingTypeName = 'مجتمع'
      }
    },
    MaterialSelectId(id) {
      this.selectMaterialTypeid = id
      this.formData.selectMaterialType = id
      if (id === 1) {
        this.buildingStructureType = 'concrete'
        this.buildingStructureTypeName = 'بتونی'
      } else if (id === 2) {
        this.buildingStructureType = 'iron'
        this.buildingStructureTypeName = 'فلزی'
      } else {
        this.buildingStructureType = 'brick'
        this.buildingStructureTypeName = 'آجری'
      }
      console.log(this.selectMaterialTypeid) // eslint-disable-line
    },
    selectBuildingYear() {
      this.formData.setBuildingYear = this.buildingProductionYear
    },
    selectMeter() {
      this.formData.setMeter = this.buildingMeter
    },
    selectPropertiesValue() {
      this.formData.setAccessoriPrice = this.buildingPropertiesValue
      console.log(this.buildingPropertiesValue) //eslint-disable-line
    },
    selectPropertiesNotValue() {
      this.formData.setAccessoriPrice = 0
      this.buildingPropertiesValue = 0
    },

    onComplete() {
      this.$router.push({
        path: `/compare/fire-ins/?building_type=${this.buildingType}&structure_type=${this.buildingStructureType}&production_year=${this.buildingProductionYear}&building_meter=${this.buildingMeter}&properties_value=${this.buildingPropertiesValue}&cover_theft_break=${this.coverTheftByBreak}&cover_pipe_break=${this.coverPipeBreak}&cover_subsidence_landslide=${this.coverSubsidenceLandslide}&cover_earthquake=${this.coverEarthquake}&cover_rain_snow_damage=${this.coverRainSnowDamage}&cover_flood=${this.coverFlood}&cover_storm=${this.coverStorm}&cover_avalanche=${this.coverAvalanche}&cover_heavy_snow=${this.coverHeavySnow}`,
      })
    },
    reset() {
      // for (const field in this.formData) {
      //   this.formData[field] = null
      // }
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
  },
}
</script>
