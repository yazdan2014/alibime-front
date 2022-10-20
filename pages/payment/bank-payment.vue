<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="container">
      <div class="callback_page">
        <div class="pay_status step-header">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="payment_header">
                  <div class="check">
                    <b-icon icon="clock-history"></b-icon>
                  </div>
                </div>
                <div class="content">
                  <h1>در حال انتقال به درگاه پرداخت!</h1>
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
    </div>
  </div>
</template>
<script>
export default {
  layout: 'main',
  data() {
    return {
      countDown: 0,
      status: 0,
      trackId: 0,
      id: 0,
      orderId: 0,
    }
  },
  mounted() {
    this.loadRouterData()
    this.countDownTimer()
  },
  methods: {
    loadRouterData() {
      this.status = this.$route.query.status
      this.trackId = this.$route.query.track_id
      this.id = this.$route.query.id
      this.orderId = this.$route.query.order_id
    },
    countDownTimer() {
      if (this.countDown < 100) {
        setTimeout(() => {
          this.countDown += 0.5
          this.countDownTimer()
        }, 25)
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
  color: #fff;
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
