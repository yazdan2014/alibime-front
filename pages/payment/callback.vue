<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="container">
      <div v-if="gateway_status == 1" class="callback_page">
        <div class="pay_status step-header my-6">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="payment_header">
                  <div class="check">
                    <b-icon icon="clock-history"></b-icon>
                  </div>
                </div>
                <div class="content">
                  <h1>در حال تایید تراکنش از سمت فرستنده!</h1>
                  <h4>لطفا کمی صبر کنید...</h4>

                  <div class="progressbar mt-5">
                    <b-progress :value="countDown" variant="success" striped :animated="true"></b-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="gateway_status == 2" class="callback_page">
        <div class="pay_status step-header my-6">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="verified_header">
                  <div class="check">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="content">
                  <h1>پرداخت شما با موفقیت انجام شد!</h1>

                  <p>
                    <b>شماره پیگیری: {{ trackId }}</b>
                  </p>
                  <p>
                    <b>شماره سفارش: {{ orderId }}</b>
                  </p>
                  <a href="/accounts/profile/payments">رفتن به پنل کاربری</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="gateway_status == 3" class="callback_page">
        <div class="pay_status step-header my-6">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="red_header">
                  <div class="check">
                    <b-icon icon="exclamation-circle"></b-icon>
                  </div>
                </div>
                <div class="content">
                  <h1>{{ statusCodeTitle }}</h1>
                  <h4>لطفا از پنل کاربری مجددا اقدام به پرداخت کنید.</h4>

                  <div class="progressbar mt-5">
                    <a href="/accounts/profile/payments"> تراکنش های من </a>
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
export default {
  layout: 'main',
  data() {
    return {
      gateway_status: 1,
      countDown: 0,
      status: 0,
      trackId: 0,
      id: 0,
      orderId: 0,

      statusCodeTitle: '',
    }
  },
  mounted() {
    this.loadRouterData()
    this.countDownTimer()
    this.checkTransaction()
  },
  methods: {
    checkTransaction() {
      const data = {
        id: this.$route.query.id,
        // orderId: this.$route.query.order_id,
      }
      console.log(data) // eslint-disable-line
      this.check(data)
    },
    check(data) {
      this.$store
        .dispatch('payment/getPaymentbyID', data)
        .then((result) => {
          // eslint-disable-next-line
          console.log(result)
          if (this.id === result.paymentId) {
            console.log(this.checkStatus())
            if (this.checkStatus() === 10) {
              this.verifyTransaction()
            } else if (this.checkStatus() === 1) {
              this.gateway_status = 3
              this.statusCodeTitle = 'متاسفانه پرداخت انجام نشد!'
            } else if (this.checkStatus() === 2) {
              this.gateway_status = 3
              this.statusCodeTitle = 'پرداخت ناموفق!'
            } else if (this.checkStatus() === 3) {
              this.gateway_status = 3
              this.statusCodeTitle = 'هنگام پرداخت خطایی رخ داده است!'
            } else if (this.checkStatus() === 6) {
              this.gateway_status = 3
              this.statusCodeTitle = 'متاسفانه پرداخت شما انجام نشد!'
            } else if (this.checkStatus() === 7) {
              this.gateway_status = 3
              this.statusCodeTitle = 'کاربر از پرداخت انصراف داد!'
            }
          } else {
            console.log(false) // eslint-disable-line
          }
          console.log('transaction checked!') // eslint-disable-line
        })
        .catch((error) => {
          console.log(error) // eslint-disable-line
        })
    },
    verifyTransaction() {
      const data = {
        id: this.$route.query.id,
        orderId: this.$route.query.order_id,
        status: 10,
      }
      console.log(data) // eslint-disable-line
      this.verify(data)
    },
    verify(data) {
      this.$store
        .dispatch('payment/verifyTransaction', data)
        .then((result) => {
          // eslint-disable-next-line
          console.log(result)
          console.log('transaction verified!') // eslint-disable-line
          this.gateway_status = 2
        })
        .catch((error) => {
          console.log(error) // eslint-disable-line
          this.gateway_status = 3
          this.statusCodeTitle = 'تایید پرداخت امکان پذیر نیست!'
        })
    },
    countDownTimer() {
      if (this.countDown < 100) {
        setTimeout(() => {
          this.countDown += 0.5
          this.countDownTimer()
        }, 25)
      }
    },
    loadRouterData() {
      this.status = this.$route.query.status
      this.trackId = this.$route.query.track_id
      this.id = this.$route.query.id
      this.orderId = this.$route.query.order_id
    },
    checkStatus() {
      console.log(this.status)
      if (this.status === '10') {
        return 10
      } else if (this.status === '1') {
        return 1
      } else if (this.status === '2') {
        return 2
      } else if (this.status === '3') {
        return 3
      } else if (this.status === '6') {
        return 6
      } else if (this.status === '7') {
        return 7
      } else {
        return 0
      }
    },
  },
}
</script>
<style>
.progressbar {
  padding: 0 176px;
}
.content p {
  font-size: 20px;
  padding: 5px;
}
.payment {
  height: 350px;
  background: #fff;
  margin: auto;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  border-radius: 20px;
}
.payment_header {
  background: #08bcc0;
  padding: 20px;
  border-radius: 20px 20px 0px 0px;
}
.verified_header {
  background: #0bbbc0;
  padding: 20px;
  border-radius: 20px 20px 0px 0px;
}
.red_header {
  background: #e21818;
  padding: 20px;
  border-radius: 20px 20px 0px 0px;
}
.check {
  margin: 0px auto;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
  font-size: 38px;
}

.check i {
  vertical-align: middle;
  line-height: 50px;
  font-size: 30px;
}

.content {
  text-align: center;
}

.content h1 {
  font-weight: 400;
  font-size: 25px;
  padding: 25px;
}

.content a {
  width: 200px;
  height: 35px;
  font-size: 17px;
  color: #fff !important;
  border-radius: 5px;
  padding: 8px 20px;
  background: rgb(11 187 192);
  transition: all ease-in-out 0.3s;
}

.content a:hover {
  text-decoration: none;
  background: #0f9398;
}
</style>
