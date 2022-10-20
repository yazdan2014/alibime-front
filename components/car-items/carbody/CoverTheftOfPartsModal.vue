<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="CoverTheftOfPartsModal"
      v-model="visible"
      hide-header
      hide-footer
      size="sm"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables">
            <header class="header_title">
              <div class="title">سرقت درجا قطعات</div>
              <span>پوشش جهت جبران خسارت ناشی از سرقت لوازم خودرو</span>
            </header>
            <hr class="line-divider" />
            <div class="content p-2">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="CoverTheftOfParts"
                  :aria-describedby="ariaDescribedby"
                  name="noting"
                  value="0"
                  @change="selectedItem"
                  >هیچکدام</b-form-radio
                >
                <b-form-radio
                  v-model="CoverTheftOfParts"
                  :aria-describedby="ariaDescribedby"
                  name="10"
                  value="10"
                  @change="selectedItem"
                  >10 درصد</b-form-radio
                >
                <b-form-radio
                  v-model="CoverTheftOfParts"
                  :aria-describedby="ariaDescribedby"
                  name="20"
                  value="20"
                  @change="selectedItem"
                  >20 درصد</b-form-radio
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
      CoverTheftOfParts: 0,
    }
  },

  watch: {
    CoverTheftOfParts() {
      store.setCoverTheftOfParts(this.CoverTheftOfParts)
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
    selectedItem() {
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
