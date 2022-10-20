<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="valueInputModal"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables text-center">
            <header class="header_title">
              ارزش خودرو را به تومان ولرد کنید
            </header>
            <div class="content">
              <b-form-input
                v-model="carValueInput"
                v-currency="{
                  locale: 'ir',
                  currency: { prefix, suffix },
                  valueAsInteger: false,
                  distractionFree: false,
                  precision: 0,
                  autoDecimalMode: false,
                  valueRange: { min: 20000000, max: 50000000000 },
                  allowNegative: false,
                }"
                class="select__ input_currency text-center"
                placeholder="مثلا 50,000,000 تومان"
                @change="selectCarPrice()"
              ></b-form-input>
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
import { CurrencyDirective } from 'vue-currency-input'
import parseCurrency from 'parsecurrency'
import { store } from '@/store/wizard.js'
// import CarBody from '@/pages/compare/car-body'
// import vSelect from 'vue-select'
export default {
  directives: {
    currency: CurrencyDirective,
  },
  components: {
    // vSelect,
    // CarBody: () => import('@/pages/compare/car-body'),
  },
  data() {
    return {
      visible: false,
      carValueInput: null,
      selectedUsageId: null,
      suffix: ' تومان',
      prefix: null,
    }
  },

  watch: {
    carValueInput() {
      store.setcarValueInput(parseCurrency(this.carValueInput).value)
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
    selectCarPrice() {
      this.visible = false
      this.$emit('onReloadPage')
    },
  },
}
</script>
