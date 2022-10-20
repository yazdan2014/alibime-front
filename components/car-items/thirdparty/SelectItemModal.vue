<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="ItemModaltype"
      v-model="visible"
      hide-header
      hide-footer
      size="md"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables">
            <header class="header_title">
              {{ title }}
            </header>
            <div class="content">
              <b-form-select
                v-if="switchProp == 1"
                v-model="carTypeName"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in getCarTypes"
                  :key="item.carType"
                  for="cartype"
                  :title="item.carType"
                  :selected="item.carTypeID === selectedType.carTypeID"
                  @click="selectCar(item), carTypeID(selectedType.carTypeID)"
                >
                  {{ item.carType }}
                </option>
              </b-form-select>
              <b-form-select
                v-if="switchProp == 2"
                v-model="carBrandNameModal"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in selectedType.brand"
                  :key="item.latinName"
                  for="carbrand"
                  :title="item.name"
                  :selected="item.id === selectedBrandId"
                  @click="
                    selectBrandId(item.id),
                      selectBrand(item),
                      selectBrandName(item.name),
                      selectBrandLatinName(item.latinName)
                  "
                >
                  {{ item.name }}
                </option>
              </b-form-select>
              <b-form-select
                v-if="switchProp == 3"
                v-model="carModelNameModal"
                class="scrollbar scrollbar-primary single_select"
                :select-size="10"
              >
                <option
                  v-for="item in storeState.carBrandData"
                  :key="item.model"
                  for="carmodel"
                  :title="item.name"
                  :selected="item.id === selectedModelId"
                  @click.stop="selectCarModel(carBrandData)"
                >
                  {{ item.name }}
                </option>
              </b-form-select>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
// import Fuse from 'fuse.js'
import { mapGetters } from 'vuex'
import { store } from '@/store/wizard.js'
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'برند خودرو',
    },
    setcartype: {
      type: Number,
      default: 1,
    },
    setcarbrand: {
      type: Number,
      default: 1,
    },
    setcarmodel: {
      type: Number,
      default: 1,
    },
    switch: { type: Number, required: false, default: 1 },
  },
  data() {
    return {
      visible: false,
      loading: false,
      carTypeData: null,
      selectedType: {},
      carTypeName: '',
      carTID: null,
      selectedBrand: {},
      selectedBrandId: null,
      carBrandNameLatin: null,
      carBrandNameModal: null,
      carBrandData: null,
      carModelNameModal: null,
      carModelName: null,
      selectedModelId: null,

      switchProp: this.switch,
      storeState: store.state,
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
      getCarTypes: 'car/getCarTypes',
    }),
  },
  watch: {
    carTypeSelected() {
      store.setCarTypeSelected(this.carTypeSelected)
    },
    carTypeName() {
      store.setCarTypeName(this.carTypeName)
    },
    carBrandData() {
      store.setCarBrandData(this.carBrandData.model)
    },
    carBrandNameModal() {
      store.setcarBrandName(this.carBrandNameModal)
    },
    carModelNameModal() {
      store.setcarModelName(this.carModelNameModal)
    },
    // changeModelName() {
    //   store.setcarModelName(this.carBrandData)
    // },
    selectedBrandId() {
      store.setBrandSelected(this.selectedBrandId)
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
    selectCar(item) {
      this.selectedType = item
      this.switchModal2()
    },
    carTypeID(item) {
      this.carTID = item
    },
    selectCarBrandData(name) {
      this.carModelName = name
    },
    selectCarModel() {
      this.visible = false
      this.switchProp = 2
    },
    selectBrandName(name) {
      this.carBrandName = name
    },
    selectBrandLatinName(name) {
      this.carBrandNameLatin = name
    },
    selectBrand(item) {
      this.selectedBrand = item
      this.carBrandData = item

      this.switchModal1()
    },

    switchModal1() {
      this.showModal()
      setTimeout(() => {
        // this.title = 'مدل خودرو'
        this.switchProp = 3
        this.visible = true
      }, 500)
    },
    switchModal2() {
      this.showModal()
      setTimeout(() => {
        // this.title = 'مدل خودرو'
        this.switchProp = 2
        this.visible = true
      }, 500)
    },
    selectBrandId(item) {
      this.selectedBrandId = item
    },
  },
}
</script>
<style scoped>
.header_title {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}
</style>
