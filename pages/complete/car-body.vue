<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="container">
      <div class="first-title">
        <div class="top_title">مشخصات و مدارک</div>
      </div>
      <div class="ins-step-box">
        <div class="complete_header step-header-complete">
          <div class="d-flex align-items-center">
            <img class="card_company_logo" src="\resource\img\company\4.png" alt="سینا" />
            <!-- <h1 class="compare_title">بیمه سینا</h1> -->
            <div class="compare_desc">بیمه بدنه خودرو</div>
          </div>
          <div class="tracking_code">کد پیگیری - {{ trackingCode }}</div>
        </div>
        <div class="row compare_content complete_content">
          <div class="grey_sec">
            <div class="sec_title">مشخصات بیمه‌گذار</div>
            <div class="sec_top">
              <div class="data_row w-200 in_111">
                <label for="name_" class="form-item-required" title="نام">نام</label>
                <b-form-input v-model="first_name"></b-form-input>
              </div>
              <div class="data_row w-200 in_111">
                <label for="family_" class="form-item-required" title="نام خانوادگی">نام خانوادگی</label>
                <b-form-input v-model="last_name"></b-form-input>
              </div>
              <div class="data_row w-150 in_111">
                <label for="family_" class="form-item-required" title="تاریخ تولد">تاریخ تولد</label>
                <!-- <base-birthday-date-field
                  :value="birthDay1"
                  type="date"
                  class="birthday_box"
                  :auto-submit="true"
                  display-format="jYYYY/jMM/jDD"
                  outlined
                  @input="birthdaySelect()"
                /> -->
              </div>
              <div class="data_row in_111">
                <label for="family_" class="form-item-required" title="کد ملی">کد ملی</label>
                <b-form-input v-model="code_melli"></b-form-input>
              </div>
              <div class="data_row in_111">
                <label for="family_" class="form-item-required" title="شماره همراه">شماره همراه</label>
                <b-form-input v-model="mobile_number"></b-form-input>
              </div>
            </div>
          </div>
          <div class="grey_sec">
            <div class="sec_title">مشخصات بیمه نامه</div>
            <div class="sec_top">
              <div class="data_row in_113">
                <b-form-textarea v-model="ins_address" id="textarea-default" placeholder="آدرس جهت درج بروی بیمه نامه" rows="6"></b-form-textarea>
              </div>
              <div class="sec_bottom">
                <div class="data_row in_113">
                  <div class="jss1408 jss1409">
                    <label
                      class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss1410 jss1412 jss1413 MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                      tabindex="0"
                      role="button"
                      aria-disabled="false"
                      style="background-color: rgb(255, 255, 255)"
                    >
                      <img class="image_cards" :src="'data:image/jpeg;base64,' + carCardFront" />
                      <span class="MuiButton-label"
                        ><div class="jss1417">
                          <div>تصویر روی کارت ماشین یا برگ سبز</div>
                          <span class="icon-UPLOAD1" style="font-family: bbFontIcon; font-size: 48px"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              class="bi bi-arrow-up-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                              /></svg
                          ></span>
                        </div>
                        <!-- <img
                          v-if="carCardFront"
                          :src="server_url + carCardFront"
                          alt="" /> -->
                        <b-form-file v-model="carCardFront" accept="image/jpeg" type="file" class="d-none" plain @change="imageCarCardFront">
                        </b-form-file></span
                    ></label>
                  </div>
                </div>
                <div class="data_row in_113">
                  <div class="jss1408 jss1409">
                    <label
                      class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss1410 jss1412 jss1413 MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                      tabindex="0"
                      role="button"
                      aria-disabled="false"
                      style="background-color: rgb(255, 255, 255)"
                      ><span class="MuiButton-label"
                        ><div class="jss1417">
                          <div>تصویر پشت کارت ماشین یا برگ سبز</div>
                          <span class="icon-UPLOAD1" style="font-family: bbFontIcon; font-size: 48px"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              class="bi bi-arrow-up-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                              /></svg
                          ></span>
                        </div>
                        <!-- <img
                          v-if="carCardFront"
                          :src="server_url + carCardFront"
                          alt="" /> -->
                      </span></label
                    >
                  </div>
                </div>
                <div class="data_row in_113">
                  <div class="jss1408 jss1409">
                    <label
                      class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss1410 jss1412 jss1413 MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                      tabindex="0"
                      role="button"
                      aria-disabled="false"
                      style="background-color: rgb(255, 255, 255)"
                      ><span class="MuiButton-label"
                        ><div class="jss1417">
                          <div>تصویر بیمه شخص ثالث</div>
                          <span class="icon-UPLOAD1" style="font-family: bbFontIcon; font-size: 48px"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              class="bi bi-arrow-up-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                              /></svg
                          ></span>
                        </div>
                        <!-- <img
                          v-if="carCardFront"
                          :src="server_url + carCardFront"
                          alt="" /> -->
                      </span></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grey_sec">
            <div class="sec_title">مشخصات ارسال</div>
            <div class="d-flex">
              <div class="sec_right">
                <div class="data_row in_112">
                  <div class="provinces p-2">
                    <label class="form-item-required" title="استان">استان</label>
                    <v-select
                      @input="setActiveState"
                      label="province_name_fa"
                      :options="$store.state.provinces"
                      :value="provincesSelected"
                      dir="rtl"
                    ></v-select>
                  </div>
                  <div class="provinces p-2">
                    <label class="form-item-required" title="شهر">شهر</label>
                    <v-select
                      @input="setActiveCity"
                      label="name_fa"
                      :options="selectedProvinceName.cities"
                      :value="selectedProvinceCityName"
                      dir="rtl"
                    ></v-select>
                  </div>
                </div>
              </div>
              <div class="sec_left p-2">
                <label class="form-item-required" title="آدرس">آدرس</label>
                <b-row>
                  <b-col style="padding: 0px 12px">
                    <b-form-textarea v-model="send_address" id="textarea-small" size="md" rows="4"></b-form-textarea>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="accept_btn step-button" @click.stop="editOrder()">تایید و ادامه</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
// import ImageUploader from '@components/base'
export default {
  components: { vSelect },
  layout: 'landing-pages',

  data() {
    return {
      loading: false,

      orderId: null,
      trackingCode: null,

      first_name: null,
      last_name: null,
      code_melli: null,
      mobile_number: null,
      ins_address: null,
      provincesSelected: null,
      selectedProvinceName: {},
      selectedProvinceCityName: null,
      send_address: null,
      birthDay1: null,
      birth_day: null,

      birthDay: null,
      birthMonth: null,
      birthYear: null,
      user_name: null,
      selected: null,

      code_posti: null,

      city_sel: 1,

      carCardFront: null,
      carCardFront_: null,
      carCardBack: '',
      carThirdImage: '',
      govahinameImage: null,
      order: {},
      server_url: 'https://vibrant-noether-zb6sn5xd3.iran.liara.run/v1/order/downloadImage/',
    }
  },
  watch: {
    refresh() {
      this.imageCarCardFront()
    },
  },
  mounted() {
    this.orderId = this.$route.query.order_id
    this.getData(this.orderId)
    this.getInfo()
    this.getCarCardFrontImage()
  },
  methods: {
    getInfo() {
      this.$store
        .dispatch('auth/getInfo')
        .then((result) => {
          this.first_name = result.firstName
          this.last_name = result.lastName
          this.code_melli = result.nationalCode
          this.mobile_number = result.mobilePhone
        })
        .catch(() => {})
    },
    getData(id) {
      this.$store.dispatch('orders/getOrderbyID', id).then((result) => {
        console.log('order get by id done.') // eslint-disable-line
        this.trackingCode = result.tracking_code

        if (result.carCardImageFrontUrl) {
          this.carCardFront_ = result.carCardImageFrontUrl
        }

        // if (result.carCardImageBackUrl) {
        //   this.carCardBack = result.carCardImageBackUrl
        // }

        // if (result.previousInsuranceImageFrontUrl) {
        //   this.insCardImage = result.previousInsuranceImageFrontUrl
        // }
        // if (result.govahinameImage) {
        //   this.govahinameImage = result.govahinameImage
        // }
      })
      // this.$store.dispatch()
    },
    editOrder() {
      const data = {
        _id: this.orderId,
        status: '11',
        firstName: this.first_name,
        lastName: this.last_name,
        nationalCode: this.code_melli,
        birthday: this.birth_day,
        mobileNumber: this.mobile_number,
        insAddress: this.ins_address,
        state: this.provincesSelected,
        city: this.selectedProvinceCityName,
        sendAddress: this.send_address,
      }
      this.sendRequest(data)
      this.$router.push({
        path: `/invoice/car-body/?order_id=${this.$route.query.order_id}`,
      })
    },
    sendRequest(data) {
      this.loading = true
      this.$store.dispatch('orders/carBodyEditOrder', data).then((result) => {
        console.log(result) // eslint-disable-next-line
        this.loading = false
      })
    },
    ...mapActions({
      uploadImageOrder: 'orders/uploadImageOrder',
      // downloadImageCardFront: 'orders/downloadImageOrder',
    }),

    imageCarCardFront() {
      // await 0.5 second for get v-model data's
      setTimeout(() => {
        this.OnUpdateImage(this.carCardFront, this.orderId, 'carCardImageFrontUrl')
      }, 500)
    },
    OnUpdateImage(file, id, key) {
      this.uploadImageOrder({
        imageFile: file,
        orderId: id,
        name: key,
      })
        .then((result) => {
          // this.imageCarCardFront()
          this.carCardFront_ = result.carCardImageFrontUrl
          console.log('عکس با موفقیت بارگزاری شد') // eslint-disable-line
          this.getCarCardFrontImage(this.carCardFront_)
        })
        .catch((err) => {
          console.log('خطا در بارگزاری عکس!') // eslint-disable-line
          console.log(err)
        })
    },

    getCarCardFrontImage() {
      setTimeout(() => {
        this.$store
          .dispatch('orders/downloadImageOrder', this.carCardFront_)
          .then((result) => {
            // const buffer = Buffer.from(result, 'base64')
            this.carCardFront = result
            console.log('عکس دریافت شد' + this.carCardFront) // eslint-disable-line
          })
          .catch((err) => {
            console.log('عکسی یافت نشد!') // eslint-disable-line
            console.log(err) // eslint-disable-line
          })
      }, 500)
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
    birthdaySelect() {
      this.birth_day = moment(this.birthDay1).format('YYYY/MM/DD')
    },
    showModal() {
      this.visible = true
    },
  },
}
</script>
<style scoped>
.step-header-complete {
  margin-top: -255px;
}
.w-150 {
  width: 150px !important;
}
.w-200 {
  width: 200px !important;
}
.sec_right {
  margin-bottom: 50px;
}
.accept_btn {
  background-color: #08bcc0;
  display: inline-block;
}
.sec_bottom {
  display: flex;
}
.sec_left {
  width: 100%;
}
.jss1413 {
  width: 323px !important;
  border: 1px solid #ced4da;
}
.jss1405 > div {
  margin-bottom: 16px !important;
}
.jss1409 {
  margin: 0px !important;
}
.jss1412 {
  width: 164px;
  height: 164px;
}
.MuiButton-label {
  width: 100%;
  align-items: inherit;
  padding: 40px;
  justify-content: inherit;
}
.jss1417 {
  display: flex;
  opacity: 0.85;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  flex-direction: column;
  justify-content: center;
}
.jss1411 span {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jss1412 {
  display: flex;
  border-radius: 1px;
  flex-direction: column;
}

.sel_112 {
  margin-left: 10px;
  height: 70px;
}
.complete_content {
  padding: 10px 40px;
}
.in_111 {
  width: 215px;
  margin: 0 8px;
}
.in_112 {
  width: 480px;
  margin: 0 8px;
}
.in_113 {
  width: 100%;
  padding: 0 15px;
  margin-bottom: 20px;
}
.grey_sec {
  color: #53575b !important;
  background-color: #fafafa;
  width: 100%;
  text-align: right;
  margin-bottom: 30px;
}
.ins-step-box .complete_header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.tracking_code {
  padding: 20px;
  font-weight: 400;
}
.card_company_logo {
  width: 133px;
  max-width: 100%;
  padding: 0 30px;
  border-left: 1px solid #b3b8bc;
}
.first-title {
  text-align: center;
  color: white;
}
.top_title {
  padding: 25px;
  font-size: 20px;
  font-weight: 400;
}
.compare_title {
  margin: 0;
}
.compare_desc {
  padding: 0px 40px;
  font-weight: 400;
  font-size: 20px;
}
.sec_title {
  padding: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
}
.sec_top {
  margin: 8px 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.image_cards {
  position: absolute;
  width: 322px;
}
</style>
