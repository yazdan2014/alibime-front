<template>
  <div>
    <b-modal id="modal-prevent-closing" ref="checkout" v-model="visible" hide-header hide-footer size="lg">
      <div class="ch__data">
        <h4 class="fs-5 text-center border-bottom-sm">ویرایش اطلاعات بیمه نامه</h4>
        <div class="min-vh-50">
          <div class="section_ mb-4">
            <div class="header">
              <div class="right_line"></div>
              <span class="fs-6 text-bold">اطلاعات وسیله نقلیه</span>
            </div>
            <div class="d-flex align-content-start flex-sm-wrap">
              <div class="col-md-4 ps-md-2">
                <div class="title_">نوع وسیله نقلیه</div>
                <select v-model="selectedType" class="select__" @change="selectCar()">
                  <option v-for="item in getCarTypes" :key="item.carType" for="cartype" :value="item">
                    {{ item.carType }}
                  </option>
                </select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">برند وسیله نقلیه</div>
                <select v-model="selectedBrand" class="select__" @change="selectBrand()">
                  <option v-for="item in selectedType.brand" :key="item.carType" for="cartype" :value="item">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">مدل وسیله نقلیه</div>
                <select v-model="selectedModel" class="select__" @change="selectModel()">
                  <option v-for="item in selectedBrand.model" :key="item.carType" for="cartype" :value="item">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">سال ساخت</div>
                <select  class="select__" @change="selectCar()">
                  
                </select>
              </div>
            </div>
          </div>
          <div class="section_ mb-4">
            <div class="header">
              <div class="right_line"></div>
              <span class="fs-6 text-bold">اطلاعات بیشتر</span>
            </div>
            <div class="d-flex align-content-start flex-sm-wrap">
              <div class="col-md-4 ps-md-2">
                <div class="title_">نوع وسیله نقلیه</div>

                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">برند وسیله نقلیه</div>
                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">مدل وسیله نقلیه</div>
                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
            </div>
          </div>
          <div class="section_ mb-4">
            <div class="header">
              <div class="right_line"></div>
              <span class="fs-6 text-bold">تخفیف بیمه نامه قبلی</span>
            </div>
            <div class="d-flex align-content-start flex-sm-wrap">
              <div class="col-md-4 ps-md-2">
                <div class="title_">نوع وسیله نقلیه</div>
                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">برند وسیله نقلیه</div>
                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
              <div class="col-md-4 ps-md-2">
                <div class="title_">مدل وسیله نقلیه</div>
                <b-form-select id="carbuildselected" v-model="test" class="select__" :options="test_"> </b-form-select>
              </div>
            </div>
          </div>
        </div>
        <div class="ch__footer">
          <div class="text-center">
            <div class="reject_btn step-button" @click.stop="exit()">
              <span>انصراف</span>
              <b-spinner v-show="loading" small type="grow"></b-spinner>
            </div>
            <div class="accept_btn step-button" @click.stop="exit()">
              <span>تایید</span>
              <b-spinner v-show="loading" small type="grow"></b-spinner>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { store } from '@/store/wizard.js'
// import ItemSelect from '@/components/car-items/ItemSelect'
export default {
  //   components: {
  //     ItemSelect,
  //   },
  data() {
    return {
      visible: false,
      loading: false,
      example_: null,
      carYearselect: null,
      selectedYearId: null,
      type_: {},
      carTID: 0,
      selectedType: 0,
      selectedBrand: '',
      selectedModel: {},
      brand_: {},
      model_: {},
      test: 0,
        
      test_: [
        { text: '۳۲۰ میلیون تومان', value: '320' },
        { text: '۲۶۰ میلیون تومان', value: '260' },
        { text: '۲۰۰ میلیون تومان', value: '200' },
        { text: '۱۵۰ میلیون تومان', value: '150' },
        { text: '۱۰۰ میلیون تومان', value: '100' },
      ],
      
    }
  },
  props: {
    cartype: {
      type: String,
      required: false,
      default: '',
    },
    carbrand: {
      type: String,
      required: false,
      default: '',
    },
    carmodel: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      getCarTypes: 'car/getCarTypes',
      companyList: 'company/companyList',
      carBuildYears: 'carBuildYearList',
      carThirdDiscounts: 'carThirdDiscountList',
      carDriverDiscounts: 'carDriverDiscountList',
      carFDamage: 'carThirdFinancialDamageList',
      carLDamage: 'carThirdLifeDamageList',
      carDDamage: 'carDriverLifeDamageList',
    }),
    carBuildItems() {
      const years = this.$misc.cloneDeep(this.carBuildYears)
      return years.sort((a, b) => b.value - a.value)
    },
    typeCompare() {
      const types = this.$misc.cloneDeep(this.getCarTypes)
      //   for (const x in types) {
      //     if (x.carType === this.cartype) {
      //       console.log(x.carType)
      //       return x.carType
      //     }
      //   }
      return types
    },
  },
  watch: {
    carYearselect() {
      store.setYearSelected(this.carYearselect)
    },
  },
  mounted() {
    if (document.getElementById('choice-test')) {
      const element = document.getElementById('choice-test')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
    if (document.getElementById('choice-remove-ins')) {
      const element = document.getElementById('choice-remove-ins')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
  },
  methods: {
    selectCar() {
      this.type_ = this.selectedType
      this.selectedModel = null
    },
    selectBrand() {
      this.brand_ = this.selectedBrand
    },
    selectModel() {
      this.Model_ = this.selectedModel
    },
    showModal() {
      this.visible = true
      console.log('modal-visible')
    },
    exit() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
.select__ {
  width: 80%;
}
.right_line {
  width: 2px;
  height: 16px;
  border-radius: 2px;
  background-color: #08bcc0;
  display: inline-block;
  vertical-align: middle;
}
</style>
