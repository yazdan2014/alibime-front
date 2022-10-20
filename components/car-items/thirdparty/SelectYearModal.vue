<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="carBuildYears"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables text-center">
            <header class="header_title">سال ساخت خودرو را انتخاب کنید</header>
            <div class="content">
              <b-form-select
                v-model="carYearselect"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in carBuildItems"
                  :key="item.cartype"
                  for="carmodel"
                  :title="item.text"
                  :selected="item.id === selectedYearId"
                  @click.stop="selectYear()"
                >
                  {{ item.text }}
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
import { mapGetters } from 'vuex'
import { store } from '@/store/wizard.js'
// import vSelect from 'vue-select'
export default {
  components: {
    // vSelect,
  },
  data() {
    return {
      visible: false,
      carYearselect: null,
      selectedYearId: null,
    }
  },

  computed: {
    ...mapGetters({
      carBuildYears: 'carBuildYearList',
    }),
    carBuildItems() {
      const years = this.$misc.cloneDeep(this.carBuildYears)
      return years.sort((a, b) => b.value - a.value)
    },
  },
  watch: {
    carYearselect() {
      store.setYearSelected(this.carYearselect)
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
    selectYear() {
      this.visible = false
    },
  },
}
</script>
