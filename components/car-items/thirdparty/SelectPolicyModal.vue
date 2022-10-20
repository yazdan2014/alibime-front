<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="selectPolicyModal"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables text-center">
            <header class="header_title">
              این خودرو تاکنون بیمه شخص‌ثالث داشته است؟
            </header>
            <div class="content">
              <b-form-select
                v-model="carPolicyselect"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in hasBime"
                  :key="item.title"
                  for="carusage"
                  :title="item.title"
                  :selected="item.id === selectedPolicyId"
                  @click.stop="selectPolicy()"
                >
                  {{ item.title }}
                </option>
              </b-form-select>
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
// import vSelect from 'vue-select'
export default {
  components: {
    // vSelect,
  },
  data() {
    return {
      visible: false,
      carPolicyselect: null,
      selectedPolicyId: null,
      hasBime: [
        { id: 1, title: 'فاقد بیمه نامه', value: 'no' },
        { id: 2, title: 'خودرو صفر کیلومتر', value: 'zero' },
        { id: 3, title: 'دارای بیمه نامه قبلی', value: 'yes' },
      ],
    }
  },

  watch: {
    carPolicyselect() {
      store.setPolicyStatusName(this.carPolicyselect)
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
    selectPolicy() {
      this.visible = false
    },
  },
}
</script>
