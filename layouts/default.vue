<template>
  <div>
    <header>
      <nav
        class="
          navbar navbar-dark
          fixed-top
          navbar-expand-lg navbar-light
          no-shadow
          top-header
        "
      >
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
    </header>

    <header>
      <nav
        class="
          navbar navbar-dark
          fixed-top
          navbar-expand-lg navbar-light
          no-shadow
          scrolling-navbar
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
                    <a class="dropdown-item" href="/thirdparty"
                      >بیمه شخص ثالث</a
                    >
                    <a class="dropdown-item" href="/car-body"
                      >بیمه بدنه خودرو</a
                    >
                    <!-- <a class="dropdown-item" href="/healthy">بیمه عمر</a> -->
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <nuxt />
    <auth-modal ref="modal"></auth-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['check-auth', 'auth'],
  components: {
    AuthModal: () => import('@/components/AuthModal'),
    // AppNotification: () => import('@/components/AppNotification'),
  },
  fetchOnServer: false,
  fetch() {
    this.$store.dispatch('auth/getInfo').catch(() => {})
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
