<template>
  <div style="position:relative">
    <header class="header-2">
      <div class="page-header relative" style="background-image: url('/resource/img/bg2.jpg')">
        <span class="mask bg-gradient-primary opacity-85"></span>
        <div class="container">
          <div class="mt-8">
            <div class="col-lg-7 text-center mx-auto">
              <h1 class="text-white pt-3 mt-n5 typewriter">مقایسه و خرید آنلاین بیمه</h1>
            </div>
          </div>
          <div class="mt-4 ins_list_display">
            <div class="col-6 ins_list mb-3 mx-auto justify-content-center">
              <div class="cal-md-3 col-sm-4">
                <a href="/thirdparty" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/sales.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه شخص‌ثالث</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="/car-body" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/badane.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه بدنه</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/fire.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه آتش‌سوزی</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/life.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه عمر</h5>
                </a>
              </div>
            </div>
            <div class="col-6 ins_list mx-auto justify-content-center">
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/travel.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه مسافرتی</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/heart.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه حوادث‌انفرادی</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/motor.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">بیمه موتورسیکلت</h5>
                </a>
              </div>
              <div class="cal-md-3 col-sm-4">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="card card-body move-on-hover mx-md-2 px-2 text-center">
                  <img class="mt-3" src="/resource/img/logos/khesarat.svg" alt="" style="height: 60px" />
                  <h5 class="text-md mt-3">خسارت</h5>
                </a>
              </div>
            </div>
          </div>
          <p class="lead text-white mt-4 text-center">‌ <text-writer :data="textWirteText" /></p>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <div class="card card-body blur mt-n55">
        <div class="py-3">
          <div class="container">
            <div class="row">
              <div class="col-8 mx-auto text-center">
                <h4 class="font-weight-bolder">
                  مراحل سفارش بیمه نامه از علی‌بیمه
                </h4>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-3 col-md-4 col-6 mb-4 p-0">
                <h4
                  class="m-0 text-9xl position-absolute"
                  style="color: #08a3a7"
                >
                  1
                </h4>
                <div class="me-5 lh-1">
                  <h4 class="pt-3 m-0">ورود اطلاعات</h4>
                  <p>اطلاعات و مشخصات مورد نیاز را به دقت وارد کنید.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4 p-0">
                <h4
                  class="m-0 text-9xl position-absolute"
                  style="color: #08a3a7"
                >
                  2
                </h4>
                <div class="me-5 lh-1">
                  <h4 class="pt-3 m-0">استعلام قیمت</h4>
                  <p>
                    با امکان استعلام و مقایسه قیمت معتبرترین شرکت‌های بیمه،
                    بهترین بیمه را انتخاب کنید.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4 p-0">
                <h4
                  class="m-0 text-9xl position-absolute"
                  style="color: #08a3a7"
                >
                  3
                </h4>
                <div class="me-6 lh-1">
                  <h4 class="pt-3 m-0">بارگزاری مدارک</h4>
                  <p>
                    اطلاعات تکمیلی را وارد کرده و تصاویر مدارک مورد نیاز را
                    بارگذاری کنید.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4 p-0">
                <h4
                  class="m-0 text-9xl position-absolute"
                  style="color: #08a3a7"
                >
                  4
                </h4>
                <div class="me-6 lh-1">
                  <h4 class="pt-3 m-0">صدور و دریافت بیمه‌نامه</h4>
                  <p>
                    پس از بررسی مدارک توسط کارشناسان علی‌بیمه، بیمه‌نامه صادره
                    را در همان روز تحویل بگیرید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="container py-5">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 mt-5">
            <div class="text-center">
              <h3>پرداخت آنلاین خسارت</h3>
              <p class="lead mb-5 text-justify">
                همیشه گرفتن خسارت از شرکت های بیمه‌ای کار زمان بر و سختیه! برای حل این مشکل میتونید درخواستتون رو به علی بیمه بدین و با پشتیبانی ۲۴
                ساعته در کمترین زمان ممکن مبلغ خسارت رو به حسابتون میریزیم.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-6 d-flex mb-lg-3">
                <h4 class="m-0 text-5xl" style="color: #08a3a7">1-</h4>
                <div class="me-1 lh-1">
                  <h5 class="pt-2 m-0">ثبت درخواست و بارگزاری‌مدارک</h5>
                </div>
              </div>
              <div class="col-lg-6 col-6 d-flex mb-lg-3">
                <h4 class="m-0 text-5xl" style="color: #08a3a7">2-</h4>
                <div class="me-1 lh-1">
                  <h5 class="pt-2 m-0">ارزیابی میزان خسارت</h5>
                </div>
              </div>
              <div class="col-lg-8 col-8 mb-lg-3 d-flex text-center">
                <h4 class="m-0 text-5xl" style="color: #08a3a7">3-</h4>
                <div class="me-1 lh-1">
                  <h5 class="pt-2 m-0">دریافت خسارت و واریز به حسابتون!</h5>
                </div>
              </div>
              <div class="col-lg-12 col-12 mb-lg-3 text-center">
                <button class="btn btn-primary btn-icon" type="button">
                  <div class="d-flex align-items-center">ثبت درخواست</div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-5 me-auto">
            <div class="position-relative">
              <img class="w100" src="/resource/img/accident.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-body blur mt-6 pb-0">
        <div class="container">
          <img class="position-absolute top-0 end-0 img_bg" src="/resource/img/background-shape01.png" alt="" />
          <div class="row align-items-center justify-content-center mt-4">
            <div class="col-lg-5">
              <div class="position-relative">
                <img src="/resource/img/iphonesms.png" />
              </div>
            </div>
            <div class="col-lg-6 me-3">
              <div class="row align-items-center">
                <div class="mx-auto text-center">
                  <div class="mt-4 mb-md-1">
                    <h3>یادآوری مهلت تمدید بیمه‌نامه</h3>
                    <p>برای تمدید بیمه نامه جدید خود نگران نباشید علی‌بیمه بهتون یادآوری میکنه</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="mx-auto">
                  <div class="card card-plain">
                    <form id="contact-form" method="post" autocomplete="off">
                      <div class="card-body py-sm-0">
                        <div class="row">
                          <div class="col-md-6 ps-md-2">
                            <div class="input-group input-group-outline">
                              <label class="form-label">شماره موبایل</label>
                              <input type="text" class="form-control mb-sm-0 mb-2" />
                            </div>
                          </div>
                          <div class="col-md-6 ps-md-2">
                            <select id="choice-ins" class="form-control" name="choice-ins" placeholder="Language">
                              <option value="Choice 1" selected>بیمه بدنه</option>
                              <option value="Choice 2">شخص ثالث</option>
                              <option value="Choice 3">آتش سوزی</option>
                              <option value="Choice 4">بیمه عمر</option>
                            </select>
                          </div>
                          <div class="col-md-6 ps-md-2 mt-3">
                            <div class="input-group input-group-outline">
                              <label class="form-label">عنوان یادآوری</label>
                              <input type="text" class="form-control mb-sm-0 mb-2" />
                            </div>
                          </div>
                          <div class="col-md-6 ps-md-2 mt-3">
                            <date-picker placeholder="تاریخ اتمام بیمه‌نامه" mode="single" :styles="datepickercolors" :column="1" />
                          </div>
                          <div class="col-lg-12 col-12 mb-lg-3 text-center mt-4">
                            <button class="btn btn-primary btn-icon" type="button">
                              <div class="d-flex align-items-center">ثبت درخواست</div>
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
      <section class="pt-7 pb-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-3 col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-5xl">help_outline</i>
                <h5 class="mt-3">پشتیبانی ۲۴ساعته</h5>
                <p class="font-weight-normal">با استفاده از پشتیبانی تلفنی یا ارسال تیکت با تیم پشتیبانی ما در طول شبانه روز در ارتباط باشید.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-5xl">location_on</i>
                <h5 class="mt-3">ارسال رایگان</h5>
                <p class="font-weight-normal">از هرکجای ایران که بیمه نامه خریداری کنید برایتان ارسال میکنیم.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-5xl">attach_money</i>
                <h5 class="mt-3">کمترین قیمت</h5>
                <p class="font-weight-normal">مقایسه کمترین قیمت ممکن در بین تمامی شرکت های بیمه‌ای</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-5xl">av_timer</i>
                <h5 class="mt-3">صرفه‌جوی در زمان</h5>
                <p class="font-weight-normal">مهم نیست سرکار هستید یا تو خونه فقط کافیه وبسایت علی‌بیمه رو باز کنید و سفارش دهید.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TextWriter from '~/components/TextWriter.vue'

export default {
  head() {
    return {
      title: `خرید آنلاین بیمه، استعلام و مقایسه بیمه | علی بیمه`,
    }
  },
  components: {
    TextWriter,
  },
  layout: 'main',
  data() {
    return {
      textWirteText: [
        'برای شروع یکی از بیمه ها را انتخاب کنید',
        'میدونستی میتونی از علی‌بیمه ارزون‌ترین بیمه رو بخری؟',
        'در صورت خرید تا قبل از ساعت ۲۱ بیمه نامه شما در همان روز صادر می‌شود.',
      ],
      datepickercolors: {
        'primary-color': '#08bbbf',
        'secondary-color': '#08bbbf',
        'in-range-background': '#08bbbf',
        'icon-background': '#f4f5f5',
      },
      time1: null,
      example_: null,
    }
  },
  mounted() {
    if (document.getElementById('choice-ins')) {
      const element = document.getElementById('choice-ins')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
    if (document.getElementById('choice-remove-ins')) {
      const element = document.getElementById('choice-remove-ins')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
    // eslint-disable-next-line
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // eslint-disable-next-line
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      // eslint-disable-next-line
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  },
}
</script>
