<template>
  <div>
    <form-wizard
      ref="formwizard"
      @onComplete="onComplete"
      @onNextStep="nextStep"
      @onPreviousStep="previousStep"
      @onReset="reset"
    >
      <tab-content title="نوع بیمه نامه جهت دریافت خسارت را مشخص کنید">
        <div class="cal-12 ins_select d-flex">
          <steps-botton-select
            v-for="(item, index) in insSelect"
            :key="item.id"
            for="carbodyins"
            :title="item.title"
            :class="[(index === 0) & (setInsClicked === 0) ? 'active_' : '']"
            :selected="item.id === setInsClicked.id"
            @click.native="insItemClicked(item), insItemId(item.id)"
            @change="$refs.formwizard.nextTab()"
          />
        </div>
        <div class="inss_warning">
          پرداخت آنلاین خسارت تنها برای کاربرانی که سفارش فعال در علی‌بیمه دارند
          قابل استفاده است
        </div>
      </tab-content>
      <tab-content title="مقصر حادثه را مشخص کنید">
        <div class="cal-12 ins_select d-flex">
          <steps-botton-select
            v-for="(item, index) in damageSelect"
            :key="item.id"
            for="carbodyins"
            :title="item.title"
            :class="[(index === 0) & (setdamageClicked === 0) ? 'active_' : '']"
            :selected="item.id === setdamageClicked.id"
            @click.native="damageItemClicked(item), damageItemId(item.id)"
            @change="$refs.formwizard.nextTab()"
          />
        </div>
        <div class="inss_warning">
          پرداخت آنلاین خسارت تنها برای کاربرانی که سفارش فعال در علی‌بیمه دارند
          قابل استفاده است
        </div>
      </tab-content>
      <tab-content title="شرکت بیمه مقصر حادثه را انتخاب کنید">
        <div class="form-group">
          <div class="grid-view">
            <div class="scrollbar scrollbar-primary ml-1">
              <item-clickable
                v-for="item in companyList"
                :key="item.companyList"
                v-model="companyList"
                for="companyList"
                :title="item.companyName"
                :src="item.icon"
                :selected="item.companyId === selectCompanyID"
                @click.native="
                  selectCompany(item),
                    selectCoID(item.companyId),
                    $refs.formwizard.nextTab()
                "
              />
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content>
        <div class="form-group">
          <div class="inss_warning">
            شما در حال حاضر بیمه شخص ثالث فعالی در سامانه علی‌بیمه ندارید.
          </div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import FormWizard from '@/components/car-items/FormWizardComp'
import TabContent from '@/components/car-items/TabContent'
import ValidationHelper from '@/components/ValidationHelper'
import StepsBottonSelect from '@/components/base/StepsBottonSelect'
import ItemClickable from '@/components/car-items/ItemClickable'

export default {
  layout: 'other-pages',
  components: {
    FormWizard,
    TabContent,
    StepsBottonSelect,
    ItemClickable,
  },
  mixins: [ValidationHelper],
  data() {
    return {
      formData: {
        setInsSelect: null,
        setDamageSelect: null,
        setCompanyList: null,
      },
      validationRules: [
        { setInsSelect: { required } },
        { setDamageSelect: { required } },
        { setCompanyList: { required } },
      ],
      insSelect: [
        { id: 1, title: 'بیمه شخص ثالث' },
        { id: 2, title: 'بیمه بدنه خودرو' },
      ],
      damageSelect: [
        { id: 1, title: 'مقصر هستم' },
        { id: 2, title: 'زیان دیده هستم' },
      ],
      setInsClicked: 0,
      insClickedId: 1,
      setdamageClicked: 0,
      damageClickedId: 0,

      selectCompanyID: null,
      inscompanyname: null,
    }
  },
  computed: {
    ...mapGetters({
      companyList: 'company/companyList',
    }),
  },
  methods: {
    nextStep() {
      // eslint-disable-line
    },

    previousStep() {
      // alert("On Previous Step");
    },
    reset() {
      for (const field in this.formData) {
        this.formData[field] = null
      }
    },
    onComplete() {
      this.$refs.formwizard.changeStatus()
    },
    insItemClicked(item) {
      this.setInsClicked = item
      this.formData.setInsSelect = item
    },
    insItemId(id) {
      this.insClickedId = id
    },
    damageItemClicked(item) {
      this.setdamageClicked = item
      this.formData.setInsSelect = item
    },
    damageItemId(id) {
      this.damageClickedId = id
    },
    selectCoID(item) {
      this.selectCompanyID = item
      console.log(item) // eslint-disable-line
    },
    selectCompany(item) {
      this.formData.setCompanyList = item
      this.inscompanyname = item.companyName
      console.log(this.inscompanyname) // eslint-disable-line
    },
  },
}
</script>
<style scoped>
.ins_select {
  padding: 0px 377px;
}
.inss_warning {
  padding: 20px;
  text-align: center;
}
</style>
