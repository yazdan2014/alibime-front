<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="SelectIraniModal"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables text-center">
            <header class="header_title">
              خودروی شما تولید داخل است یا خارج؟
            </header>
            <div class="content">
              <b-form-select
                v-model="carIraniselect"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in carIrani"
                  :key="item.cartype"
                  for="carmodel"
                  :title="item.title"
                  :selected="item.id === selectedIraniId"
                  @click.stop="selectIrani()"
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
      carIraniselect: null,
      selectedIraniId: null,
      carIrani: [
        { id: 1, title: 'خودرو داخلی', value: 'irani' },
        { id: 2, title: 'خودرو وارداتی', value: 'out' },
      ],
    }
  },

  watch: {
    carIraniselect() {
      store.setIraniSelected(this.carIraniselect)
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
    selectIrani() {
      this.visible = false
      this.$emit('onReloadPage')
    },
  },
}
</script>
