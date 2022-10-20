<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="CoverPriceFluctuatioModal"
      v-model="visible"
      hide-header
      hide-footer
      size="sm"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables">
            <header class="header_title">
              <div class="title">نوسانات ارزش</div>
              <span
                >افزایش میزان خسارت پرداختی توسط شرکت بیمه در صورت افزایش قیمت
                روز خودرو</span
              >
            </header>
            <hr class="line-divider" />
            <div class="content p-2">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="coverPriceFluctuation"
                  :aria-describedby="ariaDescribedby"
                  name="noting"
                  value="0"
                  @change="priceFluctuation"
                  >هیچکدام</b-form-radio
                >
                <b-form-radio
                  v-model="coverPriceFluctuation"
                  :aria-describedby="ariaDescribedby"
                  name="25"
                  value="25"
                  @change="priceFluctuation"
                  >25 درصد</b-form-radio
                >
                <b-form-radio
                  v-model="coverPriceFluctuation"
                  :aria-describedby="ariaDescribedby"
                  name="50"
                  value="50"
                  @change="priceFluctuation"
                  >50 درصد</b-form-radio
                >
                <b-form-radio
                  v-model="coverPriceFluctuation"
                  :aria-describedby="ariaDescribedby"
                  name="100"
                  value="100"
                  @change="priceFluctuation"
                  >100 درصد</b-form-radio
                >
              </b-form-group>
            </div>
          </div>
        </div>
      </div>
      <!-- <v-select :options="carBuildItems" label="text"></v-select> -->
    </b-modal>
    <!-- <car-body ref="refresh"> </car-body> -->
  </div>
</template>
<script>
import { store } from '@/store/wizard.js'
// import { CurrencyDirective } from 'vue-currency-input'
// import parseCurrency from 'parsecurrency'
// import CarBody from '@/pages/compare/car-body'
// import vSelect from 'vue-select'
export default {
  directives: {
    // currency: CurrencyDirective,
  },
  components: {
    // vSelect,
    // CarBody: () => import('@/pages/compare/car-body'),
  },
  data() {
    return {
      visible: false,
      coverPriceFluctuation: 0,
    }
  },
  watch: {
    coverPriceFluctuation() {
      store.setCoverPriceFluctuation(this.coverPriceFluctuation)
    },
  },
  methods: {
    showModal() {
      if (this.visible === false) {
        this.visible = true
      } else if (this.visible === true) {
        this.visible = false
      }
    },
    priceFluctuation() {
      this.visible = false
      this.$emit('onReloadPage')
    },
  },
}
</script>
<style scoped>
.header_title span {
  font-weight: 100;
  font-size: 15px;
}
.header_title .title {
  font-size: 20px;
}
</style>
