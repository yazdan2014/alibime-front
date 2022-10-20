<template>
  <div>
    <div class="background-gradient">
      <div class="display-content">
        <div class="container">
          <!--Grid row-->
          <div class="row main-card">
            <!--Grid column-->
            <div class="col-lg-7 col-md-12 white-text text-md-right wow fadeInRight" data-wow-delay="0.3s">
              <h1 class="h1-responsive font-weight-bold">
                <p class="typewriter">علی‌بیمه <text-writer :data="textWirteText" /></p>
              </h1>
              <h4>سامانه استعلام و صدور بیمه نامه و دریافت خسارت آنلاین</h4>
              <div class="row justify-content-sm-start justify-content-center mt-5">
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="/thirdparty">
                      <div class="w-100 sales-icon">
                        <img src="/resource/img/icons/sales.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه شخص ثالث</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="/car-body">
                      <div class="w-100 car-icon">
                        <img src="/resource/img/icons/car.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه بدنه</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="life-insurance">
                      <div class="w-100 life-icon">
                        <img src="/resource/img/icons/life.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه عمر</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="travel-insurance">
                      <div class="w-100 traveles-icon">
                        <img src="/resource/img/icons/travels.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه مسافرتی</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="/fire-insurance">
                      <div class="w-100 fire-icon">
                        <img src="/resource/img/icons/fire.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه آتش سوزی</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="#">
                      <div class="w-100 engineer-icon">
                        <img src="/resource/img/icons/engineer.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه مسئولیت</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="#">
                      <div class="w-100 medical-icon">
                        <img src="/resource/img/icons/medical.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه درمانی</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-6 clear-css d-flex align-items-center justify-content-center mb-4">
                  <div class="card ins-card">
                    <a href="/motor-insurance">
                      <div class="w-100 moto-icon">
                        <img src="/resource/img/icons/motorcycle.svg" alt="" />
                        <div class="card-title">
                          <h2 class="color-palette-mid-blue">بیمه موتور سیکلت</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--Grid column-->
            <!--Grid column-->
            <div class="col-md-5 wow fadeInRight text-start d-md-absolute p-0 umbrella" data-wow-delay="0.3s">
              <img src="/resource/img/umbrella.svg" alt="" class="mt-5" />
            </div>

            <!--Grid column-->
          </div>
          <div class="desc_ins text-white">
            <h6>در صورت خرید تا ساعت 21 در روزهای عادی و تا ساعت 19 در روزهای پنج‌شنبه و تعطیل، بیمه‌نامه شما همان روز صادر می‌شود.</h6>
          </div>
          <!--Grid row-->
        </div>
      </div>
      <!-- Footer -->
      <footer class="container page-footer fixed-bottom font-small lighten-3 py-4 light-text main-footer">
        <!-- Footer Elements -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <p class="footer-copyright bg-transparent text-end mb-0">تمام حقوق متعلق به شرکت همراه فردا سینا میباشد.(نسخه 1.0.0)</p>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled d-flex mb-0 footer-menu">
                <li>
                  <a href="contact-us" class="mx-2" role="button">تماس با ما</a>
                </li>
                <li>
                  <a href="about-us" class="mx-2" role="button">درباره ما</a>
                </li>
                <li>
                  <!-- <a href="/download" class="mx-2" role="button">دانلود اپلیکیشن</a> -->
                </li>
                <li>
                  <a href="/privacy-policy" class="mx-2" role="button">شرایط و قوانین</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Elements -->
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
import TextWriter from '~/components/TextWriter.vue'
export default {
  components: {
    TextWriter,
  },
  data() {
    return {
      textWirteText: ['هزینه کمتر و سریعتر!', 'پرداخت در محل ', 'تجربه حس امنیت '],
    }
  },
}
</script>
<style scoped>
@media (max-width: 992px) {
  .umbrella,
  .typewriter {
    display: none;
  }
}

.wow img {
  width: 420px;
  height: auto;
}
.fadeInRight h4 {
  font-weight: 300;
  color: white;
}
.footer-menu {
  float: left;
}
.footer-menu a {
  color: white !important;
}
.footer-menu a:hover {
  color: #08bcc0 !important;
}
</style>
