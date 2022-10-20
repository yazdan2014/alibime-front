<template>
  <div>
    <header class="header-2">
      <div class="service-header align-items-baseline relative" style="background-image: url('/resource/img/bg2.jpg')">
        <span class="mask bg-gradient-primary opacity-85"></span>
        <div class="container z-index-3">
          <div class="col-lg-7 text-center mx-auto">
            <h1 class="text-white font-27rem mt-7 z-index-0 typewriter">خرید بیمه بدنه خودرو</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="col-sm-12 col-md-11 col-lg-10 col-xl-9 mx-auto card card-body shadow-xl z-index-1 mt-n8 mb-8">
        <form-wizard ref="formwizard" @onComplete="onComplete" @onNextStep="nextStep" @onPreviousStep="previousStep" @onReset="reset">
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
                    :key="item.id"
                    v-model="carbrand"
                    for="carbrand"
                    :title="item.name"
                    :src="item.icon"
                    :selected="item.id === selectedBrandId"
                    @click.native="
                      selectBrandId(item.id),
                        selectBrand(item),
                        selectBrandName(item.name),
                        selectBrandLatinName(item.latinName),
                        $refs.formwizard.nextTab()
                    "
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="مدل وسیله نقلیه را انتخاب کنید">
            <select :class="hasError('referral') ? 'is-invalid' : ''" class="form-control d-none"></select>
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
                    @click.native="selectModelId(item.id), selectCarModel(item.name), $refs.formwizard.nextTab()"
                  />
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="کاربری خودرو">
            <div class="_title text-center">کاربری خودرو را انتخاب کنید</div>
            <div class="cal-12 carbuild_btn">
              <steps-botton-select
                v-for="(item, index) in carTypeUse"
                :key="item.id"
                for="carbodyins"
                :title="item.title"
                :class="[(index === 0) & (setCarTypeUseId === 0) ? 'active_' : '']"
                :selected="item.id === setCarTypeUseId"
                @click.native="carTypeUseItemClicked(item.value), carTypeUseItemId(item.id)"
              />
            </div>
          </tab-content>
          <tab-content title="اصالت و سال ساخت وسیله نقلیه خود را انتخاب کنید">
            <div class="cal-12 carbuild_btn">
              <steps-botton-select
                v-for="(item, index) in carBuildCountry"
                :key="item.id"
                v-model="carIsIrani"
                for="carbodyins"
                :title="item.title"
                :class="[(index === 0) & (setcarBuildCountryClicked === 0) ? 'active_' : '']"
                :selected="item.id === carBuildCountryClickedId"
                @click.native="carBuildCountryClicked(item.value), carBuildCountryItemId(item.id)"
              />
            </div>
            <div class="single__sbox">
              <div class="_title">سال ساخت وسیله نقلیه را مشخص کنید</div>
              <b-form-select
                id="carbuildselected"
                v-model="formData.setCarYear"
                class="scrollbar-primary select__ custom-select"
                :options="carBuildItems"
                @change="selectCarYear(formData.setCarYear), $refs.formwizard.nextTab()"
              >
              </b-form-select>
            </div>
          </tab-content>
          <tab-content title="ارزش روز وسیله نقلیه خود را وارد کنید">
            <div class="step__values">
              <div class="car_value text-center">
                <div class="date_title">ارزش روز خودرو (تومان)</div>
                <b-form-input
                  v-model="formData.setCarPrice"
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
                <!-- <div class="des_title">
              حداقل 20میلیون تومان و حداکثر 50میلیارد تومان
            </div> -->
              </div>
              <div class="car_value text-center mt-5">
                <div class="date_title">ارزش لوازم غیرفابریک خودرو</div>
                <b-form-input
                  v-model="CarAccesoriesPrice"
                  v-currency="{
                    locale: 'ir',
                    currency: { prefix, suffix },
                    valueAsInteger: false,
                    distractionFree: false,
                    precision: 0,
                    autoDecimalMode: false,
                    valueRange: { min: 2000000, max: 50000000 },
                    allowNegative: false,
                  }"
                  class="select__ input_currency text-center"
                  placeholder="مثلا 5,000,000 تومان"
                  @change="selectAccessoriesPrice()"
                ></b-form-input>
                <!-- <div class="des_title">
              حداقل ۲میلیون تومان و حداکثر ۵۰میلیون تومان
            </div> -->
              </div>
            </div>
          </tab-content>
          <tab-content title="وضعیت بیمه شخص ثالث را مشخص کنید">
            <div class="step__values">
              <div class="car_value text-center">
                <div class="single__sbox">
                  <div class="_title">میزان تخفیف عدم خسارت بیمه شخص ثالث</div>
                  <b-form-select
                    id="carbuildselected"
                    v-model="formData.thirdpartyDis"
                    class="scrollbar-primary select__ custom-select"
                    :options="carThirdDiscounts"
                    @change="disThirdPartyStep()"
                  >
                  </b-form-select>
                </div>
                <div class="single__sbox">
                  <div class="_title">شرکت بیمه گر شخص ثالث</div>
                  <b-form-select
                    id="carbuildselected"
                    v-model="formData.thirdpartyCompany"
                    class="scrollbar-primary select__ custom-select"
                    :options="companyName"
                    @change="disThirdPartyStep()"
                  >
                  </b-form-select>
                </div>
                <!-- <b-alert show class="danger_" variant="danger"
              >توجه داشته باشید اگر خودرو را تازه خریداری کرده اید از وارد کردن
              سوابق بیمه نامه صاحب قبلی خودداری کنید!</b-alert
            > -->
              </div>
            </div>
          </tab-content>
          <tab-content title="سوابق بیمه بدنه قبلی را مشخص کنید">
            <div class="form-group">
              <div class="grid-view">
                <div class="scrollbar scrollbar-primary ml-1">
                  <div class="cal-12 carbuild_btn">
                    <steps-botton-select
                      v-for="(item, index) in carBodyIns"
                      :key="item.id"
                      for="carbodyins"
                      :title="item.title"
                      :class="[(index === 0) & (setCarBodyInsId === 0) ? 'active_' : '']"
                      :selected="item.id === setCarBodyInsId"
                      @click.native="carBodyInsId(item.id)"
                    />
                  </div>

                  <div v-if="formData.setCarBodyIns == 'yes'" class="single__sbox">
                    <div class="_title">شرکت بیمه گر قبلی</div>
                    <b-form-select
                      id="carbuildselected"
                      v-model="formData.carBodyCompany"
                      class="scrollbar-primary select__ custom-select"
                      :options="companyName"
                      @change="selectLastCompany(), lastTabGotoNextPage()"
                    >
                    </b-form-select>
                    <div class="_title">میزان تخفیف بیمه قبلی</div>
                    <b-form-select
                      id="carbuildselected"
                      v-model="formData.carBodyDis"
                      class="scrollbar-primary select__ custom-select"
                      :options="carBodyDiscountOptions"
                      @change="selectYearsIncident(), lastTabGotoNextPage()"
                    >
                    </b-form-select>
                    <div class="_title">تاریخ اتمام بیمه نامه قبلی</div>
                    <base-date-text-field
                      v-model="formData.carbodyEndofDate"
                      label="تاریخ اتمام بیمه نامه قبلی"
                      type="date"
                      :auto-submit="true"
                      class="input__dates"
                      display-format="jYYYY/jMM/jDD"
                      outlined
                      :change="(selectCarbodyDate(), lastTabGotoNextPage())"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </div>
    </div>
    <check-modal ref="checkout"></check-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { CurrencyDirective } from 'vue-currency-input'
import parseCurrency from 'parsecurrency'
import { store } from '@/store/wizard.js'
import FormWizard from '@/components/car-items/carbody/FormWizardBody'
import TabContent from '@/components/car-items/TabContent'
import ValidationHelper from '@/components/ValidationHelper'
import ItemClickable from '@/components/car-items/ItemClickable'
import StepsBottonSelect from '@/components/base/StepsBottonSelect'

export default {
  directives: {
    currency: CurrencyDirective,
  },
  components: {
    FormWizard,
    TabContent,
    ItemClickable,
    CheckModal: () => import('@/components/car-items/carbody/CheckoutModal'),
    StepsBottonSelect,
  },
  mixins: [ValidationHelper],
  layout: 'main',

  data() {
    return {
      // Steps Data's
      formData: {
        setCarBrand: null,
        setCarModel: null,
        setCarUse: 1,
        setCarBuildCountry: 1,
        setCarYear: null,
        setCarPrice: null,
        thirdpartyDis: null,
        thirdpartyCompany: null,
        carBodyDis: null,
        carBodyCompany: null,
        setCarBodyIns: null,
        setCarIsNew: null,
        carbodyEndofDate: null,
      },
      // Vuelidate Validation Rules
      validationRules: [
        { setCarBrand: { required } },
        { setCarModel: { required } },
        { setCarUse: { required } },
        { setCarBuildCountry: { required }, setCarYear: { required } },
        { setCarPrice: { required } },
        { thirdpartyDis: { required }, thirdpartyCompany: { required } },
        {
          carBodyDis: { required },
          carBodyCompany: { required },
          carbodyEndofDate: { required },
        },
      ],

      // Main Data's
      carbrand: null,
      carBrandName: null,
      carBrandNameLatin: null,
      carmodelName: null,
      carmodelNameLatin: null,
      carbuildyear: null,
      CarPrice: null,
      CarAccesoriesPrice: null,
      setCarAccesoriesPrice: 0,
      thirdpartyDiscount: null,
      thirdpartyCompany: null,
      carBodyDiscount: 0,

      // Middle Data's
      selectedBrand: {},
      selectedBrandId: 0,
      selectedModelId: 0,
      setcarBuildCountryClicked: 0,
      carBuildCountryClickedId: 1,

      CarIsNew: false,
      carbodyEndofDate: null,
      hasPreviousPolicy: false,
      yearsWithoutIncident: 0,
      setCarTypeUseId: 1,
      activeClass: null,
      carPvalue: null,

      setCarBodyInsId: 4,

      coverChemical: false,
      coverGlassBreak: false,
      coverNaturalDisasters: false,
      coverTransportation: false,
      coverPriceFluctuation: false,
      coverTheftOfParts: false,

      carBrandSearch: '',
      carModelSearch: '',
      carYearSearch: '',
      companySearch: '',

      suffix: ' تومان',
      prefix: null,
      lastTab: 0,
      carIsIrani: 'irani',
      setCarTypeUseClicked: 'passenger',
      carBuildCountry: [
        { id: 1, title: 'خودرو داخلی', value: 'irani' },
        { id: 2, title: 'خودرو وارداتی', value: 'out' },
      ],
      carTypeUse: [
        { id: 1, title: 'سواری', value: 'passenger' },
        { id: 2, title: 'آژانس', value: 'taxi' },
      ],
      carBodyIns: [
        { id: 1, title: 'دارای بیمه بدنه قبلی', value: 'yes' },
        { id: 2, title: 'فاقد بیمه بدنه', value: 'no' },
        { id: 3, title: 'صفر کیلومتر', value: 'zero' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      getCarBrand: 'car/getBodyInsCarTypes',
      carBuildYears: 'carBuildYearShList',
      carThirdDiscounts: 'carThirdDiscountList',
      carBodyDiscountOptions: 'carBodyDiscountList',
      carDriverDiscounts: 'carDriverDiscountList',
      companyName: 'insCompanyName',
    }),
    carBuildItems() {
      const years = this.$misc.cloneDeep(this.carBuildYears)
      return years.sort((a, b) => b.value - a.value)
    },
    carBrandFilter() {
      if (this.carBrandSearch) {
        return this.getCarBrand.filter((item) => {
          return this.carBrandSearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.getCarBrand
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
  },
  watch: {
    lastTab() {
      store.setLastTab(this.lastTab)
    },
    carBrandName() {
      store.setcarbrandsName(this.carBrandName)
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
    deep: true,
  },
  methods: {
    selectBrandName(name) {
      this.carBrandName = name
      console.log(this.carBrandName) // eslint-disable-line
    },
    selectBrandLatinName(name) {
      this.carBrandNameLatin = name
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
      this.formData.setCarModel = item
    },
    selectCarModel(item) {
      this.carmodelName = item
      console.log(this.carmodelName) // eslint-disable-line
    },
    selectCarYear(item) {
      this.carbuildyear = item
      console.log(this.carbuildyear) // eslint-disable-line
    },
    selectCarPrice() {
      this.CarPrice = parseCurrency(this.formData.setCarPrice).value
    },
    selectAccessoriesPrice() {
      this.setCarAccesoriesPrice = parseCurrency(this.CarAccesoriesPrice).value
    },
    disThirdPartyStep(name) {
      if (this.formData.thirdpartyDis && this.formData.thirdpartyCompany) {
        this.thirdpartyDiscount = this.formData.thirdpartyDis
        this.thirdpartyCompany = this.formData.thirdpartyCompany
        console.log(this.thirdpartyDiscount, this.thirdpartyCompany) // eslint-disable-line
        return this.$refs.formwizard.nextTab()
      }
    },
    changeLTabTrue(event) {
      this.lastTab = 1
      this.$router.push({
        path: `/compare/car-body/?car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_usage=${this.setCarTypeUseClicked}&car_is_irani=${this.carIsIrani}&car_production_year=${this.formData.setCarYear}&car_value=${this.CarPrice}&car_accessories_value=${this.setCarAccesoriesPrice}&thirdpartyCompany=${this.thirdpartyCompany}&thirdpartyDis=${this.thirdpartyDiscount}`,
      })
    },
    changeLTabTrue1(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.step1}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/car-body/?car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_usage=${this.setCarTypeUseClicked}&car_is_irani=${this.carIsIrani}&car_production_year=${this.formData.setCarYear}&car_value=${this.CarPrice}&car_accessories_value=${this.setCarAccesoriesPrice}&thirdpartyCompany=${this.thirdpartyCompany}&thirdpartyDis=${this.thirdpartyDiscount}&car_is_new=${this.CarIsNew}`,
      })
    },
    changeLTabTrue2(event) {
      this.lastTab = 1
      this.$router.push({
        // path: `/compare/thirdparty/?car_type=${this.storeState.step1}&car_brand=${this.storeState.step2}&car_model=${this.storeState.step3}&car_build_year=${this.storeState.step4}`,
        path: `/compare/car-body/?car_brand=${this.selectedBrandId}&car_model=${this.selectedModelId}&car_usage=${this.setCarTypeUseClicked}&car_is_irani=${this.carIsIrani}&car_production_year=${this.formData.setCarYear}&car_value=${this.CarPrice}&car_accessories_value=${this.setCarAccesoriesPrice}&thirdpartyCompany=${this.thirdpartyCompany}&thirdpartyDis=${this.thirdpartyDiscount}&lastBodyInsCompany=${this.lastBodyInsCompany}&carBodyDiscount=${this.carBodyDiscount}&carbodyEndofDate=${this.carbodyEndofDate}`,
      })
    },

    lastTabGotoNextPage() {
      if (this.formData.carBodyCompany && this.formData.carBodyDis && this.formData.carbodyEndofDate) {
        return this.changeLTabTrue2()
      }
    },

    carBuildCountryClicked(item) {
      this.setcarBuildCountryClicked = item
      this.carIsIrani = item
    },
    carBuildCountryItemId(id) {
      this.carBuildCountryClickedId = id
      this.formData.setCarBuildCountry = id
      // this.carIsIrani = id.value
    },
    carBodyInsId(item) {
      this.setCarBodyInsId = item
      if (item === 2) {
        this.changeLTabTrue()
      } else if (item === 1) {
        this.formData.setCarBodyIns = 'yes'
        this.setHasPrivacyPolicy()
      } else if (item === 3) {
        this.changeLTabTrue1()
        this.setCarIsNew()
      }
    },
    carTypeUseItemClicked(item) {
      this.setCarTypeUseClicked = item
      this.formData.setCarUse = item
    },
    carTypeUseItemId(id) {
      this.setCarTypeUseId = id
    },
    setCarIsNew() {
      this.CarIsNew = true
    },
    setHasPrivacyPolicy() {
      this.hasPreviousPolicy = true
    },
    selectLastCompany() {
      this.lastBodyInsCompany = this.formData.carBodyCompany
    },
    selectYearsIncident() {
      this.carBodyDiscount = this.formData.carBodyDis
    },
    selectCarbodyDate() {
      this.carbodyEndofDate = this.formData.carbodyEndofDate
    },

    changeLTabFalse(event) {
      this.lastTab = 0
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
  },
}
</script>
<style>
.danger_ {
  margin: 35px 140px;
}
</style>
