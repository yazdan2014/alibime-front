<template>
  <div>
    <header class="header-2">
      <div class="service-header align-items-baseline relative" style="background-image: url('/resource/img/bg2.jpg')">
        <span class="mask bg-gradient-primary opacity-85"></span>
        <div class="container z-index-3">
          <div class="col-lg-7 text-center mx-auto">
            <h1 class="text-white font-27rem mt-7 z-index-0 typewriter">خرید بیمه شخص ثالث خودرو</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="col-sm-12 col-md-11 col-lg-10 col-xl-9 mx-auto card card-body shadow-xl z-index-1 mt-n8 mb-8">
        <form-wizard ref="formwizard" @onComplete="onComplete" @onNextStep="nextStep" @onPreviousStep="previousStep" @onReset="reset">
          <tab-content title="نوع وسیله نقلیه خود را انتخاب کنید" :selected="true">
            <div class="form-group">
              <div class="col-md-6 ms-auto me-auto">
                <div class="input-group input-group-dynamic mb-4">
                  <input v-model="carTypeSearch" class="form-control step-input" placeholder="مثلا سواری" type="text" />
                  <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="scrollbar scrollbar-primary">
                  <item-clickable
                    v-for="item in carTypeFilter"
                    :key="item.carType"
                    for="cartype"
                    :title="item.carType"
                    :src="item.icon"
                    :selected="item.carTypeID === selectedType.carTypeID"
                    @click.native="
                      selectCar(item),
                        CarTypeName(item.carType),
                        CarTypeNameLatin(item.carTypeLatin),
                        carTypeID(selectedType.carTypeID),
                        $refs.formwizard.nextTab()
                    "
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="برند وسیله نقلیه خود را انتخاب کنید">
            <div class="form-group">
              <div class="col-md-6 ms-auto me-auto">
                <div class="input-group input-group-dynamic mb-4">
                  <input v-model="carBrandSearch" class="form-control step-input" placeholder="مثلا سمند" type="text" />
                  <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="scrollbar scrollbar-primary">
                  <item-clickable
                    v-for="item in carBrandFilter"
                    :key="item.latinName"
                    for="carbrand"
                    :title="item.name"
                    :src="item.icon"
                    :selected="item.id === selectedBrandId"
                    @click.native="
                      selectBrandId(item.id),
                        selectBrand(item),
                        CarBrandName(item.name),
                        CarBrandNameLatin(item.latinName),
                        $refs.formwizard.nextTab()
                    "
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="مدل وسیله نقلیه را انتخاب کنید">
            <div class="form-group">
              <div class="col-md-6 ms-auto me-auto">
                <div class="input-group input-group-dynamic mb-4">
                  <input v-model="carModelSearch" class="form-control step-input" placeholder="مثلا کوییک" type="text" />
                  <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="scrollbar scrollbar-primary">
                  <item-clickable
                    v-for="item in carModelFilter"
                    :key="item.model"
                    for="carmodelName"
                    :title="item.name"
                    :src="item.icon"
                    :selected="item.id === selectedModelId"
                    @click.native="selectModelId(item.id), CarModelName(item.name), CarCylinder(item.cylinder), $refs.formwizard.nextTab()"
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="سال ساخت خودرو را مشخص کنید">
            <div class="form-group">
              <div class="col-md-6 ms-auto me-auto">
                <div class="input-group input-group-dynamic mb-4">
                  <input v-model="carYearSearch" class="form-control step-input" placeholder="مثلا 1390" type="text" />
                  <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="scrollbar scrollbar-primary">
                  <item-clickable
                    v-for="item in carYearFilter"
                    :key="item.year"
                    for="caryear"
                    :title="item.text"
                    :selected="item.text === selectedYear"
                    @click.native="selectCarYear(item.text), $refs.formwizard.nextTab()"
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="این خودرو تاکنون بیمه شخص‌ثالث داشته است؟">
            <select :class="hasError('referral') ? 'is-invalid' : ''" class="form-control d-none"></select>
            <div class="form-group">
              <div class="grid-view">
                <div class="scrollbar scrollbar-primary ml-1">
                  <div class="col-md-6 ms-auto me-auto">
                    <steps-botton-select
                      v-for="(item, index) in hasBime"
                      :key="item.id"
                      for="carbodyins"
                      :title="item.title"
                      :class="[(index === 0) & (sethasBimeId === 0) ? 'active_' : '']"
                      :selected="item.id === sethasBimeId"
                      @click.native="
                        hasBimeItemClicked(item.value)
                        hasBimeItemId(item.id)
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content :title="tab6Title">
            <div v-if="sethasBimeClicked == 'yes'" class="form-group">
              <div class="grid-view">
                <div class="scrollbar scrollbar-primary ml-1">
                  <div class="col-md-6 ms-auto me-auto">
                    <steps-botton-select
                      v-for="(item, index) in tavizPelak"
                      :key="item.id"
                      for="carbodyins"
                      :title="item.title"
                      :class="[(index === 0) & (tavizPelakId === 0) ? 'active_' : '']"
                      :selected="item.id === tavizPelakId"
                      @click.native="
                        tavizPelakItemClicked(item.value)
                        tavizPelakID(item.id)
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sethasBimeClicked == 'zero'" class="form-group">
              <div class="grid-view m-0">
                <div class="form-group">
                  <div class="col-md-6 ms-auto me-auto min-height-400">
                    <div class="date__sec">
                      <date-picker
                        v-model="lastExpDateZero"
                        placeholder="تاریخ ترخیص خودرو"
                        mode="single"
                        show
                        :styles="datepickercolors"
                        :column="1"
                        @submit="gotoZeroCompare()"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="شرکت بیمه‌گر قبلی خود را انتخاب کنید">
            <div class="grid-view m-0">
              <div class="form-group">
                <div class="col-md-6 ms-auto me-auto">
                  <div class="input-group input-group-dynamic mb-4">
                    <input v-model="companySearch" class="form-control step-input" placeholder="مثلا سینا" type="text" />
                    <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                  </div>
                  <div class="scrollbar scrollbar-primary">
                    <item-clickable
                      v-for="item in companyFilter"
                      :key="item.companyList"
                      v-model="companyList"
                      for="companyList"
                      :title="item.companyName"
                      :src="item.icon"
                      :selected="item.companyId === selectCompanyID"
                      @click.native="selectCompany(item), selectCoID(item.companyId), $refs.formwizard.nextTab()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="تاریخ شروع بیمه نامه قبلی را انتخاب کنید">
            <div class="grid-view m-0">
              <div class="form-group">
                <div class="col-md-6 ms-auto me-auto min-height-400">
                  <div class="date__sec">
                    <date-picker
                      v-model="getStartDate"
                      placeholder="تاریخ شروع بیمه‌نامه"
                      mode="single"
                      show
                      :styles="datepickercolors"
                      :column="1"
                      @select="SelectedLastPolicyStart(), $refs.formwizard.nextTab()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="تاریخ اتمام بیمه نامه قبلی را انتخاب کنید">
            <div class="grid-view m-0">
              <div class="form-group">
                <div class="col-md-6 ms-auto me-auto min-height-400">
                  <div class="date__sec">
                    <date-picker
                      v-model="formData.lastPolicyExp"
                      placeholder="تاریخ اتمام بیمه‌نامه"
                      mode="single"
                      show
                      :styles="datepickercolors"
                      :column="1"
                      @submit="SelectedlastPolicyExp(), $refs.formwizard.nextTab()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="میزان تخفیف درج شده بروی بیمه نامه قبلی خود را مشخص کنید"
            ><div class="grid-view m-0">
              <div class="form-group">
                <div class="col-md-6 ms-auto me-auto">
                  <div class="_title">تخفیف شخص ثالث</div>

                  <div class="scrollbar scrollbar-primary">
                    <item-clickable
                      v-for="item in carThirdDiscounts"
                      :key="item.dis"
                      :title="item.text"
                      :selected="item.value === selectedDisThird"
                      @click.native="disThirdpartyValue(item.value), $refs.formwizard.nextTab()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="میزان تخفیف حوادث راننده بیمه نامه قبلی خود را مشخص کنید"
            ><div class="grid-view m-0">
              <div class="form-group">
                <div class="col-md-6 ms-auto me-auto">
                  <div class="_title">تخفیف حوادث راننده</div>

                  <div class="scrollbar scrollbar-primary">
                    <item-clickable
                      v-for="item in carDriverDiscounts"
                      :key="item.dis"
                      :title="item.text"
                      :selected="item.value === selectedDisHavades"
                      @click.native="selectDisHavades(item.value), $refs.formwizard.nextTab()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="سابقه دریافت خسارت از بیمه نامه قبلی را انتخاب کنید">
            <div class="col-md-6 ms-auto me-auto">
              <div class="form-group">
                <steps-botton-select
                  v-for="(item, index) in accidentSelects"
                  :key="item.id"
                  for="carbodyins"
                  :title="item.title"
                  :class="[(index === 0) & (setAccidentSelect === 0) ? 'active_' : '']"
                  :selected="item.id === setAccidentSelect"
                  @click.native="accidentSelect(item.id)"
                />
              </div>
            </div>
          </tab-content>
          <tab-content title="میزان خسارت دریافتی از بیمه نامه قبلی">
            <div class="form-group">
              <div class="grid-view">
                <div class="scrollbar scrollbar-primary ml-1">
                  <div class="damage text-center">
                    <div class="damage_selects">
                      <div class="date_title">خسارت مالی</div>
                      <b-form-select id="carbuildselected" v-model="damageFD" class="select__" :options="carFDamage" @change="damageselectchanges()">
                      </b-form-select>
                    </div>
                    <div class="damage_selects">
                      <div class="date_title">خسارت جانی</div>
                      <b-form-select id="carbuildselected" v-model="damageLD" class="select__" :options="carLDamage" @change="damageselectchanges()">
                      </b-form-select>
                    </div>
                    <div class="damage_selects">
                      <div class="date_title">خسارت حوادث راننده</div>
                      <b-form-select id="carbuildselected" v-model="damageDD" class="select__" :options="carDDamage" @change="damageselectchanges()">
                      </b-form-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </div>
    </div>
    <!-- <page-content /> -->
    <check-modal ref="checkout"></check-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
// import moment from 'moment'
import { store } from '@/store/wizard.js'
import FormWizard from '@/components/car-items/thirdparty/FormWizardThirdParty'
import TabContent from '@/components/car-items/TabContent'
import ValidationHelper from '@/components/ValidationHelper'
import ItemClickable from '@/components/car-items/ItemClickable'
import StepsBottonSelect from '@/components/base/StepsBottonSelect'
// import PageContent from '@/components/car-items/thirdparty/PageContent'
// import SelectStep from '@/components/car-items/SelectStep'
// import mdbSelect from 'mdbvue'
// const checked = (value) => value === true
export default {
  components: {
    FormWizard,
    TabContent,
    ItemClickable,
    CheckModal: () => import('@/components/car-items/thirdparty/CheckoutModal'),
    StepsBottonSelect,
    // PageContent,
  },
  mixins: [ValidationHelper],
  layout: 'main',

  data() {
    return {
      // Steps Data's
      formData: {
        setCarType: null,
        setCarBrand: null,
        setCarModel: null,
        setCarYear: null,
        setCarIns: null,
        setStep6: null,
        setCompanyList: null,
        lastPolicyStart: null,
        lastPolicyExp: null,
        setDisThirdparty: null,
        setDisDriver: null,
      },
      // Vuelidate Validation Rules
      validationRules: [
        { setCarType: { required } },
        { setCarBrand: { required } },
        { setCarModel: { required } },
        { setCarYear: { required } },
        { setCarIns: { required } },
        { setStep6: { required } },
        { setCompanyList: { required } },
        { lastPolicyStart: { required } },
        { lastPolicyExp: { required } },
      ],
      // Main Data's
      carType: 0,
      carBrand: 0,
      carModel: 0,
      carbuildyear: null,
      selectHasBime: null,
      lastExpDateZero: null,
      lastExpDateZero_: null,

      previousCompany: null,
      lastPolicyStartDate: '2020-12-07',
      lastPolicyStartDate_: null,
      date: null,
      lastPolicyExpDate: null,
      lastPolicyExpDate_: null,

      thirdPartyDis: null,
      disHavades: null,

      cartypeName: null,
      cartypeNameLatin: null,
      carbrandName: null,
      carbrandNameLatin: null,
      carmodelName: null,
      CarCylinderData: 0,

      damageFD: 0,
      damageLD: 0,
      damageDD: 0,

      sethasBimeClicked: 'no',

      storeState: store.state,
      lastTab: 0,
      selected: null,
      selectedType: {},
      selectedBrand: {},
      selectedBrandId: 0,
      selectedModelId: 0,
      selectedYear: '',
      selectedDisThird: '',
      selectedDisHavades: '',
      selectCompanyID: null,
      carBuildModel: {},

      dateNow: null,
      choiceDamageFD: null,

      hasBime: [
        { id: 1, title: 'بله بیمه داشته است.', value: 'yes' },
        { id: 2, title: 'خودرو صفر کیلومتر است.', value: 'zero' },
        { id: 3, title: 'خیر بیمه نداشته است.', value: 'no' },
      ],
      tavizPelak: [
        { id: 1, title: 'بله، تعویض پلاک داشته است.', value: 'yes' },
        { id: 2, title: 'خیر، تعویض پلاک نداشته است.', value: 'no' },
      ],
      accidentSelects: [
        { id: 1, title: 'بدون خسارت', value: 'no' },
        { id: 2, title: 'خسارت گرفته ام', value: 'yes' },
      ],
      datepickercolors: {
        'primary-color': '#08bbbf',
        'secondary-color': '#08bbbf',
        'in-range-background': '#08bbbf',
        'icon-background': '#f4f5f5',
      },
      tavizPleakSelected: null,
      tavizPelakId: null,
      setCarTypeUseId: 0,
      sethasBimeId: 4,
      setAccidentSelect: 3,
      activeClass: null,
      totalTabs: 0,

      carTypeSearch: '',
      carBrandSearch: '',
      carModelSearch: '',
      carYearSearch: '',
      companySearch: '',

      tab6Title: '',
    }
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
    carTypeFilter() {
      if (this.carTypeSearch) {
        return this.getCarTypes.filter((item) => {
          return this.carTypeSearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.carType.toLowerCase().includes(v))
        })
      } else {
        return this.getCarTypes
      }
    },
    carBrandFilter() {
      if (this.carBrandSearch) {
        return this.selectedType.brand.filter((item) => {
          return this.carBrandSearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.selectedType.brand
      }
    },
    carModelFilter() {
      if (this.carModelSearch) {
        return this.selectedBrand.model.filter((item) => {
          return this.carModelSearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.selectedBrand.model
      }
    },
    carYearFilter() {
      if (this.carYearSearch) {
        return this.carBuildYears.filter((item) => {
          return this.carYearSearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.text.toLowerCase().includes(v))
        })
      } else {
        return this.carBuildItems
      }
    },
    companyFilter() {
      if (this.companySearch) {
        return this.companyList.filter((item) => {
          return this.companySearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.text.toLowerCase().includes(v))
        })
      } else {
        return this.companyList
      }
    },
    getStartDate() {
      const current = new Date()
      const date = `${current.getFullYear() - 1}-${current.getMonth() + 1}-${current.getDate() - 1}`
      return date
    },
  },

  watch: {
    lastTab() {
      store.setLastTab(this.lastTab)
    },
    cartypeName() {
      store.setcartypeName(this.cartypeName)
    },
    carbrandName() {
      store.setcarBrandName(this.carbrandName)
    },
    carmodelName() {
      store.setcarmodelName(this.carmodelName)
    },
    carbuildyear() {
      store.setcarbuildyear(this.carbuildyear)
    },
    previousCompany() {
      store.setpreviousCompanyName(this.previousCompany)
    },
    totalTabs() {
      store.setTotalTab(this.totalTabs)
    },
    deep: true,
  },
  mounted() {
    if (document.getElementById('choice-ins')) {
      const element = document.getElementById('choice-ins')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
  },

  methods: {
    hasBimeItemClicked(item) {
      console.log(item) // eslint-disable-line
      this.sethasBimeClicked = item
      this.formData.setCarUse = item
      this.totalTabs = 5
      this.sethasBimeId = item
      if (item === 'no') {
        this.gotoCompare1()
        this.totalTabs = 5
      } else if (item === 'yes') {
        this.changeLTabFalse()
        this.formData.setCarIns = 'yes'
        this.tab6Title = 'این خودرو در مدت بیمه‌نامه قبلی خود تعویض پلاک داشته است؟'
        this.totalTabs = this.$refs.formwizard.nextTab()
      } else if (item === 'zero') {
        this.formData.setCarIns = 'zero'
        this.tab6Title = 'تاریخ ترخیص خودرو را مشخص کنید'
        this.totalTabs = this.$refs.formwizard.nextTab()
      }
    },
    hasBimeItemId(id) {
      this.sethasBimeId = id
    },
    tavizPelakItemClicked(value) {
      this.tavizPleakSelected = value
      this.formData.setStep6 = value
      this.totalTabs = this.$refs.formwizard.nextTab()
      console.log(this.tavizPleakSelected) // eslint-disable-line
    },
    tavizPelakID(id) {
      this.tavizPelakId = id
    },
    accidentSelect(id) {
      this.setAccidentSelect = id
      if (this.setAccidentSelect === 1) {
        this.gotoCompare3()
      } else if (this.setAccidentSelect === 2) {
        // this.changeLTabFalse()
        this.totalTabs = this.$refs.formwizard.nextTab()
      }
    },

    // set Car Data's
    CarTypeName(item) {
      this.cartypeName = item
      console.log(this.cartypeName) // eslint-disable-line
    },
    CarTypeNameLatin(item) {
      this.cartypeNameLatin = item
      console.log(this.cartypeNameLatin) // eslint-disable-line
    },
    CarBrandName(item) {
      this.carbrandName = item
      console.log(this.carbrandName) // eslint-disable-line
    },
    CarBrandNameLatin(item) {
      this.carbrandNameLatin = item
      console.log(this.carbrandNameLatin) // eslint-disable-line
    },
    CarModelName(item) {
      this.carmodelName = item
      this.formData.setCarModel = item
      console.log(this.carmodelName) // eslint-disable-line
    },
    CarCylinder(item) {
      if (item === undefined) {
        this.CarCylinderData = 0
      } else {
        this.CarCylinderData = item
      }
      console.log('CarCylinder: ' + this.CarCylinderData) // eslint-disable-line
    },
    selectCarYear(item) {
      this.formData.setCarYear = item
      this.carbuildyear = item
      this.selectedYear = item
      console.log(this.carbuildyear) // eslint-disable-line
    },
    selectCompany(item) {
      this.formData.setCompanyList = item
      this.previousCompany = item.companyName
      console.log(this.previousCompany) // eslint-disable-line
    },
    SelectedLastPolicyStart() {
      this.formData.lastPolicyStart = this.lastPolicyStartDate.toString()
      console.log(this.formData.lastPolicyStart) // eslint-disable-line
    },
    SelectedlastPolicyExp() {
      this.formData.lastPolicyExp = this.formData.lastPolicyExp.toString()
      console.log(this.formData.lastPolicyExp) // eslint-disable-line
    },
    gotoZeroCompare() {
      // const dateString = moment(this.lastPolicyExpDate2).format('YYYY/MM/DD')
      // const changedDate = dateString.replace(/(....)\/(..)\/(..)/, '$1/$2/$3')
      // this.lastExpDateZero = this.lastExpDateZero.toString()
      this.lastExpDateZero = this.lastExpDateZero.toString()
      console.log(this.lastExpDateZero) // eslint-disable-line
      this.gotoCompare2()
    },
    disThirdpartyValue(value) {
      this.thirdPartyDis = value
      this.selectedDisThird = value
      console.log(this.thirdPartyDis) // eslint-disable-line
    },
    selectDisHavades(value) {
      this.disHavades = value
      this.selectedDisHavades = value
      console.log(this.disHavades) // eslint-disable-line
    },

    // Post to Next Page
    gotoCompare1(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty?car_type=${this.cartypeNameLatin}&car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_production_year=${this.storeState.getCarbuildyear}&policy_status=${this.sethasBimeClicked}`,
      })
    },
    gotoCompare2(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty?car_type=${this.cartypeNameLatin}&car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_production_year=${this.storeState.getCarbuildyear}&policy_status=${this.sethasBimeClicked}&lastPolicy_ExpDate=${this.lastExpDateZero}&previous_company=${this.previousCompany}&DisThirdparty=${this.thirdPartyDis}&DisDriver=${this.disHavades}&financialDamage=${this.damageFD}&lifeDamage=${this.damageLD}&havadesDamage=${this.damageDD}`,
      })
    },
    gotoCompare3() {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty?car_type=${this.cartypeNameLatin}&car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_production_year=${this.storeState.getCarbuildyear}&policy_status=${this.sethasBimeClicked}&previous_company=${this.previousCompany}&lastPolicy_StartDate=${this.lastPolicyStartDate}&lastPolicy_ExpDate=${this.formData.lastPolicyExp}&DisThirdparty=${this.thirdPartyDis}&DisDriver=${this.disHavades}&financialDamage=${this.damageFD}&lifeDamage=${this.damageLD}&havadesDamage=${this.damageDD}`,
      })
    },
    goCompare4(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.cartypeName}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/thirdparty/?car_type=${this.cartypeNameLatin}&car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_production_year=${this.storeState.getCarbuildyear}&policy_status=${this.sethasBimeClicked}&previous_company=${this.previousCompany}&lastPolicy_StartDate=${this.lastPolicyStartDate}&lastPolicy_ExpDate=${this.formData.lastPolicyExp}&DisThirdparty=${this.thirdPartyDis}&DisDriver=${this.disHavades}&financialDamage=${this.damageFD}&lifeDamage=${this.damageLD}&havadesDamage=${this.damageDD}`,
      })
    },
    // Middle Data's
    selectCar(item) {
      this.selectedType = item
      this.formData.setCarType = item
    },
    carTypeID(item) {
      this.carTID = item

      console.log('carTyprId: ' + this.carTID) // eslint-disable-line
    },
    selectBrand(item) {
      this.selectedBrand = item
    },
    selectBrandId(item) {
      this.selectedBrandId = item
      this.formData.setCarBrand = item
    },
    selectModelId(item) {
      this.selectedModelId = item
      console.log(this.selectedModelId) // eslint-disable-line
    },
    selectCoID(item) {
      this.selectCompanyID = item
    },
    damageselectchanges() {
      console.log(this.damageFD + this.damageLD + this.damageDD) // eslint-disable-line
      if (this.damageFD && this.damageLD && this.damageDD) {
        return this.gotoCompare3()
      }
    },
    onComplete() {
      this.$refs.formwizard.changeStatus()
    },
    reset() {
      for (const field in this.formData) {
        this.formData[field] = null
      }
    },
    onRunCheckoutModal() {
      this.$refs.checkout.showModal()
    },

    nextStep() {
      // eslint-disable-line
    },

    previousStep() {
      // alert("On Previous Step");
    },

    changeLTabFalse(event) {
      this.lastTab = 0
    },
  },
}
</script>

<style></style>
