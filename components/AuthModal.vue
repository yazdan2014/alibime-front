<template>
  <div>
    <b-modal id="modal-prevent-closing" class="text-center" ref="modal" v-model="visible" hide-header hide-footer>
      <b-form ref="form" v-model="valid" class="text-center" @submit.prevent="onSubmit">
        <div v-if="!errormessage">
          <p v-if="step === 1" class="rmodal-title">برای <b>ورود</b> یا <b>ثبت‌نام</b> شماره تلفن همراه خود را وارد کنید</p>
          <p v-if="step === 2" class="rmodal-title">
            کد ارسال شده برای شماره <b>{{ item.mobilePhone }}</b> را وارد کنید:
          </p>
        </div>
        <p v-else class="rmodal-title">کد وارد شده اشتباه است!</p>
        <b-form-group v-if="step === 1" label="شماره همراه" label-for="mobilePhone">
          <b-form-input
            id="mobilePhone"
            v-model="$v.item.mobilePhone.$model"
            class="border-input"
            :state="validateState($v.item.mobilePhone)"
            aria-describedby="mobilePhone-invalid-message"
            @focus="message = null"
          ></b-form-input>
          <b-form-invalid-feedback id="mobilePhone-invalid-message">شماره موبایل خود را به درستی وارد کنید!</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group v-if="step === 2" label="کد تایید" label-for="confirmationCode">
          <b-form-input
            maxlength="5"
            id="confirmationCode"
            v-model="$v.item.confirmationCode.$model"
            :state="validateState($v.item.confirmationCode)"
            aria-describedby="confirmationCode-invalid-message"
            @focus="message = null"
          ></b-form-input>
          <b-form-invalid-feedback id="confirmationCode-invalid-message"
            >کد ارسال شده به شماره {{ item.mobilePhone }} را وارد کنید</b-form-invalid-feedback
          >
        </b-form-group>

        <b-btn block color="primary" type="submit" :disabled="this.$v.item.$anyError || !valid">
          <b-spinner v-show="loading" small></b-spinner>
          <span>ادامه</span></b-btn
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data() {
    return {
      visible: false,
      step: 1,
      tempToken: '',
      loading: false,
      message: null,
      valid: false,
      errormessage: false,
      item: {
        mobilePhone: null,
        confirmationCode: null,
      },
    }
  },
  validations: {
    item: {
      mobilePhone: {
        required,
        numeric,
        minLength: minLength(11),
      },
      confirmationCode: {
        required,
        numeric,
        minLength: minLength(5),
      },
    },
  },
  computed: {},
  methods: {
    ...mapActions({
      requestOTP: 'auth/requestOTP',
      confirmOTP: 'auth/confirmOTP',
      getInfo: 'auth/getInfo',
    }),
    showModal() {
      this.step = 1
      this.item.mobilePhone = null
      this.item.confirmationCode = null
      this.tempToken = null
      this.visible = true
    },
    validateState(item) {
      const { $dirty, $error } = item
      return $dirty ? !$error : null
    },

    onSubmit() {
      this.$v.item.$touch()
      // if (this.$v.$invalid) {
      console.log('onSubmit form = ', this.$v.item.$anyESrror) // eslint-disable-line no-console
      console.log('item = ', this.item) // eslint-disable-line no-console
      this.loading = true
      console.log(this.item.mobilePhone) // eslint-disable-line no-console
      if (this.step === 1) {
        this.requestOTP({
          mobilePhone: this.item.mobilePhone,
        })
          .then((tempToken) => {
            if (tempToken) {
              this.step = 2
              this.tempToken = tempToken
              console.log('tempToken = ', this.tempToken) // eslint-disable-line no-console
            }
            this.loading = false
          })
          .catch((e) => {
            this.loading = false
            console.log('error step 1 = ', e) // eslint-disable-line no-console
          })
      } else {
        console.log('step 2') // eslint-disable-line no-console
        console.log('confirmationCode: ', this.item.confirmationCode) // eslint-disable-line no-console
        this.confirmOTP({
          mobilePhone: this.item.mobilePhone,
          confirmationCode: this.item.confirmationCode,
          tempToken: this.tempToken,
        })
          .then(() => {
            this.step = 1
            this.visible = false
            this.loading = false
            this.getInfo()
            console.log(this.getInfo()) // eslint-disable-line no-console
          })
          .catch((e) => {
            // this.step = 1
            this.loading = false
            console.log('error number: ', e) // eslint-disable-line no-console
            if (e === 401) {
              this.errormessage = true
            }
          })
      }
      // }
    },
  },
}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #31bcc0;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 6px;
  margin-top: 50px;
}
</style>
