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
              ارزش لوازم غیر فابریک را به تومان وارد کنید
            </header>
            <div class="content">
              <b-form-input
                v-model="carAccessoriesInput"
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
                placeholder="مثلا 10,000,000 تومان"
                @change="selectCarAccessories()"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
      <!-- <v-select :options="carBuildItems" label="text"></v-select> -->
    </b-modal>
  </div>
</template>
<script>
import { store } from '@/store/wizard.js'
import { CurrencyDirective } from 'vue-currency-input'
import parseCurrency from 'parsecurrency'
// import vSelect from 'vue-select'
export default {
  directives: {
    currency: CurrencyDirective,
  },
  components: {
    // vSelect,
  },
  data() {
    return {
      visible: false,
      carAccessoriesInput: null,
      selectedUsageId: null,
      suffix: ' تومان',
      prefix: null,
    }
  },

  watch: {
    carAccessoriesInput() {
      store.setAccesoriesValue(parseCurrency(this.carAccessoriesInput).value)
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
    selectCarAccessories() {
      this.visible = false
      this.$emit('onReloadPage')
    },
  },
}
</script>
