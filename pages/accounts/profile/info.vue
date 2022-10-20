<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div v-if="isAuthenticated">
      <div class="my-8">
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
                  <div class="side__user_balance">شارژ کیف پول +</div>
                </div>
                <ul class="side__buttons">
                  <div class="panel_button active" for="userPanel">
                    <a href="/accounts/profile/info"><span class="grid-view__title">اطلاعات کاربری</span></a>
                  </div>
                  <div class="panel_button" for="userPanel">
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
                <div class="form-items">
                  <div class="item-info">
                    <div class="col-2">
                      <label for="first_name" class="form-item-required" title="نام">نام *</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="first_name"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="last_name" class="form-item-required" title="نام خانوادگی">نام خانوادگی *</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="last_name"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="father_name" class="form-item-required" title="نام پدر">نام پدر</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="father_name"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="code_melli" class="form-item-required" title="کد ملی">کد ملی</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="code_melli"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="birth_day" class="form-item-required" title="تاریخ تولد">تاریخ تولد</label>
                    </div>
                    <div class="col-10">
                      <!-- <base-birthday-date-field
                        v-model="birthDay1"
                        type="date"
                        class="birthday_box"
                        :auto-submit="true"
                        display-format="jYYYY/jMM/jDD"
                        outlined
                        @input="birthdaySelect()"
                      /> -->
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="email_address" class="form-item-required" title="ایمیل">ایمیل</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="email_address" type="email"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="mobile_number" class="form-item-required" title="تلفن همراه">تلفن همراه</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="mobile_number" type="number" disabled></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="mobile_number" class="form-item-required" title="تلفن ثابت">تلفن ثابت</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="home_number" type="number"></b-form-input>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="sex_select" class="form-item-required" title="جنسیت">جنسیت</label>
                    </div>
                    <div class="col-10">
                      <b-form-group v-slot="{ ariaDescribedby }">
                        <div class="d-flex">
                          <b-form-radio v-model="sex_selected" :aria-describedby="ariaDescribedby" name="men" value="مرد">مرد</b-form-radio>
                          <b-form-radio v-model="sex_selected" :aria-describedby="ariaDescribedby" name="women" value="زن">زن</b-form-radio>
                        </div>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="birth_day" class="form-item-required" title="استان">استان</label>
                    </div>
                    <div class="col-10">
                      <v-select
                        @input="setActiveState"
                        label="province_name_fa"
                        :options="$store.state.provinces"
                        :value="provincesSelected"
                        dir="rtl"
                      ></v-select>
                      <!-- <b-form-select
                        v-model="provincesName"
                        class="browser-default custom-select"
                      >
                        <option
                          v-for="item in provinces"
                          :key="item.province_name"
                          for="provinces"
                          :title="item.name_fa"
                          :selected="
                            item.province_name === selectedProvinceName
                          "
                          @change="selectProvinceName(item.province_name, item)"
                        >
                          {{ item.province_name_fa }}
                        </option>
                      </b-form-select> -->
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="birth_day" class="form-item-required" title="استان">شهر</label>
                    </div>
                    <div class="col-10">
                      <v-select
                        @input="setActiveCity"
                        label="name_fa"
                        :options="selectedProvinceName.cities"
                        :value="selectedProvinceCityName"
                        dir="rtl"
                      ></v-select>

                      <!-- <b-form-select
                        v-model="provincesCity"
                        class="browser-default custom-select"
                      >
                        <option
                          v-for="item in provincesSelected.cities"
                          :key="item.name_fa"
                          for="provinces"
                          :title="item.name_fa"
                          :selected="item.name_fa === selectedProvinceCityName"
                          @change="
                            selectProvinceCityName(item.name_fa),
                              provinceCitySelected(item)
                          "
                        >
                          {{ item.name_fa }}
                        </option>
                      </b-form-select> -->
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="address" class="form-item-required" title="آدرس">آدرس</label>
                    </div>
                    <div class="col-10">
                      <b-form-textarea id="address" v-model="address" placeholder="" rows="3" max-rows="6"></b-form-textarea>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="col-2">
                      <label for="sheba_number" class="form-item-required" title="شماره شبا">شماره شبا</label>
                    </div>
                    <div class="col-10">
                      <b-form-input v-model="sheba_number" type="number"></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button class="step-button step-button-next" @click.stop="editInfo()">تایید و ثبت مشخصات</button>
                </div>
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
import moment from 'moment'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
export default {
  components: { vSelect },
  layout: 'main',
  middleware: ['check-auth', 'auth'],

  data() {
    return {
      first_name: null,
      last_name: null,
      father_name: null,
      code_melli: null,
      home_number: null,
      mobile_number: null,
      email_address: null,
      provincesName: null,
      sex_selected: null,
      provincesSelected: null,
      provincesCity: null,
      selectedProvinceCityName: null,
      selectedProvinceName: {},
      sheba_number: null,
      address: null,
      birth_day: 0,
      birthDay1: 0,

      loading: false,

      options: ['foo', 'bar', 'baz'],
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
      // provinces: 'getProvinces',
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
    this.getData()
  },
  methods: {
    getData() {
      this.$store
        .dispatch('auth/getInfo')
        .then((result) => {
          this.first_name = result.firstName
          this.last_name = result.lastName
          this.father_name = result.fatherName
          this.code_melli = result.nationalCode
          this.mobile_number = result.mobilePhone
          this.home_number = result.constPhone
          this.email_address = result.email
          this.sex_selected = result.gender
          this.address = result.homeAddress
          this.provincesSelected = result.stateName
          this.selectedProvinceCityName = result.cityName
          this.sheba_number = result.bankAccountSheba
        })
        .catch(() => {})
    },
    editInfo() {
      const data = {
        firstName: this.first_name,
        lastName: this.last_name,
        fatherName: this.father_name,
        nationalCode: this.code_melli,
        birthday: this.birthDay1,
        gender: this.sex_selected,
        email: this.email_address,
        constPhone: this.home_number,
        stateName: this.provincesSelected,
        cityName: this.selectedProvinceCityName,
        homeAddress: this.address,
        bankAccountSheba: this.sheba_number,
      }
      this.sendRequest(data)
    },
    sendRequest(data) {
      this.loading = true
      this.$store.dispatch('auth/editInfo', data).then((result) => {
        // eslint-disable-next-line
        console.log(result)
        this.loading = false
        this.refresh()
      })
    },
    setActiveState(value) {
      this.selectedProvinceName = value
      this.provincesSelected = value.province_name_fa
      console.log(value) // eslint-disable-line
    },
    setActiveCity(value) {
      this.selectedProvinceCityName = value.name_fa
      console.log(value) // eslint-disable-line
    },
    refresh() {
      this.$nuxt.refresh()
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
    birthdaySelect() {
      this.birth_day = moment(this.birthDay1).format('YYYY/MM/DD')
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
