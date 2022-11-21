<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div v-if="isAuthenticated">
      <div class="my-8">
        <div class="container p-0">
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
                  <div class="side__user_balance">شارژ کیف پول +</div>
                </div>
                <ul class="side__buttons">
                  <div class="panel_button" for="userPanel">
                    <a href="/accounts/profile/info"><span class="grid-view__title">اطلاعات کاربری</span></a>
                  </div>
                  <div class="panel_button active" for="userPanel">
                    <a href="/accounts/profile/orders"><span class="grid-view__title">سفارش های من</span></a>
                  </div>
                  <div class="panel_button" for="userPanel">
                    <a href="/accounts/profile/payments">
                      <span class="grid-view__title">تراکنش های من</span>
                    </a>
                  </div>
                  <div class="panel_button" for="userPanel">
                    <a href="/accounts/profile/reminders">
                      <span class="grid-view__title">یادآورهای ثبت شده</span>
                    </a>
                  </div>
                  <div class="panel_button" for="userPanel">
                    <a href="/accounts/profile/tickets">
                      <span class="grid-view__title">درخواست پشتیبانی</span>
                    </a>
                  </div>
                  <div class="panel_button" for="userPanel">
                    <a href="/accounts/profile/club">
                      <span class="grid-view__title">باشگاه مشتریان</span>
                    </a>
                  </div>
                  <div class="panel_button">
                    <span class="grid-view__title" @click="showModal">خروج از سیستم</span>
                  </div>
                </ul>
              </div>
              <div class="col-12 col-md-9 info-content">
                <vue-good-table :columns="columns" :rows="tableRows" :rtl="true" :row-style-class="rowStyleClassFn" @on-row-click="onRowClick">
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'orderOperation'"
                      ><button v-on:click="deleteOrder(props)">{{ props }}</button>
                    </span>
                    <span v-else> {{ props.formattedRow[props.column.field] }} </span>
                  </template>
                </vue-good-table>
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
import { mapGetters } from 'vuex'
import { VueGoodTable } from 'vue-good-table'
import moment from 'moment-jalaali'
import 'vue-good-table/dist/vue-good-table.css'
// import moment from 'moment'
export default {
  layout: 'main',

  middleware: ['check-auth', 'auth'],
  components: { VueGoodTable },
  data() {
    return {
      columns: [
        {
          label: 'کد پیگیری',
          field: 'trackCode',
          type: 'number',
          sortable: false,
          width: '40px',
          tooltip: 'کد یکتای رهگیری سفارش',
        },
        {
          label: 'نوع سفارش',
          field: 'orderName',
          sortable: false,
          width: '80px',
        },
        {
          label: 'شرکت بیمه',
          field: 'companyName',
          sortable: false,
          width: '80px',
          tooltip: 'شرکت بیمه انتخاب شده هنگام تکمیل سفارش',
        },
        {
          label: 'تاریخ ایجاد',
          field: 'createdDate',
          sortable: false,
          width: '50px',
          tooltip: 'تاریخ ایجاد سفارش',
        },
        {
          label: 'وضعیت',
          field: 'orderState',
          sortable: false,
          width: '100px',
          tooltip: 'نمایش وضعیت فاکتورها و مراحل صدور',
        },
        {
          label: 'عملیات',
          field: 'orderOperation',
          sortable: false,
          width: '120px',
          tooltip: 'یکی از گزینه‌ها را جهت انجام عملیات مورد نظر کلیک کنید',
        },
      ],
      rows: [],
      tableRows: [],
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
      provinces: 'getProvinces',
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
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      this.$store
        .dispatch('orders/getOrders')
        .then((result) => {
          const resultArray = result
          for (let index = 0; index < result.length; index++) {
            const element = resultArray[index]
            console.log(element)
            const row = {
              trackCode: element.tracking_code,
              orderName: element.insType,
              companyName: element.company,
              createdDate: moment(element.createdDate).tz('Asia/Tehran').format('jYYYY/jM/jD'),
              orderState: this.orderStatus(element.status),
            }
            // this.tableRows[row] = JSON.parse(JSON.stringify(row))
            this.tableRows.push(row)
          }
        })
        .catch((error) => {
          console.log(error) // eslint-disable-line
        })
    },
    orderStatus(status) {
      if (status === 11) {
        return 'در انتظار پرداخت'
      } else if (status === 30) {
        return 'در حال بررسی'
      } else if (status === 35) {
        return 'نقص مدارک ارسالی'
      } else if (status === 40) {
        return 'در دست صدور'
      } else if (status === 10) {
        return 'منتظر بررسی ادمین'
      } else if (status === 50) {
        return 'تکمیل شده'
      } else if (status === 60) {
        return 'ارسال شده'
      }
      return status
    },
    onRowClick() {},
    orderOperation() {
      return true
    },
    rowStyleClassFn(row) {
      return 'row_style'
    },
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
  },
}
</script>
<style scoped>
.custom-control {
  padding-left: 4.5rem !important;
}
.info-content {
  padding: 40px 24px 39px 30px;
}
.panel_button {
  font-size: 20px;
  padding: 10px;
  transition: box-shadow 0.3s, border-color 0.6s;
}
.grid-view__title {
  color: white;
}
.panel_button:hover {
  cursor: pointer;
}
.active {
  background-color: #0bbbc0;
  border-radius: 5px;
}
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
.item-info {
  display: flex;
  text-align: right;
  padding: 20px;
  flex-wrap: nowrap;
  align-items: center;
}
.birthday_input {
  border-radius: 0 !important;
}
</style>
