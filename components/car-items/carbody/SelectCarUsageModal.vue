<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="SelectUsageModal"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables text-center">
            <header class="header_title">کاربری خودرو را انتخاب کنید</header>
            <div class="content">
              <b-form-select
                v-model="carUsageselect"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in carUsage"
                  :key="item.cartype"
                  for="carmodel"
                  :title="item.title"
                  :selected="item.id === selectedUsageId"
                  @click.stop="selectUsage()"
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
      carUsageselect: null,
      selectedUsageId: null,
      carUsage: [
        { id: 1, title: 'سواری', value: 'passenger' },
        { id: 2, title: 'تاکسی', value: 'taxi' },
      ],
    }
  },

  watch: {
    carUsageselect() {
      store.setUsageSelected(this.carUsageselect)
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
    selectUsage() {
      this.visible = false
      this.$emit('onReloadPage')
    },
  },
}
</script>
