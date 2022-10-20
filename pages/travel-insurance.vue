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
      <tab-content title="کشور یا کشورهای مقصد"> </tab-content>
      <tab-content title="نوع سفر را مشخص کنید"> </tab-content>
      <tab-content title="تعداد افراد"> </tab-content>
      <tab-content title="مدت سفر"> </tab-content>
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
                <h2 id="h-"><strong>بیمه مسافرتی</strong><strong></strong></h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  مسافرت خارج از کشور می تواند با ریسک هایی مثل بیماری های ناشی
                  از سفر، مسمومیت یا حوادث مربوط به سفر نظیر گم شدن یا تاخیر در
                  رسیدن چمدان و بار مسافر، بروز مشکلات حقوقی و ... همراه باشد.
                  به دلیل اختلاف قیمت ارز هزینه درمان در کشور های دیگر بسیار
                  بالاتر می باشد از این رو بیمه مسافرتی امری ضروری برای مسافرین
                  خارج از کشور می باشد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--1">
                  <strong>شرکت‌های کمک‌رسان بیمه مسافرتی</strong
                  ><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  شرکت‌های بیمه ایرانی در خارج از کشور، شعبه ندارند و امکان
                  ارائه خدمات بیمه‌ای این شرکتها وجود ندارد. شرکت‌های بیمه‌گر در
                  راستای رفع چنین مشکلی با شرکت‌های کمک رسان قرارداد بسته‌اند و
                  خدمات بیمه مسافرتی را به بیمه‌گزاران ارائه می‌کنند.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  برخی از شرکت های کمک رسان ارائه دهنده این خدمات عبارت اند از:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>Reise schutz</li>
                  <li>MidEast</li>
                  <li>&nbsp;Afro Asia</li>
                  <li>Allianz</li>
                  <li>SOS</li>
                  <li>EVASAN</li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--2">
                  <strong>پرداخت خسارت</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  بیمه گزاران در هنگام بروز خسارت ها باید با شماره تلفن مندرج در
                  بیمه‌نامه مسافرتی خود تماس گرفته و مشخصات خود: نام ، شماره
                  بیمه‌نامه و مدت اعتبار آن ، نحوه بروز حادثه و خسارت ها را
                  اعلام نماید تا شرکت کمک رسان بتواند خسارت های وارده را پوشش
                  دهد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  از آن جا که شیوه ارائه خدمات بیمه ای شرکت‌های کمک رسان متفاوت
                  بوده و برخی از آن ها تماس‌های تلفنی را پاسخگو نیستند، لذا بیمه
                  گزار باید در چنین شرایطی خسارت خود را پیگیری و هزینه مربوطه را
                  پرداخت نماید و با ارائه صورت حساب ها و فاکتورهای ممهور، هزینه
                  خسارت های تحت پوشش بیمه مسافرتی را از کشور محل اقامت خود
                  دریافت نماید.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading -->
                <h2 id="h--3">
                  <strong>پوشش‌های بیمه مسافرتی</strong><strong></strong>
                </h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  پوشش‌های بیمه مسافرتی در واقع خساراتی که ممکن است در طول سفر
                  برای شما بیافتد و شرکت بیمه هزینه های خسارتی شما را پرداخت می
                  کند. این پوشش‌ها با توجه به نوع حادثه، شرکت بیمه خدمات بیمه‌ای
                  متفاوتی را ارائه می‌کند.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>
                    <strong>بازگرداندن جسد بیمه‌گزار متوفی به ایران</strong
                    ><strong><br /></strong>اگر بیمه‌گزار در طول سفر خارجی خود
                    فوت کند، شرکت کمک رسان هماهنگی ها و اقدامات لازم را جهت
                    بازگرداندن جسد او به کشور محل اقامت به همراه تقبل کلیه هزینه
                    ها انجام می دهد.
                  </li>
                  <li>
                    <strong>بازگشت اعضای درجه یک بیمه‌گزار</strong
                    ><strong><br /></strong>در صورت فوت بیمه‌گزار یا بستری شدن
                    او به مدت بیش از 10 روز در بیمارستان ، اگر فرد همراه بیمه
                    گزار قادر به بازگشت با وسیله نقلیه خود نباشد، شرکت کمک رسان
                    هزینه بازگشت یکی از همراهان درجه یک بیمه‌گزار را پرداخت می
                    کند.
                  </li>
                  <li>
                    <strong
                      >هزینه های درمان و بستری شدن بیمه‌گزار هنگام بروز
                      حادثه</strong
                    ><strong><br /></strong>شرکت کمک رسان هزینه درمان، بستری
                    شدن، جراحی و معاینات پزشکی را تا سقف تعهدات مندرج در
                    بیمه‌نامه مسافرتی خارج از کشور پرداخت میکند. جراحات و صدمات
                    حاد یا بستری شدن بیش از 24 ساعت فاقد فرانشیز هستند ولی در
                    موارد عادی تر ، پوشش های بستری شدن و درمان مشمول فرانشیز 25
                    یورویی است.
                  </li>
                  <li>
                    <strong
                      >انتقال اضطراری یکی از اعضای درجه یک خانواده بیمه
                      گزار</strong
                    ><strong><br /></strong>در صورت مبتلا شدن بیمه‌گزار به
                    بیماری ای که نیازمند بستری شدن بیش از 10 روز در بیمارستان
                    است، شرکت کمک رسان هزینه رفت و آمد و اقامت یکی از اعضای درجه
                    یک خانواده بیمه‌گزار را با محل بستری شدن او تقبل می کند.
                  </li>
                  <li>
                    <strong>هزینه‌های دندانپزشکی</strong
                    ><strong><br /></strong>شرکت کمک رسان فقط هزینه معالجه حضوری
                    درمان های عفونت شدید دندان و لثه، دندان درد، کشیدن دندان را
                    پرداخت می کند.
                  </li>
                  <li>
                    <strong>هزینه‌های دارو </strong><strong><br /></strong>در
                    صورت گم شدن داروهای ضروری همراه مسافر، شرکت بیمه گر هزینه
                    ارسال مجدد داروهای موردنیاز بیمه‌گزار را تقبل می‌کند.
                  </li>
                  <li>
                    <strong
                      >انتقال یا بازگرداندن بیمه‌گزار به کشورش در صورت بروز
                      حادثه</strong
                    ><strong><br /></strong>اگر در طول سفر حادثه ای برای
                    بیمه‌گزار رخ دهد، شرکت کمک رسان اقدامات لازم را برای انتقال
                    او به بیمارستان یا مرکز درمانی یا بازگرداندن او به کشورش
                    انجام می‌دهد یا امکان مداوای او را در مقصد بررسی و تصمیم
                    گیری می کند.
                  </li>
                  <li>
                    <strong
                      >هزینه بازگشت بیمه‌گزار به کشورش به علت فوت اقوام</strong
                    ><strong><br /></strong>در صورت فوت اقوام درجه یک یا دوی
                    بیمه گزار حین سفر به نحوی که بیمه‌گزار قادر نباشد که با
                    وسیله نقلیه خود یا وسیله نقلیه رزرو شده، به کشور مبدا
                    برگردد، شرکت بیمه هزینه بازگشت او را پرداخت می کند.
                  </li>
                  <li>
                    <strong>پیگیری و پرداخت هزینه مسائل حقوقی</strong
                    ><strong><br /></strong>اگر مسائل حقوقی برای بیمه‌گزار پدید
                    آید، شرکت های کمک‌رسان اقدامات حمایتی انجام می‌دهند.
                  </li>
                  <li>
                    <strong>مفقود شدن یا به سرقت رفتن مدارک شناسایی</strong
                    ><strong><br /></strong>در صورتی که مدارک شناسایی بیمه گزار
                    شامل گذرنامه ، شناسنامه و گواهی نامه مفقود شده یا دزدیده
                    شود، شرکت های کمک رسان هزینه مربوط به صدور مدارک المثنی را
                    تا سقف معین پرداخت می کنند.
                  </li>
                  <li>
                    <strong>هزینه های مربوط به بار، مدارک سفر و تاخیر</strong
                    ><strong><br /></strong>شرکت های بیمه‌گر هزینه سرقت یا
                    مفقودی بار، مدارک شخص و همچنین تاخیر در حرکت وسیله نقلیه
                    مربوط به سفر را پرداخت می کنند.
                  </li>
                  <li>
                    <strong>حواله وجه نقد</strong><strong><br /></strong>اگر
                    بیمه‌گزار پیش از سفر در کشور محل اقامت، مبلغ مورد نیاز را در
                    قالب چک ، حواله یا وجه نقد نزد دفتر رسمی به بیمه‌گر بسپارد،
                    می تواند با ارائه مدارک و ادله تایید کننده این موضوع تا سقف
                    مشخصی از شرکت کمک‌رسان در صورت مفقودی یا سرقت وجه نقد خود
                    خسارت دریافت کند.
                  </li>
                  <li>
                    <strong
                      >بازگرداندن کودکان به ایران در صورت فوت یا بستری شدن
                      سرپرست</strong
                    ><strong><br /></strong>اگر مسافر بیمه‌گزار به علت فوت یا
                    بیماری قادر به مراقبت و سرپرستی از فرزند خود در طول مدت زمان
                    سفر نباشد، شرکت بیمه هزینه بازگشت فرزند تحت نظارت یک فرد
                    بزرگسال را به کشور محل اقامت پرداخت می‌کند.
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--4">
                  <strong>استثنائات بیمه مسافرتی</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  بیمه نامه مسافرتی نیز همانند سایر انواع بیمه نامه ها دارای
                  استثنائاتی می‌باشد که اگر چنین خساراتی اتفاق بیافتد تحت پوشش
                  نمی باشد:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>
                    خسارات برآمده از حملات تروریستی، جنگ، آشوب و مشارکت
                    بیمه‌گزار در اقدامات جنایی یا اقدامات نیروهای مسلح هنگام صلح
                  </li>
                  <li>
                    خسارات ناشی از بیمه‌گزار تحت درمان بیماری روانی یا دارای
                    اختلال مشاعر یا درمان این نوع بیماری‎‌ها
                  </li>
                  <li>صدمات ناشی از بلایای طبیعی مثل سیل، زلزله و ...</li>
                  <li>خسارت های ناشی از تشعشعات مواد هسته ای و رادیواکتیو</li>
                  <li>صدمات ناشی از ریسک‌های شغلی</li>
                  <li>
                    خسارات ناشی از مشارکت بیمه‌گزار در شرط بندی یا دعوا ( تنها
                    استثنای این حالت، هنگام دفاع بیمه‌گزار از خود است.)
                  </li>
                  <li>
                    خسارات ناشی از بی توجهی یا بی احتیاطی جدی بیمه‌گزار یا اعمال
                    متقلبانه او
                  </li>
                  <li>صدمات یا مرگ ناشی از خودکشی</li>
                  <li>
                    هزینه های درمانی بیماری‌هایی که بیمه‌گزار قبل از سفر یا قبل
                    از اعتبار بیمه‌نامه دچار آن بوده است.
                  </li>
                  <li>
                    صدمات ناشی از شرکت کردن یا تمرین بیمه‌گزار در رقابت ها و
                    مسابقات ورزشی زیر نظر هر فدراسیون یا سازمان مشابه
                  </li>
                  <li>خسارات برای افراد مقیم دائم و دانشجویان خارج از کشور</li>
                  <li>
                    صدمات ناشی از مصرف الکل، مواد مخدر و داروهایی که بدون نسخه
                    پزشک تجویز شده باشد یا بیمه‌گزار قبل از سفر مصرف کرده باشد.
                  </li>
                  <li>
                    خسارات ناشی از حضور بیمه‌گزار در ورزش‌ها و اقداماتی که عرفا
                    خطرناک تلقی می‌شوند همانند موتورسواری، مشت زنی.
                  </li>
                  <li>
                    استفاده از شیوه‌ها و وسایل غیرمعمول حمل و نقل برای سفر
                  </li>
                  <li>هزینه اقدامات پیشگیرانه نظیر واکسیناسیون</li>
                  <li>مشکلات ناشی از اپیدمی بیماری‌ها در سراسر جهان</li>
                  <li>اقدامات توانبخشی و وسایل مربوطه نظیر عصا و عینک</li>
                  <li>
                    هزینه زایمان در خلال سه ماه مانده به موعد زایمان و سقط جنین
                    اختیاری
                  </li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading -->
                <h2 id="h--5">
                  <strong>عوامل موثر بر قیمت بیمه مسافرتی</strong
                  ><strong></strong>
                </h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  هر کدام از شرکت های بیمه برای بیمه نامه های مسافرتی که ارائه
                  می کنند شرایط متفاوتی را دارند.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--6">
                  <strong>مدت زمان سفر</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  هر مسافری بر اساس مدت زمانی که قصد سفر دارد می تواند بیمه نامه
                  مسافرتی را تهیه نماید، البته اعتبار بیمه نامه مسافرتی از زمان
                  خروج از مرز و مهر دار شدن گذرنامه شروع می شود.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>
                  مدت زمانی که شرکت های بیمه می توانند بیمه مسافرتی خریداری
                  نمایند به ترتیب زیر می باشد:
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>یک الی هفت روز</li>
                  <li>هشت الی پانزده روز</li>
                  <li>شانزده الی بیست و سه روز</li>
                  <li>بیست وچهار الی سی و یک روز</li>
                  <li>سی و دو الی چهل و پنج روز</li>
                  <li>چهل و شش الی شصت و دو روز</li>
                  <li>شصت و سه الی نود و دو روز</li>
                  <li>شش ماهه</li>
                  <li>یک ساله</li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--7">
                  <strong>سن بیمه گذار</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  در همه شرکت های بیمه برای بیمه نامه های مسافرتی دسته بندی سنی
                  انجام می دهند و هر سنی در یک طبقه قرار می گیرد که در محاسبه
                  نرخ بیمه مسافرتی تاثیر گذار می باشد.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>یک تا 12 سال</li>
                  <li>13 تا 65 سال</li>
                  <li>66 تا 70 سال</li>
                  <li>71 تا 75 سال</li>
                  <li>76 تا 80 سال</li>
                  <li>81 تا 85 سال</li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--8">
                  <strong>مناطق تحت پوشش بیمه</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  با بیمه نامه مسافرتی شرکت های بیمه، همه کشورهای سراسر جهان را
                  البته با دسته بندی های مختلف تحت پوشش قرار می دهند.
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul>
                  <li>کشورهای حوزه شنگن</li>
                  <li>کشورهای منطقه سه (حوزه خاورمیانه ، آفریقا و ترکیه)</li>
                  <li>
                    کشورهای منطقه چهار (حوزه خلیج فارس به اضافه کشورهای عربستان
                    و سوریه و عراق)
                  </li>
                  <li>
                    کشورهای منطقه دو (کشورهای جهان به جز آمریکا، کانادا،
                    استرالیا و ژاپن)
                  </li>
                  <li>کشورهای منطقه دوازده (چین، تایلند ، مالزی و هند)</li>
                  <li>
                    کشورهای منطقه یازده( ارمنستان ،گرجستان ، قبرس شمالی و دوبی)
                  </li>
                  <li>کل کشورهای جهان</li>
                </ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--9">
                  <strong>پوشش مالی بیمه مسافرتی</strong><strong></strong>
                </h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  .بعضی از شرکت های بیمه‌گر برای بعضی از کشورها، امکان انتخاب
                  پوشش مالی ارائه می دهند که این مساله نیز بر نرخ بیمه مسافرتی
                  تاثیرگذار است .
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3 id="h--10"><strong>سقف تعهدات</strong><strong></strong></h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>
                  سقف تعهدات حداکثر میزان تعهد و مسئولیت شرکت بیمه‌گر در جبران
                  خسارات حوادث وارده بر بیمه‌گزار می باشد.
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
// import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { CurrencyDirective } from 'vue-currency-input'
import TabContent from '@/components/car-items/TabContent'
import FormWizard from '@/components/travel-insurance/FormWizardTravelIns'
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
      formData: {},
      validationRules: [{ selectHomeType: { required } }],

      // Main Data's
      u12_persons: null,
      u65_persons: null,
      u70_persons: null,
      u75_persons: null,
      u80_persons: null,
      u85_persons: null,
      u100_persons: null,
      others_persons: null,
      country: null,
      duration: null,
      travel_type: null,
    }
  },
}
</script>
