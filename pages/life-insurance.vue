<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <form-wizard
      ref="formwizard"
      @onComplete="onComplete"
      @onNextStep="nextStep"
      @onPreviousStep="previousStep"
      @onReset="reset"
    >
      <tab-content title="سال تولد">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">سال تولد بیمه گذار را انتخاب کنید</div>
              <b-form-select
                id="carbuildselected"
                v-model="birthYear"
                class="scrollbar scrollbar-primary single_select"
                :options="BuildingYears"
                :select-size="10"
                @change="selectBirthYear(), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="مدت قرارداد">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">مدت قرارداد را مشخص کنید</div>
              <b-form-select
                id="carbuildselected"
                v-model="contractDuration"
                class="scrollbar scrollbar-primary single_select"
                :options="ContractDuration"
                :select-size="10"
                @change="selectContractDuration(), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="نحوه پرداخت بیمه عمر">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">نحوه دوره پرداخت را انتخاب کنید</div>
              <b-form-select
                id="premiumInstallment"
                v-model="premiumInstallmentNum"
                class="scrollbar scrollbar-primary single_select"
                :options="PremiumInstallment"
                :select-size="10"
                @change="PremiumInstallmentNum(), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="توان پرداخت دوره‌ای"
        ><div class="text-center">
          <div v-if="premiumInstallmentNum === 3" class="date_title">
            میزان پرداخت سه ماهه
          </div>
          <div v-if="premiumInstallmentNum === 2" class="date_title">
            میزان پرداخت شش ماهه
          </div>
          <div v-if="premiumInstallmentNum === 1" class="date_title">
            میزان پرداخت یک ساله
          </div>
          <b-form-input
            v-model="premium"
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
            @change="selectPremium()"
          >
          </b-form-input>
        </div>
      </tab-content>
      <tab-content title="افزایش سالانه حق بیمه">
        <div class="form-group">
          <div class="grid-view">
            <div class="single__sbox">
              <div class="_title">میزان افزایش سالانه حق بیمه را مشخص کنید</div>
              <b-form-select
                id="premiumInstallment"
                v-model="premiumIncreaseRate"
                class="scrollbar scrollbar-primary single_select"
                :options="PremiumIncreaseRateItem"
                :select-size="10"
                @change="
                  selectPremiumIncreaseRate(), $refs.formwizard.nextTab()
                "
              >
              </b-form-select>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="دریافتی ذی‌نفعان پس از فوت احتمالی در سال اول">
      </tab-content>
      <tab-content title="افزایش سالانه سرمایه فوت"> </tab-content>
    </form-wizard>
    <div class="container">
      <div class="about-ins">
        <ul
          id="myTabJust"
          class="nav nav-tabs nav-justified md-tabs indigo mw-625"
          role="tablist"
        >
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
          <div
            id="home-just"
            class="tab-pane fade ins-tabs show active"
            role="tabpanel"
            aria-labelledby="home-tab-just"
          >
            <div class="scrollbar scrollbar-primary content-scrollbar">
              <div class="col-12 content-ins">
                <!-- wp:heading -->
                <h2 id="h-">همه چیز درباره بیمه عمر</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  در هر قرارداد بیمه نامه عمر ، یکسری از خطرات احتمالی ذکر می
                  شود که تحت پوشش بیمه گر بوده و در صورت بروز این خطرات ، بیمه
                  گر موظف به جبران آن خواهد بود.<br />در حالت دیگر ، بیمه گذار
                  نیز می تواند درخواست پوشش اضافی بیمه را داشته باشد.<br />(
                  توجه داشته باشید که تمامی حق و حقوق پوشش اضافی بیمه ها ، جهت
                  خطرات احتمالی در نظر گرفته و در نتیجه اندوخته ای ندارند )
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  در بیمه عمر علاوه بر پوشش های مربوط به خطر فوت و تامین هزینه
                  های دوره باز نشستگی (اندوخته سرمایه گذاری) ، برخی از این پوشش
                  های اضافی در قالب بیمه های تکمیلی عمر ، قابل ارائه می باشد.<br />در
                  پوشش اضافی ، کلیه حق بیمه مربوط به جذب خطر می باشد بدین صورت
                  که پوشش های اضافی ، اندوخته به اصطلاح ریاضی و ارزش باز خرید را
                  شامل نمی شوند<br />در بیمه عمر و پوشش اضافی مربوط به آن به
                  صورت یک قرارداد واحد تشکیل و اگر در شرایطی قرارداد اصلی باطل ،
                  به حالت تعلیق یا فسخ شوند ، پوشش های اضافی آن نیز از بین خواهد
                  رفت.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  بیمه عمر نوعی سرمایه‌گذاری بلندمدت دارای پوشش‌های بیمه ای است.
                  بیمه گزار با پرداخت ماهانه مبلغ مشخص یا کل مبلغ سالانه به صورت
                  یک جا، تحت پوشش بیمه عمر و سرمایه‌گذاری قرار خواهد گرفت. بیمه
                  عمر و سرمایه‌گذاری، ریسک های فوت، از کارافتادگی، برخی از
                  بیماری‌های خاص و نقص‌عضو را پوشش می‌دهد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--1">اصطلاحات مهم در بیمه عمر</h3>
                <!-- /wp:heading -->

                <!-- wp:list -->
                <ul>
                  <li>
                    <strong>سرمایه عمر</strong><br />سرمایه‌ای است که در صورت
                    فوت بیمه‌شده به ذینفعان او پرداخت می‌شود.
                  </li>
                  <li>
                    <strong>سرمایه حادثه</strong><br />سرمایه‌ای است که در صورت
                    فوت بیمه‌شده بر اثر حادثه به ذینفعان او پرداخت می‌شود.
                  </li>
                  <li>
                    <strong>ذینفع</strong><br />ذینفع کسی است که در صورت فوت
                    بیمه‌شده، سرمایه بیمه عمر به او تعلق خواهد گرفت. برای مثال
                    شخصی خودش را بیمه می‌کند. در این حالت بیمه‌گزار و بیمه‌شونده
                    خود او خواهد بود. در صورتی‌که در بیمه‌نامه‌‌اش همسرش را به
                    عنوان ذینفع خود ذکر کند بعد از فوت او سرمایه بیمه عمرش به
                    همسر او تعلق خواهد گرفت.
                  </li>
                  <li>
                    <strong>مدت قرارداد</strong><br />مدت‌زمانی که بیمه‌گزار
                    متعهد به پرداخت حق بیمه است و شرکت بیمه، بیمه‌شده را تحت
                    پوشش‌های بیمه عمر قرار می‌دهد. در شرکت‌های مختلف برای مدت
                    قرارداد حداقلی وجود دارد که شما خود آن را انتخاب می‌کنید.
                  </li>
                  <li>
                    <strong>ضریب تشکیل سرمایه بیمه عمر</strong><br />ضریبی است
                    که بر حق بیمه ماهانه اعمال می‌شود و سرمایه عمر را تعیین
                    می‌کند. شرکت‌های مختلف ضرایب تشکیل سرمایه متفاوتی را ارائه
                    می‎دهند. برای مثال حق بیمه ماهانه 20 هزار تومان است و ضریب
                    تشکیل سرمایه 300. سرمایه عمر فرد 6 میلیون تومان خواهد بود.
                  </li>
                  <li>
                    <strong>درصد افزایش سالانه حق بیمه</strong><br />برای خنثی
                    کردن اثر تورم بر سرمایه ذخیره شده در بیمه عمر و حفظ ارزش آن،
                    سالانه درصدی به حق بیمه پرداختی اضافه می‌شود. بسته به شرکت
                    بیمه می‌توانید ضرایب افزایش سالانه متفاوتی را انتخاب کنید.
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--2">محاسبه بیمه عمر</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  اولین و مهمترین گزینه در انتخاب بیمه عمر، انتخاب بیمه عمری است
                  که بر اساس شرایط و نیازهای خود فرد خریداری شود، انتخاب برترین
                  شرکت بیمه ای برای داشتن بیمه نامه ای مطمئن می‌‌تواند یکی از
                  مهمترین پایه های خرید بیمه عمر باشد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  اولین فاکتور در محاسبه بیمه عمر میزان حق بیمه است که فرد
                  پرداخت می‌کند. انتخاب حق بیمه عمر با حداقل ماهانه 50
                  هزار‌تومان و تا سقف سالانه 8 میلیون تومان، البته با توجه به
                  شرایط بیمه عمر می‌توان حق بیمه های عمر را سالانه افزایش داد.
                  میزان این ضریب در شرکت های مختلف بیمه‌ای&nbsp; متفاوت است، و
                  می توان ضریب 5 درصد، 10 درصد، 15درصد و 20 درصد را برای افزایش
                  سالانه بیمه عمر انتخاب کنید.<br />
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--3">انواع بیمه عمر و سرمایه‌گذاری</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  شرکت های بیمه‌گر انواع مختلف بیمه عمر را در طرح‌های مختلف
                  ارائه می‌دهند که هرکدام پوشش‌ها و مزایای خاص خود دارند:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>
                    <strong>بیمه عمر ساده زمانی</strong><br />در این بیمه‌نامه،
                    فقط اگر در پایان مدت اعتبار بیمه‌نامه، فرد بیمه‌گزار فوت
                    کرده باشد، به بازماندگان او سرمایه عمر پرداخت می‌شود.
                  </li>
                  <li>
                    <strong>بیمه تمام عمر</strong><br />در این طرح بیمه‌عمر،
                    پوشش خسارت فوت تا پایان عمر فرد جاری است.
                  </li>
                  <li>
                    <strong>بیمه عمر و سرمایه گذاری</strong><br />کامل ترین نوع
                    بیمه که دارای گزینه‌های سرمایه‌گذاری بوده و پوشش‌های بیمه‌ای
                    نیز ارائه می کند. از طرحهای این نوع بیمه عمر و سرمایه گذاری،
                    می توان به بیمه مستمری ، بیمه بازنشستگی و بیمه آتیه کودکان
                    اشاره کرد.
                  </li>
                  <li>
                    <strong>بیمه عمر مانده بدهکار</strong><br />اگر بیمه‌گزار
                    وام بانکی داشته باشد و در طول مدت اعتبار این نوع بیمه نامه
                    فوت کند، شرکت بیمه‌گر باقی وام او را پرداخت خواهد کرد.
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading -->
                <h2 id="h--4">پوشش‌های بیمه عمر</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  در کنار سرمایه گذاری و اندوخته مالی که شکل می‌گیرد، برخی
                  پوشش‌های دیگر برای بیمه گذاران ارائه می‌شود که شرح کامل
                  پوشش‌های بیمه عمر عبارتند از:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>
                    <strong>پوشش فوت عادی بیمه عمر (فوت به هر علت)</strong
                    ><br />با فوت بیمه شده، شاید تامین مالی مخصوصا برای زمانی که
                    بیمه شده سرپرست خانواده باشد مهمترین گزینه باشد، بر اساس
                    شرایط بیمه نامه عمر با فوت وی سرمایه فوت بیمه عمر به همراه
                    اندوخته سرمایه گذاری شده به ذینفعان وی پرداخت می شود.
                  </li>
                  <li>
                    <strong>پوشش فوت&nbsp; بر اثر حادثه در بیمه عمر</strong
                    ><br />در کنار پوشش فوت طبیعی، داشتن پوشش فوت بر اثر حادثه
                    از دیگر پوشش‌های این بیمه نامه می‌باشد. میزان سرمایه فوت
                    حادثی نیز در واقع ضریبی از حق بیمه است. میزان سرمایه فوت
                    حادثی چندین برابر سرمایه فوت طبیعی می‌باشد.
                  </li>
                  <li>
                    <strong>امراض خاص</strong><br />پوشش امراض بیمه های عمر برای
                    5 دسته از بیماری ها از جمله سکته قلبی، سکته مغزی، جراحی باز
                    قلب، پیوند اعضای اصلی بدن، و انواع سرطان می‌باشد. در صورت
                    ابتلای فرد به هر کدام از بیماری‌های فوق شرکت بیمه مبلغی را
                    به عنوان هزینه درمان بیماری های خاص به فرد پرداخت می‌کند.
                  </li>
                  <li>
                    <strong>پوشش از کارافتادگی بیمه عمر</strong><br />این پوشش
                    برای زمانی است که فرد بیمه شده به هر علتی از کارافتاده شده و
                    دیگر قادر به ادامه فعالیت نباشد، چنانچه بر اساس نظر کارشناس
                    شرکت بیمه، فرد از کارافتاده تشخیص داده شود می‌تواند از این
                    پوشش استفاده نماید.
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading -->
                <h2 id="h--5">نکات مهم در مورد بیمه عمر</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  جالب است که بدانید خودکشی در بیمه عمر پوشش دارد، بر اساس شرایط
                  بیمه عمر اگر فرد بیمه شده بعد از پایان سال دوم بیمه‌ای در اثر
                  خودکشی فوت نماید سرمایه فوت به همراه اندوخته بیمه نامه به
                  ذینفعان مشخص شده در بیمه نامه پرداخت می‌شود، اما اگر خودکشی در
                  دو سال اول بیمه نامه خودکشی نماید تنها اندوخته بیمه نامه به
                  ذینفعان وی پرداخت می‌شود.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  چنانچه فرد در طول قرارداد بیمه ای از کارافتاده شود، شرکت بیمه
                  تا پایان مدت قرارداد از پرداخت حق بیمه معاف شده و شرکت بیمه
                  تمامی حق بیمه را پرداخت می‌کند، و سایر پوشش‌های بیمه ای بیمه
                  نامه نیز برای فرد برقرار خواهد بود.
                </p>
                <!-- /wp:paragraph -->
              </div>
            </div>
          </div>
          <div
            id="profile-just"
            class="tab-pane fade ins-tabs"
            role="tabpanel"
            aria-labelledby="profile-tab-just"
          >
            <div class="scrollbar scrollbar-primary content-scrollbar">
              <section>
                <!-- Section description -->
                <p class="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">
                  اگر سوال خود را در بین سوالات زیر پیدا نکردید با پشتیبانی
                  علی‌بیمه تماس بگیرید.
                </p>

                <div class="col-md-12 col-lg-10 mx-auto mb-5 text-right">
                  <!--Accordion wrapper-->
                  <div
                    id="accordionEx"
                    class="accordion md-accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <!-- Accordion card -->
                    <div
                      class="
                        card
                        border-top
                        border-bottom-0
                        border-left
                        border-right
                        border-light
                      "
                    >
                      <!-- Card header -->
                      <div
                        id="headingOne1"
                        class="card-header border-bottom border-light"
                        role="tab"
                      >
                        <a
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          <h5 class="black-text font-weight-normal mb-0">
                            چرا باید بیمه شخص ثالث داشته باشیم؟
                            <i
                              class="fas fa-angle-down rotate-icon float-left"
                            ></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div
                        id="collapseOne1"
                        class="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne1"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                          تصور کنید شما در هنگام رانندگی با اتومبیل و یا موتور
                          سیکلت به شخص یا اشخاصی خسارت وارد کنید، و در آن حادثه
                          مقصر شناخته شوید، طبق قانون شما مسئول جبران این خسارت
                          به زیان‌دیدگان هستید. بنابراین نیاز به بیمه‌ای دارید
                          تا در هنگام بروز این حوادث در جبران خسارت پشتوانه شما
                          باشد. ممکن است این خسارت مالی و یا جانی باشد.بر اساس
                          قانون مالک خودرو یا کسی که خودرو در اختیار اوست باید
                          اقدام به تهیه بیمه شخص ثالث نماید. (در این صورت، این
                          شخص بیمه‌گذار نامیده می‌شود.)
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div
                      class="
                        card
                        border-bottom-0 border-left border-right border-light
                      "
                    >
                      <!-- Card header -->
                      <div
                        id="headingTwo2"
                        class="card-header border-bottom border-light"
                        role="tab"
                      >
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          <h5 class="black-text font-weight-normal mb-0">
                            آیا هنگام فروش وسیله نقلیه، امکان انتقال تخفیف‌های
                            بیمه‌نامه شخص ثالث به خودرو جدید وجود دارد؟
                            <i
                              class="fas fa-angle-down rotate-icon float-left"
                            ></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div
                        id="collapseTwo2"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo2"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                          بله؛ در صورتی که تقاضای بیمه‌گذار قبل از تاریخ انتقال
                          بیمه‌نامه باشد، امکان انتقال تخفیف‌ها به خودرو جدید با
                          همان تعداد سیلندر که متعلق به خودش و یا متعلق به همسر،
                          والدین و یا فرزندانش باشد، وجود دارد.
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div
                      class="
                        card
                        border-bottom-0 border-left border-right border-light
                      "
                    >
                      <!-- Card header -->
                      <div
                        id="headingThree3"
                        class="card-header border-bottom border-light"
                        role="tab"
                      >
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
                            <i
                              class="fas fa-angle-down rotate-icon float-left"
                            ></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div
                        id="collapseThree3"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree3"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                          در صورت دیرکرد تمدید بیمه شخص ثالث، علاوه بر عواقب
                          مالی، مشکلات دیگری نیز وجود خواهد داشت که موجب صرف
                          زمان زیادی می‌شود. از عواقب نداشتن بیمه شخص ثالث
                          می‌توان به موارد زیر اشاره کرد: جریمه توسط پلیس: در
                          صورت شناسایی خودروی فاقد بیمه شخص ثالث توسط پلیس
                          راهنمایی و رانندگی، خودرو متوقف شده و به پارکینگ منتقل
                          می‌شود. در این حالت شخص خاطی باید بیمه‌نامه شخص ثالث
                          دارای اعتبار تهیه کند و باید علاوه بر حق‌بیمه جدید،
                          حق‌بیمه روزهایی را هم که وسیله نقلیه او بیمه نداشته
                          (تا حداکثر یک سال) را بپردازد، و همچنین علاوه بر
                          پرداخت جریمه دیرکرد، هزینه پارکینگ را نیز بپردازد.
                          پرداخت خسارت مالی و جانی : در صورت نداشتن بیمه شخص
                          ثالث در حوادث، اگر مالک خودرو مقصر باشد، هیچ شرکت
                          بیمه‌ای خسارت را پرداخت نمی‌کند، باید کلیه هزینه‌ها را
                          شخصاً بپردازد. طبق قوانین جدید بیمه شخص ثالث، در
                          شرایطی که راننده مقصر بیمه شخص ثالث نداشته باشد و در
                          صورت بروز حوادث منجر به فوت یا خسارات بدنی دیگر، جبران
                          این گونه خسارت‌ها به عهده صندوق تامین خسارت‌های بدنی
                          است؛ و پرداخت دیه را برای راننده مقصر حادثه به صورت
                          قسطی خواهد بود. این قانون برای حمایت از اشخاص ثالث
                          زیان‌دیده است. خرید و فروش خودرو : امکان خرید و فروش
                          خودرویی که تحت پوشش بیمه شخص ثالث نیست وجود ندارد.
                        </div>
                      </div>
                    </div>
                    <!-- Accordion card -->

                    <!-- Accordion card -->
                    <div class="card border-left border-right border-light">
                      <!-- Card header -->
                      <div
                        id="headingThree4"
                        class="card-header border-bottom border-light"
                        role="tab"
                      >
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
                            <i
                              class="fas fa-angle-down rotate-icon float-left"
                            ></i>
                          </h5>
                        </a>
                      </div>

                      <!-- Card body -->
                      <div
                        id="collapseThree4"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree4"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                          بله؛ در قوانین جدید بیمه شخص ثالث دیه زن و مرد و
                          همچنین شخص مسلمان و غیر مسلمان (اهل کتاب) برابر است.
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
          <div
            id="contact-just"
            class="tab-pane fade ins-tabs"
            role="tabpanel"
            aria-labelledby="contact-tab-just"
          >
            <div class="">
              <div class="card-body text-center p-5">
                <!-- Section heading -->
                <h3 class="font-weight-bold my-4">گفتگو با کارشناسان علی‌بیمه</h3>
                <!-- Section description -->
                <p class="font-weight-light mx-auto mb-4 pb-2">
                  برای شروع گفتگو با کارشناسان علی‌بیمه فیلدهای زیر را به درستی پر
                  کنید
                </p>

                <form class="mb-4 mx-md-5" action="">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <!-- Name -->
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="نام کامل"
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <!-- Email -->
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="ایمیل"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <!-- Subject -->
                      <input
                        id="subject"
                        type="text"
                        class="form-control"
                        placeholder="موضوع گفتگو"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <textarea
                          id="message"
                          class="form-control rounded"
                          rows="3"
                          placeholder="توضیحات"
                        ></textarea>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-info btn-md">
                          Submit
                        </button>
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
import TabContent from '@/components/car-items/TabContent'
import FormWizard from '@/components/life-insurance/FormWizardLifeIns'
import ValidationHelper from '@/components/ValidationHelper'
export default {
  layout: 'landing-pages',
  directives: {
    currency: CurrencyDirective,
  },
  components: {
    FormWizard,
    TabContent,
  },
  mixins: [ValidationHelper],
  data() {
    return {
      formData: {
        birthYear: null,
        contractDuration: null,
        premiumInstallmentNum: null,
        premium: null,
        premiumIncreaseRate: null,
      },
      validationRules: [
        { birthYear: { required } },
        { contractDuration: { required } },
        { premiumInstallmentNum: { required } },
        { premium: { required } },
        { premiumIncreaseRate: { required } },
      ],

      // Main Data's
      birthYear: null,
      contractDuration: null,
      premiumInstallmentNum: null,
      premium: null,
      premiumIncreaseRate: null,
      deathBenefitRatio: null,
      annualDeathBenefitGrowth: null,

      suffix: ' تومان',
      prefix: null,
    }
  },
  computed: {
    ...mapGetters({
      BuildingYears: 'BuildingYear',
      ContractDuration: 'contractDuration',
      PremiumInstallment: 'premiumInstallment',
      PremiumIncreaseRateItem: 'premiumIncreaseRate',
    }),
  },
  methods: {
    selectBirthYear() {
      this.formData.birthYear = this.birthYear
      console.log(this.formData.birthYear) //eslint-disable-line
    },
    selectContractDuration() {
      this.formData.contractDuration = this.contractDuration
      console.log(this.formData.contractDuration) //eslint-disable-line
    },
    PremiumInstallmentNum() {
      this.formData.premiumInstallmentNum = this.premiumInstallmentNum
      console.log(this.formData.premiumInstallmentNum) //eslint-disable-line
    },
    selectPremium() {
      this.formData.premium = this.premium
      console.log(this.formData.premium) //eslint-disable-line
    },
    selectPremiumIncreaseRate() {
      this.formData.premiumIncreaseRate = this.premiumIncreaseRate
      console.log(this.formData.premiumIncreaseRate) //eslint-disable-line
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
  },
}
</script>
