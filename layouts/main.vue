<template>
  <div>
    <body class="index-page bg-gray-200">
      <div class="container-fluid position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-xl top-0 z-index-fixed bg-white shadow position-absolute start-0 end-0">
              <div class="container px-0">
                <a class="navbar-brand font-weight-bolder ms-sm-3" href="/" rel="tooltip" title="رفتن به صفحه اصلی علی‌بیمه" data-placement="bottom">
                  <img src="~/static/resource/img/logos/logo.svg" alt="" style="height: 42px" />
                </a>
                <button
                  class="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div id="navigation" class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100">
                  <ul class="navbar-nav navbar-nav-hover ms-auto">
                    <li class="nav-item dropdown dropdown-hover">
                      <a
                        id="dropdownMenuPages"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <!-- <i class="material-icons opacity-6 me-2 text-md">dashboard</i> -->
                        بیمه‌های وسایل نقیه
                        <img src="~/static/resource/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto mx-md-2" />
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-md mt-0 mt-lg-3"
                        aria-labelledby="dropdownMenuPages"
                      >
                        <div class="d-none d-lg-block text-md">
                          <a href="/thirdparty" class="dropdown-item border-radius-md">
                            <span>بیمه شخص ثالث</span>
                          </a>
                          <a href="/car-body" data-bs-toggle="modal" data-bs-target="#exampleModal" class="dropdown-item border-radius-md">
                            <span>بیمه بدنه خودرو</span>
                          </a>
                          <a href="./pages/author.html" data-bs-toggle="modal" data-bs-target="#exampleModal" class="dropdown-item border-radius-md">
                            <span>بیمه موتورسیکلت</span>
                          </a>
                        </div>

                        <div class="d-lg-none text-md">
                          <a
                            href="./pages/about-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه شخص ثالث</span>
                          </a>
                          <a
                            href="./pages/contact-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه بدنه خودرو</span>
                          </a>
                          <a href="./pages/author.html" data-bs-toggle="modal" data-bs-target="#exampleModal" class="dropdown-item border-radius-md">
                            <span>بیمه موتورسیکلت</span>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li class="nav-item dropdown dropdown-hover">
                      <a
                        id="dropdownMenuBlocks"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <!-- <i class="material-icons opacity-6 me-2 text-md">view_day</i> -->
                        بیمه اشخاص
                        <img src="~/static/resource/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto mx-md-2" />
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                        aria-labelledby="dropdownMenuBlocks"
                      >
                        <div class="d-none d-lg-block text-md">
                          <a
                            href="./pages/about-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه تکمیلی</span>
                          </a>
                          <a
                            href="./pages/contact-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه مسافرتی</span>
                          </a>
                          <a href="./pages/author.html" data-bs-toggle="modal" data-bs-target="#exampleModal" class="dropdown-item border-radius-md">
                            <span>بیمه عمر</span>
                          </a>
                        </div>

                        <div class="d-lg-none text-md">
                          <a
                            href="./pages/about-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه تکمیلی</span>
                          </a>
                          <a
                            href="./pages/contact-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه مسافرتی</span>
                          </a>
                          <a href="./pages/author.html" data-bs-toggle="modal" data-bs-target="#exampleModal" class="dropdown-item border-radius-md">
                            <span>بیمه عمر</span>
                          </a>
                        </div>
                      </ul>
                    </li>

                    <li class="nav-item dropdown dropdown-hover">
                      <a
                        id="dropdownMenuDocs"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <!-- <i class="material-icons opacity-6 me-2 text-md">article</i> -->
                        بیمه اموال
                        <img src="~/static/resource/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto mx-md-2" />
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                        aria-labelledby="dropdownMenuDocs"
                      >
                        <div class="d-none d-lg-block text-md">
                          <a
                            href="./pages/about-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه آتش‌سوزی</span>
                          </a>
                        </div>

                        <div class="d-lg-none text-md">
                          <a
                            href="./pages/about-us.html"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            class="dropdown-item border-radius-md"
                          >
                            <span>بیمه آتش‌سوزی</span>
                          </a>
                        </div>
                      </ul>
                    </li>
                    <li class="nav-item mx-2">
                      <a
                        id="dropdownMenuDocs"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <!-- <i class="material-icons opacity-6 me-2 text-md">article</i> -->
                        بیمه سازمانی
                        <!-- <img src="~/static/resource/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto mx-md-2"> -->
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav navbar-nav-hover me-auto">
                    <li class="nav-item ms-lg-auto">
                      <a class="nav-link nav-link-icon me-2" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                        <i class="fa fa-phone me-1"></i>
                        <p
                          class="d-inline text-lg z-index-1 font-weight-bold"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="ارتباط تلفنی با علی‌بیمه"
                        >
                          021-91319030
                        </p>
                      </a>
                    </li>
                    <li class="nav-item my-auto ms-3 ms-lg-0 me-2">
                      <i class="fa fa-user me-1"></i>
                      <a v-if="!isAuthenticated" class="mb-0 me-1 mt-2 mt-md-0 text-lg font-weight-bold" @click.stop="OnRunAuthModal"
                        >ورود یا ثبت نام</a
                      >
                      <a v-if="isAuthenticated" class="mb-0 me-1 mt-2 mt-md-0 text-lg font-weight-bold" @click.stop="OnRunAuthModal">پنل کاربری</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <!-- End Navbar -->
          </div>
        </div>
      </div>
      <nuxt />
      <auth-modal ref="modal"></auth-modal>
      <comming-soon ref="exampleModal"></comming-soon>
      <footer class="footer bg-white pt-6">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 mb-5 mb-lg-0">
              <img src="~/static/resource/img/logos/logo-type.svg" alt="" style="height: 30px" />
              <p class="mb-1 mt-2 pb-2">پلتفرم علی‌بیمه ساخته شده تا شمارا از هرگونه درخواست بیمه‌ای بی‌نیاز کنه!</p>
              <p>تلفن پشتیبانی: 021-91319030</p>
              <p>دفتر مرکزی: البرز، میدان توحید، ساختمان فلاح</p>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" class="text-secondary me-xl-4 me-3">
                <span class="text-lg fab fa-facebook"></span>
              </a>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" class="text-secondary me-xl-4 me-3">
                <span class="text-lg fab fa-twitter"></span>
              </a>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" class="text-secondary me-xl-4 me-3">
                <span class="text-lg fab fa-instagram"></span>
              </a>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" class="text-secondary me-xl-4 me-3">
                <span class="text-lg fab fa-pinterest"></span>
              </a>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" class="text-secondary me-xl-4 me-3">
                <span class="text-lg fab fa-github"></span>
              </a>
            </div>

            <div class="col-md-2 col-6 mb-md-0 mb-4">
              <h6 class="text-lg">بیمه‌های اصلی</h6>
              <ul class="flex-column pe-0 nav">
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    شخص ثالث
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    بدنه خودرو
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    آتش‌سوزی
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    درمانی تکمیلی
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    بیمه سازمانی
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank">
                    بیمه عمر
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-6 mb-md-0 mb-4">
              <h6 class="text-lg">علی‌بیمه</h6>
              <ul class="flex-column pe-0 nav">
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="/about-us" target="_blank"> درباره ما </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-secondary" href="/contact-us" target="_blank"> تماس با ما </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-secondary" href="/why-alibime" target="_blank"> چرا علی‌بیمه </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="/careers" target="_blank"> فرصت‌های شغلی </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="/privacy-policy" target="_blank"> شرایط و قوانین </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2 col-6 mb-md-0 mb-4">
              <!-- <img
                src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47"
                alt=""
              /> -->
              <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=249351&amp;Code=hTovMa30Qu4bqQUFcEnO"
                ><img
                  referrerpolicy="origin"
                  src="https://Trustseal.eNamad.ir/logo.aspx?id=249351&amp;Code=hTovMa30Qu4bqQUFcEnO"
                  alt=""
                  style="cursor: pointer"
                  id="hTovMa30Qu4bqQUFcEnO"
              /></a>
            </div>
          </div>
          <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          <div class="row">
            <div class="col-8 mx-lg-auto text-lg-center">
              <p class="text-sm text-secondary">
                تمام حقوق مادی و معنوی برند، وبسایت و اپلیکیشن علی‌بیمه متعلق به شرکت همراه فردا سینا می‌باشد. (نسخه 1.0)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    AuthModal: () => import('@/components/AuthModal'),
    CommingSoon: () => import('@/components/CommingSoon'),
    // AppNotification: () => import('@/components/AppNotification'),
  },
  middleware: ['check-auth', 'auth'],
  fetchOnServer: false,
  fetch() {
    this.$store.dispatch('auth/getInfo').catch(() => {})
  },
  mounted() {
    // eslint-disable-next-line
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // eslint-disable-next-line
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      // eslint-disable-next-line
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
    }),
    last4NumberMobilePhone() {
      const phone = this.info && this.info.mobilePhone ? this.info.mobilePhone : ''
      return String(phone).substring(phone.length - 4)
    },
    mobilePhoneWithoutzero() {
      const phone = this.info && this.info.mobilePhone ? this.info.mobilePhone : ''
      return String(phone).substring(phone.length - 10)
    },
    getVersion() {
      return String(process.env.APP_VERSION)
    },
  },
  methods: {
    ongoInfo() {
      if (this.isAuthenticated) this.$router.push('/accounts/profile/info')
      else this.$refs.modal.showModal()
    },
    ongoOrders() {
      if (this.isAuthenticated) this.$router.push('/accounts/profile/orders')
      else this.$refs.modal.showModal()
    },
    ongoTransactions() {
      if (this.isAuthenticated) this.$router.push('/accounts/profile/transactions')
      else this.$refs.modal.showModal()
    },
    OnRunAuthModal() {
      if (this.isAuthenticated) this.$router.push('/accounts/profile/info')
      else this.$refs.modal.showModal()
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
    onLogout() {
      this.logout()
      this.$router.push('/')
    },
  },
}
</script>
