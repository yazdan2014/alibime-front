<template>
  <div>
    <div v-if="isAuthenticated">
      <div class="alibime__panel my-7">
        <div class="container">
          <div class="user__panel">
            <div class="panel__box d-flex">
              <div class="panel__header"></div>
              <div class="col-12 col-md-3 right__side">
                <div class="side__profile text-center mb-5">
                  <div class="side__profile_icon">
                    <img src="/resource/img/icons/profile_icon.svg" />
                  </div>
                  <div v-if="!fullname" class="side__user_name p-2">پنل کاربری</div>
                  <div v-if="fullname" class="side__user_name p-2">{{ fullname }}</div>
                  <div class="side__user_mobile">
                    {{ mobilePhoneWithoutzero }}
                  </div>
                  <div class="side__user_balance">موجودی حساب: 0 تومان</div>
                </div>
                <ul class="side__buttons">
                  <user-panel-item-select
                    v-for="(item, index) in userPanelTabs"
                    :key="item.id"
                    for="userPanel"
                    :title="item.title"
                    :class="[(index === 0) & (setItemClicked === 0) ? 'active' : '']"
                    :selected="item.id === setItemClicked.id"
                    @click.native="panelItemClicked(item), panelItemId(item.id)"
                  />
                  <div class="panel_button">
                    <span class="grid-view__title" @click="showModal">خروج از سیستم</span>
                  </div>
                </ul>
              </div>
              <div class="col-12 col-md-9">
                <my-insurance v-if="ItemClickedId === 1" />
                <my-transaction v-if="ItemClickedId === 2" />
                <my-reminder v-if="ItemClickedId === 3" />
                <support-ticket v-if="ItemClickedId === 4" />
                <customers-club v-if="ItemClickedId === 5" />
                <user-info v-if="ItemClickedId === 6" />
                <exit-modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <access-denied></access-denied>
    </div>
    <b-modal ref="exit-modal" hide-footer hide-header
      ><div class="d-block text-center">
        <h3>آیا واقعا میخواهید خارج شوید؟</h3>
      </div>
      <b-button class="mt-3" variant="outline-warning" block @click="hideModal">پشیمون شدم!</b-button>
      <b-button class="mt-2" variant="outline-danger" block @click="onLogout">بله خارج میشوم</b-button></b-modal
    >
  </div>
</template>
<script>
// import { numeric } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import UserPanelItemSelect from '~/components/base/UserPanelItemSelect.vue'
export default {
  layout: 'main',

  middleware: ['check-auth', 'auth'],
  components: {
    UserPanelItemSelect,
    // MyInsurance: () => import('@/components/userpanel/MyInsurance'),
    // MyTransaction: () => import('@/components/userpanel/MyTransaction'),
    // MyReminder: () => import('@/components/userpanel/MyReminder'),
    // SupportTicket: () => import('@/components/userpanel/SupportTicket'),
    // CustomersClub: () => import('@/components/userpanel/CustomersClub'),
    // UserInfo: () => import('@/components/userpanel/UserInfo'),
    // accessDenied: () => import('@/components/AccessDenied'),
  },
  data() {
    return {
      setItemClicked: 0,
      ItemClickedId: 1,
      activeClass: null,
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
      userPanelTabs: 'userPanelTabs',
    }),
    mobilePhoneWithoutzero() {
      const phone = this.info && this.info.mobilePhone ? this.info.mobilePhone : ''
      return String(phone).substring(phone.length - 10)
    },
    fullname() {
      const firstname = this.info && this.info.firstName ? this.info.firstName : ''
      const lastname = this.info && this.info.lastName ? this.info.lastName : ''
      return String(firstname + lastname)
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    showModal() {
      this.$refs['exit-modal'].show()
    },
    hideModal() {
      this.$refs['exit-modal'].hide()
    },
    onLogout() {
      this.logout()
      this.$router.push('/')
    },
    panelItemClicked(item) {
      this.setItemClicked = item
    },
    panelItemId(id) {
      this.ItemClickedId = id
    },
  },
}
</script>
<style scoped>
.panel__box {
  background: white;
  border-radius: 10px;
}
.right__side {
  background-color: #112538;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 30px;
}
.side__profile {
  color: white;
}
.side__profile_icon img {
  width: 130px;
}
.side__user_name {
  color: white;
  font-size: 20px;
  font-weight: 400;
}
.side__user_mobile {
  font-size: 20px;
}
.side__user_balance {
  font-size: 14px;
}
.side__buttons {
  color: white;
  text-align: right;
  padding-right: 10px;
}
.side__buttons li {
  display: block;
  font-size: 20px;
  padding: 15px;
  font-weight: 500;
}
</style>
