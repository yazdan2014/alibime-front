<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="step-header">
      <div class="first-title">
        <div class="top_title">فاکتور پرداخت</div>
      </div>
      <div class="container">
        <div class="col-md-12">
          <div class="ins-step-box">
            <div class="invoice_page my-5">
              <div class="invoce_sec">
                <h4 class="invoice_title">مشخصات خرید <b-icon icon="Cart-check-fill"></b-icon></h4>

                <div class="invoice_items">
                  <div class="items">
                    <div class="name">شرکت بیمه</div>
                    <div class="name_">{{ company }}</div>
                  </div>
                  <div class="items">
                    <div class="name">برند خودرو</div>
                    <div class="name_">{{ car_brand }}</div>
                  </div>
                  <div class="items">
                    <div class="name">مدل خودرو</div>
                    <div class="name_">{{ car_model }}</div>
                  </div>
                  <div class="items">
                    <div class="name">نوع کاربری</div>
                    <div class="name_">{{ car_type }}</div>
                  </div>
                  <div class="items">
                    <div class="name">حداکثر تعهد مالی</div>
                    <div class="name_">{{ basePropertyDamage }},000,000 تومان</div>
                  </div>
                  <div class="items">
                    <div class="name">سال ساخت</div>
                    <div class="name_">{{ carBuildYear }}</div>
                  </div>
                  <div class="items">
                    <div class="name">تخفیف روی بیمه نامه قبلی</div>
                    <div class="name_">{{ thirdpartyDis }}</div>
                  </div>
                  <div class="items">
                    <div class="name">تخفیف حوادث راننده</div>
                    <div class="name_">{{ DisDrivercount }}</div>
                  </div>
                </div>
              </div>
              <div class="invoce_sec">
                <h4 class="invoice_title">جزئیات پرداخت <b-icon icon="Wallet-fill"></b-icon></h4>

                <div class="invoice_items">
                  <div class="items">
                    <div class="name">تخفیف</div>
                    <div class="name_">0</div>
                  </div>
                  <div class="items">
                    <div class="name">هزینه ارسال</div>
                    <div class="name_">رایگان</div>
                  </div>
                  <div class="items">
                    <div class="name">قیمت بیمه نامه</div>
                    <div class="name_">
                      <vue-numeric :value="orderPrice" separator="," read-only></vue-numeric>
                      تومان
                    </div>
                  </div>
                  <div class="payment_final">
                    <div class="price_name">
                      <b>مبلغ کل قابل پرداخت: </b>
                    </div>
                    <div class="final_price">
                      <b
                        ><span
                          ><div>
                            <vue-numeric :value="orderPrice" separator="," read-only></vue-numeric>
                            تومان
                          </div></span
                        ></b
                      >
                    </div>
                  </div>
                </div>
                <div class="gift_code">
                  <div class="price_name">
                    <b-icon icon="gift-fill"></b-icon>
                    <b>در صورت داشتن کد تخفیف یا کد معرف اینجا وارد کنید: </b>
                  </div>
                  <div>
                    <b-form-input v-model="gift_code" class="gift_input"></b-form-input>
                    <div class="accept_btn step-button">اعمال تخفیف</div>
                  </div>
                </div>

                <div class="gateway_select">
                  <h4 class="invoice_title">
                    درگاه پرداخت را انتخاب کنید
                    <b-icon icon="cash"></b-icon>
                  </h4>
                  <div class="gateways p-4">
                    <div class="gateway_brand text-center">
                      <b-form-radio v-model="gateway_selected" value="idpay">
                        <img class="card_company_logo" src="\resource\img\gateways\idpay.svg" alt="درگاه آی دی پی" />
                      </b-form-radio>
                    </div>
                    <div class="policy">
                      <h4>با زدن دکمه "تایید و پرداخت"، شرایط و قوانین را مطالعه نموده و پذیرفته ام.</h4>
                    </div>
                    <div class="payment_btn">
                      <!-- <div class="pay_btn step-button" @click.stop="createPayment()">
                        تایید و پرداخت
                        <b-icon icon="chevron-left"></b-icon>
                      </div> -->
                      <div class="pay_btn step-button" @click.stop="createPayment()">
                        ایجاد فاکتور و پرداخت
                        <b-icon icon="chevron-left"></b-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueNumeric from 'vue-numeric'
export default {
  components: { VueNumeric },
  layout: 'main',
  data() {
    return {
      pay_id: 0,
      gateway_selected: 'idpay',
      trackingCode: null,
      full_name: null,
      mobile_number: 0,
      emailAddress: null,
      car_type: null,
      car_brand: null,
      car_model: null,
      gift_code: null,
      orderPrice: 0,
      carBuildYear: null,
      basePropertyDamage: null,
      company: null,
      lastPolicyStartDate: null,
      lastPolicyExpDate: null,
      havadesFinal: null,
      DisThirdparty: null,
      DisDriver: null,
    }
  },
  mounted() {
    this.orderId = this.$route.query.order_id
    this.getData(this.orderId)
  },
  computed: {
    thirdpartyDis() {
      if (this.DisThirdparty === 0.05) return '5 درصد'
      if (this.DisThirdparty === 0.1) return '10 درصد'
      if (this.DisThirdparty === 0.15) return '15 درصد'
      if (this.DisThirdparty === 0.2) return '20 درصد'
      if (this.DisThirdparty === 0.25) return '25 درصد'
      if (this.DisThirdparty === 0.3) return '30 درصد'
      if (this.DisThirdparty === 0.35) return '35 درصد'
      if (this.DisThirdparty === 0.4) return '40 درصد'
      if (this.DisThirdparty === 0.45) return '45 درصد'
      if (this.DisThirdparty === 0.5) return '50 درصد'
      if (this.DisThirdparty === 0.55) return '55 درصد'
      if (this.DisThirdparty === 0.6) return '60 درصد'
      if (this.DisThirdparty === 0.65) return '65 درصد'
      if (this.DisThirdparty === 0.7) return '70 درصد'
      return 'بدون تخفیف'
    },
    DisDrivercount() {
      if (this.DisDriver === 0.05) return '5 درصد'
      if (this.DisDriver === 0.1) return '10 درصد'
      if (this.DisDriver === 0.15) return '15 درصد'
      if (this.DisDriver === 0.2) return '20 درصد'
      if (this.DisDriver === 0.25) return '25 درصد'
      if (this.DisDriver === 0.3) return '30 درصد'
      if (this.DisDriver === 0.35) return '35 درصد'
      if (this.DisDriver === 0.4) return '40 درصد'
      if (this.DisDriver === 0.45) return '45 درصد'
      if (this.DisDriver === 0.5) return '50 درصد'
      if (this.DisDriver === 0.55) return '55 درصد'
      if (this.DisDriver === 0.6) return '60 درصد'
      if (this.DisDriver === 0.65) return '65 درصد'
      if (this.DisDriver === 0.7) return '70 درصد'
      return 'بدون تخفیف'
    },
  },
  methods: {
    createPayment() {
      const data = {
        orderId: this.trackingCode,
        amount: this.orderPrice * 10,
        fullName: this.full_name,
        mobile: this.mobile_number,
        email: this.emailAddress,
        desc: 'بیمه شخص ثالث خودرو',
        status: 99,
      }
      this.addPay(data)
    },
    addPay(data) {
      this.loading = true
      this.$store.dispatch('payment/createPayment', data).then((result) => {
        console.log('payment Created!') // eslint-disable-line
        // this.loading = false
        // this.$router.push(result.link)
        window.location.href = result.link
      })
    },

    getData(id) {
      this.$store.dispatch('orders/getOrderbyID', id).then((result) => {
        console.log('order get by id done.') // eslint-disable-line
        this.trackingCode = result.tracking_code
        this.full_name = result.firstName + ' ' + result.lastName
        this.mobile_number = result.mobileNumber
        this.car_type = result.carTypeName
        this.car_brand = result.carBrandName
        this.car_model = result.carModelName
        this.carBuildYear = result.carBuildYear
        this.orderPrice = parseInt(result.orderPrice)
        this.basePropertyDamage = result.basePropertyDamage
        this.company = result.company
        this.lastPolicyStartDate = result.lastPolicyStartDate
        this.lastPolicyExpDate = result.lastPolicyExpDate
        this.havadesFinal = result.havadesFinal
        this.DisThirdparty = result.DisThirdparty
        this.DisDriver = result.DisDriver

        console.log('order get by id done.') // eslint-disable-line
        console.log(result) // eslint-disable-line
      })
    },
  },
}
</script>

<style scoped>
.payment_btn {
  text-align: center;
}
.policy {
  padding: 20px 0;
  text-align: center;
}
.policy h4 {
  font-size: 15px;
}
.gateway_select {
  border-top: 1px dashed #a7a7a7;
  padding: 20px 0;
  margin-top: 70px;
}
.gift_input {
  display: inline-block;
  width: 78%;
}
.accept_btn {
  background-color: #4aa960;
  display: inline-block;
  padding: 12px;
}
.pay_btn {
  background-color: #08bcc0;
  display: inline-block;
  padding: 12px;
}
.gift_code {
  border-top: 1px dashed #a7a7a7;
  height: 100px;
  padding: 17px 0;
  margin-top: 30px;
}
.price_name {
  display: inline-block;
}
.final_price {
  display: inline-block;
  margin-right: 12px;
  color: rgb(6, 160, 68);
}
.payment_final {
  font-size: 22px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid;
  margin-top: 10px;
  height: 75px;
}
.invoice_title {
  font-size: 17px;
  padding: 7px;
}
.invoice_title svg {
  float: right;
  margin-left: 6px;
}
.items > div {
  display: inline-block;
}
.name_ {
  float: left;
  font-weight: 500;
}
.name {
  font-weight: 300;
}
.items {
  display: flow-root;
  border-bottom: 1px dashed #e8e8e8;
  padding: 5px 0;
}
.invoice_title {
  padding-right: 10px;
  background: #eaf5ed;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.invoice_page {
  display: grid;
  background-color: white;
  width: 100%;
  max-width: 600px;
  padding: 40px 20px 30px;
  margin: 15px auto 0;
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
</style>
