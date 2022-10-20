<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg no-shadow top-header">
      <div class="container-fluid container-lg p-0">
        <!-- Links -->
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <!-- Right -->
          <ul class="navbar-nav m-0 p-0 m_r_menu">
            <li class="nav-item">
              <a class="nav-link pr-0" href="" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" target="_blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>

          <!-- Left -->

          <div class="left-item mr-auto d-flex">
            <a class="nav-link text-white pl-0" href="" target="_blank"
              >سامانه بازاریابشو</a
            >
            <a class="nav-link text-white pl-0" href="" target="_blank"
              >باشگاه مشتریان</a
            >
          </div>
        </div>
      </div>
    </nav>

    <header
      class="
        navbar navbar-dark
        fixed-top
        navbar-expand-lg
        scrolling-navbar
        nav_bg
      "
    >
      <div class="container-fluid container-lg">
        <div class="d-none align-items-center header-main">
          <!-- Brand -->
          <a class="navbar-brand waves-effect mr-0" href="/">
            <img src="/resource/img/main/logo.png" alt="Logo" />
          </a>

          <!-- Collapse -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Links -->
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <!-- Right -->
            <ul class="navbar-nav ml-auto m_r_menu">
              <li class="nav-item">
                <a class="nav-link waves-effect text-white ml-3" href="/"
                  >خانه</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  id="navbarDropdownMenuLink"
                  class="nav-link dropdown-toggle text-white ml-3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ><span class="d-none d-xl-inline-block ml-1"
                    >انواع بیمه ها</span
                  ></a
                >
                <div
                  class="
                    dropdown-menu dropdown-dark dropdown-menu-right
                    text-right
                  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/thirdparty">بیمه شخص ثالث</a>
                  <a class="dropdown-item" href="/car-body">بیمه بدنه خودرو</a>
                  <a class="dropdown-item" href="#">بیمه عمر</a>
                  <a class="dropdown-item" href="#">بیمه مسافرتی</a>
                  <a class="dropdown-item" href="#">بیمه آتش سوزی</a>
                  <a class="dropdown-item" href="#">بیمه مسئولیت</a>
                  <a class="dropdown-item" href="#">بیمه درمانی</a>
                  <a class="dropdown-item" href="#">بیمه موتور سیکلت</a>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link waves-effect text-white ml-3"
                  href="/organization-ins"
                  target="_blank"
                  >بیمه سازمانی</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link waves-effect text-white ml-3"
                  href="/compensation"
                  target="_blank"
                  >پرداخت آنلاین خسارت</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link waves-effect text-white ml-3"
                  href="#"
                  target="_blank"
                  >بلاگ</a
                >
              </li>
            </ul>

            <!-- Left -->
            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a class="rounded text-white waves-effect mr-2 tel-header">
                  <i class="fas fa-phone-alt"></i> 021-91319030
                </a>
              </li>
              <li class="nav-item">
                <template>
                  <b-dropdown v-if="isAuthenticated" right text="پنل کاربری">
                    <b-dropdown-item @click.stop="ongoInfo"
                      >اطلاعات من</b-dropdown-item
                    >
                    <b-dropdown-item @click.stop="ongoOrders"
                      >بیمه های من</b-dropdown-item
                    >
                    <b-dropdown-item @click.stop="ongoTransactions"
                      >تراکنش ها</b-dropdown-item
                    >
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="onLogout">خروج</b-dropdown-item>
                  </b-dropdown>
                  <b-button
                    v-else
                    class="nav-link login-btn rounded waves-effect mr-2"
                    @click.stop="OnRunAuthModal"
                  >
                    <!-- <span>پنل من ({{ mobilePhoneWithoutzero }})</span> -->
                    <span>ورود/ثبت نام</span>
                  </b-button>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
    <auth-modal ref="modal"></auth-modal>

    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="footer-col last text-center">
              <h4>راه های ارتباطی</h4>
              <ul class="list-unstyled li-space-lg p-small">
                <li class="media">
                  <div class="media-body">
                    تهران فلکه دوم صادقیه برج گلدیس طبقه هفتم واحد 111
                  </div>
                </li>
                <li class="media">
                  <div class="media-body font-30">
                    <!-- <i class="fas fa-phone"></i> -->
                    <a>021-91319030</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of footer -->
    <!-- end of footer -->

    <!-- Copyright -->
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="p-small">
              تمام حقوق مادی و معنوی وبسایت علی‌بیمه متعلق به شرکت همراه فردا سینا
              میباشد.(نسخه 1.0.0)
              <a href="https://dejamdev.ir">DejamDev</a>
            </p>
          </div>
          <!-- end of col -->
        </div>
        <!-- enf of row -->
      </div>
      <!-- end of container -->
    </div>
    <app-notification />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    AuthModal: () => import('@/components/AuthModal'),
    AppNotification: () => import('@/components/AppNotification'),
  },
  middleware: ['check-auth', 'auth'],

  fetchOnServer: false,
  fetch() {
    this.$store.dispatch('auth/getInfo').catch(() => {})
  },
  head: {
    bodyAttrs: {
      class: 'main___p',
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
    }),
    last4NumberMobilePhone() {
      const phone =
        this.info && this.info.mobilePhone ? this.info.mobilePhone : ''
      return String(phone).substring(phone.length - 4)
    },
    mobilePhoneWithoutzero() {
      const phone =
        this.info && this.info.mobilePhone ? this.info.mobilePhone : ''
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
      if (this.isAuthenticated)
        this.$router.push('/accounts/profile/transactions')
      else this.$refs.modal.showModal()
    },
    OnRunAuthModal() {
      if (this.isAuthenticated) this.$router.push('/user-panel')
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
<style scoped>
html,
body {
  height: auto !important;
}
.nav_bg {
  background: linear-gradient(225deg, #2162a7, #213964) !important;
}
.top-header {
  position: relative;
}
.sticky {
  padding-top: 12px !important;
  transition: all 0.5s;
}
.cls-1,
.cls-2 {
  fill: #215fa2;
}
</style>
