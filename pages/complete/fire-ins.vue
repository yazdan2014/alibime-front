<template>
  <div class="compare-page">
    <div class="container">
      <div class="first-title">
        <div class="top_title">مشخصات و مدارک</div>
      </div>
      <div class="ins-step-box">
        <div class="complete_header">
          <div class="d-flex align-items-center">
            <img
              class="card_company_logo"
              src="\img\company\4.png"
              alt="سینا"
            />
            <!-- <h1 class="compare_title">بیمه سینا</h1> -->
            <div class="compare_desc">بیمه شخص ثالث</div>
          </div>
          <div class="tracking_code">کد پیگیری - {{ trackingCode }}</div>
        </div>
        <div class="row compare_content complete_content">
          <div class="grey_sec">
            <div class="sec_title">مشخصات بیمه‌گذار</div>
            <div class="sec_top">
              <div class="data_row in_111">
                <b-form-input
                  v-model="user_name"
                  class="input_12"
                  placeholder="نام و نام خانوادگی"
                ></b-form-input>
              </div>
              <div class="data_row in_112 d-flex">
                <b-form-select
                  v-model="birthDay"
                  class="sel_112"
                  :options="day"
                ></b-form-select>
                <b-form-select
                  v-model="birthMonth"
                  class="sel_112"
                  :options="month"
                ></b-form-select>
                <b-form-select
                  v-model="birthYear"
                  class="sel_112"
                  :options="year"
                ></b-form-select>
              </div>
              <div class="data_row in_111">
                <b-form-input
                  v-model="code_melli"
                  class="input_12"
                  placeholder="کد ملی"
                ></b-form-input>
              </div>
              <div class="data_row in_111">
                <b-form-input
                  v-model="mobile_number"
                  class="input_12 mt-3"
                  placeholder="شماره همراه"
                ></b-form-input>
              </div>
            </div>
          </div>
          <div class="grey_sec">
            <div class="sec_title">مشخصات بیمه نامه</div>
            <div class="sec_top">
              <div class="data_row in_113">
                <b-form-textarea
                  id="textarea-default"
                  placeholder="آدرس جهت درج بروی بیمه نامه"
                  rows="6"
                ></b-form-textarea>
              </div>
              <div class="sec_bottom">
                <div class="data_row in_113">
                  <div class="jss1408 jss1409">
                    <label
                      class="
                        MuiButtonBase-root
                        MuiButton-root MuiButton-outlined
                        jss1410
                        jss1412
                        jss1413
                        MuiButton-outlinedSizeLarge MuiButton-sizeLarge
                      "
                      tabindex="0"
                      role="button"
                      aria-disabled="false"
                      style="background-color: rgb(255, 255, 255)"
                      ><span class="MuiButton-label"
                        ><div class="jss1417">
                          <div>تصویر روی کارت ماشین یا برگ سبز</div>
                          <span
                            class="icon-UPLOAD1"
                            style="font-family: bbFontIcon; font-size: 48px"
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
                        <b-form-file
                          v-model="carCardFront"
                          accept="image/jpeg"
                          type="file"
                          class="d-none"
                          plain
                          @change="UpdateImageEvent"
                        >
                        </b-form-file></span
                    ></label>
                  </div>
                </div>
                <div class="data_row in_113"></div>
                <div class="data_row in_113">
                  <div class="jss1408 jss1409"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="grey_sec">
            <div class="sec_title">مشخصات ارسال</div>
            <div class="d-flex">
              <div class="sec_right">
                <div class="data_row in_112 d-flex">
                  <b-form-select
                    v-model="city_sel"
                    class="sel_112"
                    :options="city"
                  ></b-form-select>
                  <b-form-select
                    v-model="city_sel"
                    class="sel_112"
                    :options="city"
                  ></b-form-select>
                  <b-form-input
                    v-model="code_posti"
                    class="input_12"
                    placeholder="کد پستی"
                  ></b-form-input>
                </div>
              </div>
              <div class="sec_left">
                <b-form-textarea
                  id="textarea-default"
                  placeholder="آدرس برای ارسال بیمه نامه"
                  rows="6"
                ></b-form-textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="accept_btn step-button">تایید و ادامه</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// import ImageUploader from '@components/base'
export default {
  layout: 'other-pages',
  components: {},
  data() {
    return {
      loading: false,
      orderId: null,
      trackingCode: null,
      birthDay: null,
      birthMonth: null,
      birthYear: null,
      user_name: null,
      selected: null,
      code_melli: null,
      code_posti: null,
      mobile_number: null,
      city_sel: 1,
      day: [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: '7' },
        { value: 8, text: '8' },
        { value: 9, text: '9' },
        { value: 10, text: '10' },
        { value: 11, text: '11' },
        { value: 12, text: '12' },
        { value: 13, text: '13' },
        { value: 14, text: '14' },
        { value: 15, text: '15' },
        { value: 16, text: '16' },
        { value: 17, text: '17' },
        { value: 18, text: '18' },
        { value: 19, text: '19' },
        { value: 20, text: '20' },
        { value: 21, text: '21' },
        { value: 22, text: '22' },
        { value: 23, text: '23' },
        { value: 24, text: '24' },
        { value: 25, text: '25' },
        { value: 26, text: '26' },
        { value: 27, text: '27' },
        { value: 28, text: '28' },
        { value: 29, text: '29' },
        { value: 30, text: '30' },
      ],
      month: [
        { value: 1, text: 'فروردین' },
        { value: 2, text: 'اردیبهشت' },
        { value: 3, text: 'خرداد' },
        { value: 4, text: 'تیر' },
        { value: 5, text: 'مرداد' },
        { value: 6, text: 'شهریور' },
        { value: 7, text: 'مهر' },
        { value: 8, text: 'آبان' },
        { value: 9, text: 'آذر' },
        { value: 10, text: 'دی' },
        { value: 11, text: 'بهمن' },
        { value: 12, text: 'اسفند' },
      ],
      year: [
        { value: 1, text: '1399' },
        { value: 2, text: '1398' },
        { value: 3, text: '1397' },
        { value: 4, text: '1396' },
        { value: 5, text: '1395' },
        { value: 6, text: '1394' },
        { value: 7, text: '1393' },
        { value: 8, text: '1392' },
        { value: 9, text: '1391' },
        { value: 10, text: '1390' },
        { value: 11, text: '1389' },
        { value: 12, text: '1388' },
        { value: 13, text: '1387' },
        { value: 14, text: '1386' },
        { value: 15, text: '1385' },
        { value: 16, text: '1384' },
        { value: 17, text: '1383' },
        { value: 18, text: '1382' },
        { value: 19, text: '1381' },
        { value: 20, text: '1380' },
        { value: 21, text: '1379' },
        { value: 22, text: '1378' },
        { value: 23, text: '1377' },
        { value: 24, text: '1376' },
        { value: 25, text: '1375' },
        { value: 26, text: '1374' },
        { value: 27, text: '1373' },
        { value: 28, text: '1372' },
        { value: 29, text: '1371' },
        { value: 30, text: '1370' },
      ],
      city: [
        { value: 1, text: 'تهران' },
        { value: 2, text: 'کرج' },
      ],
      carCardFront: [],
      carCardBack: null,
      insCardImage: null,
      govahinameImage: null,
      order: {},
      server_url: 'https://vibrant-noether-zb6sn5xd3.iran.liara.run/v1/order/downloadImage/',
    }
  },
  watch: {
    refresh() {
      this.UpdateImageEvent()
    },
  },
  mounted() {
    this.orderId = this.$route.query.order_id
    console.log(this.orderId) // eslint-disable-line

    this.getData(this.orderId)
  },
  methods: {
    getData(id) {
      this.$store.dispatch('orders/getOrderbyID', id).then((result) => {
        console.log('order get by id done.') // eslint-disable-line
        this.trackingCode = result.tracking_code

        if (result.carCardImageFrontUrl) {
          this.carCardFront = result.carCardImageFrontUrl
        }
        if (result.carCardImageBackUrl) {
          this.carCardBack = result.carCardImageBackUrl
        }

        if (result.previousInsuranceImageFrontUrl) {
          this.insCardImage = result.previousInsuranceImageFrontUrl
        }
        if (result.govahinameImage) {
          this.govahinameImage = result.govahinameImage
        }
      })
      console.log(this.trackingCode) // eslint-disable-line
    },
    ...mapActions({
      uploadImageOrder: 'orders/uploadImageOrder',
    }),
    UpdateImageEvent() {
      // await 0.5 second for get v-model data's
      setTimeout(() => {
        this.OnUpdateImage(
          this.carCardFront,
          this.orderId,
          'carCardImageFrontUrl'
        )
      }, 500)
    },
    OnUpdateImage(file, id, key) {
      this.uploadImageOrder({
        imageFile: file,
        orderId: id,
        name: key,
      })
        .then((result) => {
          this.refresh()
          console.log('عکس با موفقیت بارگزاری شد') // eslint-disable-line
        })
        .catch(() => {
          console.log('خطا در بارگزاری عکس!') // eslint-disable-line
        })
    },
    showModal() {
      this.visible = true
    },
  },
}
</script>
<style scoped>
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
.input_12 {
  height: 70px;
}
</style>
