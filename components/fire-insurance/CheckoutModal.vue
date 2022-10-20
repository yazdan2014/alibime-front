<template>
  <div>
    <b-modal id="modal-prevent-closing" ref="checkout" v-model="visible" hide-header hide-footer size="lg">
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables">
            <table class="company_detail table_root">
              <thead class="table_header">
                <tr class="table_row">
                  <th class="table_cell table_cell_head tb__title" scope="col" colspan="2">اطلاعات بیمه {{ companyname }}</th>
                </tr>
              </thead>
              <tbody class="table_body">
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">حق بیمه</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    <vue-numeric :value="finalprice" separator="," read-only></vue-numeric>
                    تومان
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">مدت بیمه نامه</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">یک ساله</td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">حداکثر تعهد مالی</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">{{ basepropertydamage }},000,000 تومان</td>
                </tr>
              </tbody>
            </table>
            <table class="company_detail table_root">
              <thead class="table_header">
                <tr class="table_row">
                  <th class="table_cell table_cell_head tb__title" scope="col" colspan="2">مشخصات خودرو</th>
                </tr>
              </thead>
              <tbody class="table_body">
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">مدل خودرو</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">{{ carbrand }} {{ carmodel }}</td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">سال تولید</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ carbuildyear }}
                  </td>
                </tr>

                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">وضعیت بیمه نامه</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ carinsstatus }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">تخفیف بیمه نامه قبلی</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ thirdpartyDis }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">تخفیف حوادث راننده</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ driverDiscount }}
                  </td>
                </tr>
                <tr v-if="financialdamage > 1" class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">خسارت مالی</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ FinancialDamages }}
                  </td>
                </tr>
                <tr v-if="lifedamage > 1" class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">خسارت جانی</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ LifeDamages }}
                  </td>
                </tr>
                <tr v-if="havadesdamage > 1" class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">خسارت حوادث راننده</td>
                  <td class="table_cell table_cell_body table_cell_left tb_data">
                    {{ DriverLifeDamages }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="ch__footer">
            <div v-if="isAuthenticated">
              <div class="accept_btn step-button" @click.stop="completeOrder()">
                <span v-if="loading == false">تایید و ثبت اطلاعات</span>
                <b-spinner v-show="loading" small type="grow"></b-spinner>
              </div>
            </div>
            <div v-if="!isAuthenticated">
              <div class="accept_btn step-button" @click.stop="registerAndGo()">
                <span v-if="loading == false">ثبت نام و ادامه</span>
                <b-spinner v-show="loading" small type="grow"></b-spinner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <auth-modal ref="modal"></auth-modal>
  </div>
</template>
<script>
import VueNumeric from 'vue-numeric'
import { mapGetters } from 'vuex'
export default {
  components: {
    VueNumeric,
    AuthModal: () => import('@/components/AuthModal'),
  },
  data() {
    return {
      visible: false,
      loading: false,
    }
  },
  props: {
    lastpolicystartdate: { type: String, required: false, default: '' },
    lastpolicyexpdate: { type: String, required: false, default: '' },
    driverDis: {
      type: String,
      required: false,
      default: '',
    },
    thirdpartydiscount: {
      type: String,
      required: false,
      default: '',
    },
    companyname: {
      type: String,
      required: false,
      default: '',
    },
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
    carbuildyear: {
      type: String,
      required: false,
      default: '',
    },
    carinsstatus: {
      type: String,
      required: false,
      default: '',
    },
    basepropertydamage: { type: Number, required: false, default: 1 },
    finalprice: { type: Number, required: false, default: 1 },
    maaliat: { type: Number, default: 1 },
    whithoutmaaliat: { type: Number, default: 1 },
    finalbaseproperty: { type: Number, required: false, default: 1 },
    havadesfinal: { type: Number, required: false, default: 1 },
    jarimedirkard: { type: Number, required: false, default: 1 },
    jarimedirkardday: { type: Number, required: false, default: 1 },
    financialdamage: { type: Number, required: false, default: 1 },
    lifedamage: { type: Number, required: false, default: 1 },
    havadesdamage: { type: Number, required: false, default: 1 },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
    }),
    LifeDamages() {
      if (this.lifedamage === 2) return 'یک بار خسارت جانی'
      if (this.lifedamage === 3) return 'دو بار خسارت جانی'
      if (this.lifedamage === 4) return 'سه بار خسارت جانی و یا بیشتر'
      return 'فاقد خسارت جانی'
    },
    FinancialDamages() {
      if (this.financialdamage === 2) return 'یک بار خسارت مالی'
      if (this.financialdamage === 3) return 'دو بار خسارت مالی'
      if (this.financialdamage === 4) return 'سه بار خسارت مالی و یا بیشتر'
      return 'فاقد خسارت مالی'
    },
    DriverLifeDamages() {
      if (this.havadesdamage === 2) return 'یک بار خسارت حوادث راننده'
      if (this.havadesdamage === 3) return 'دوبار خسارت حوادث راننده'
      if (this.havadesdamage === 4) return 'سه بار خسارت حوادث راننده و یا بیشتر'
      return 'فاقد خسارت حوادث راننده'
    },
    thirdpartyDis() {
      if (this.thirdpartydiscount === 0.05) return '5 درصد'
      if (this.thirdpartydiscount === 0.1) return '10 درصد'
      if (this.thirdpartydiscount === 0.15) return '15 درصد'
      if (this.thirdpartydiscount === 0.2) return '20 درصد'
      if (this.thirdpartydiscount === 0.25) return '25 درصد'
      if (this.thirdpartydiscount === 0.3) return '30 درصد'
      if (this.thirdpartydiscount === 0.35) return '35 درصد'
      if (this.thirdpartydiscount === 0.4) return '40 درصد'
      if (this.thirdpartydiscount === 0.45) return '45 درصد'
      if (this.thirdpartydiscount === 0.5) return '50 درصد'
      if (this.thirdpartydiscount === 0.55) return '55 درصد'
      if (this.thirdpartydiscount === 0.6) return '60 درصد'
      if (this.thirdpartydiscount === 0.65) return '65 درصد'
      if (this.thirdpartydiscount === 0.7) return '70 درصد'
      return 'بدون تخفیف'
    },
    driverDiscount() {
      if (this.driverDis === 0.05) return '5 درصد'
      if (this.driverDis === 0.1) return '10 درصد'
      if (this.driverDis === 0.15) return '15 درصد'
      if (this.driverDis === 0.2) return '20 درصد'
      if (this.driverDis === 0.25) return '25 درصد'
      if (this.driverDis === 0.3) return '30 درصد'
      if (this.driverDis === 0.35) return '35 درصد'
      if (this.driverDis === 0.4) return '40 درصد'
      if (this.driverDis === 0.45) return '45 درصد'
      if (this.driverDis === 0.5) return '50 درصد'
      if (this.driverDis === 0.55) return '55 درصد'
      if (this.driverDis === 0.6) return '60 درصد'
      if (this.driverDis === 0.65) return '65 درصد'
      if (this.driverDis === 0.7) return '70 درصد'
      return 'بدون تخفیف'
    },
  },

  methods: {
    completeOrder() {
      console.log(this.lastPolicyStartDate)
      const data = {
        status: 11,
        company: this.companyname,
        insType: 'شخص ثالث',
        carTypeName: this.cartype,
        carBrandName: this.carbrand,
        carModelName: this.carmodel,
        carBuildYear: this.carbuildyear,
        orderPrice: this.finalprice,
        insCycleTime: 12,
        basePropertyDamage: this.basepropertydamage,
        insStatus: this.carinsstatus,
        maaliat: this.maaliat,
        whithoutMaaliat: this.whithoutmaaliat,
        DisThirdparty: this.thirdpartydiscount,
        DisDriver: this.driverDis,
        finalBaseProperty: this.finalbaseproperty,
        lastPolicyStartDate: this.lastpolicystartdate,
        lastPolicyExpDate: this.lastpolicyexpdate,
        havadesFinal: this.havadesfinal,
        jarimeDirkard: this.jarimedirkard,
        jarimeDirkardDay: this.jarimedirkardday,
        financialDamage: this.FinancialDamages,
        lifeDamage: this.LifeDamages,
        havadesDamage: this.DriverLifeDamages,
      }
      this.addOrder(data)
    },
    addOrder(data) {
      this.loading = true
      this.$store.dispatch('orders/addOrder', data).then((result) => {
        // eslint-disable-next-line
        console.log('سفارش بیمه شما با موفقیت اضافه گردید. میتونید از طریق پنل کاربری سفارش خود را پیگیری کنید')
        this.loading = false
        this.$router.push({
          path: `/complete/thirdparty/?order_id=${result._id}`,
        })
      })
    },
    registerAndGo() {
      this.visible = false
      setTimeout(() => {
        this.$refs.modal.showModal()
      }, 500)
    },
    showModal() {
      this.visible = true
    },
  },
}
</script>
<style scoped>
.tb__data:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.04);
}
.table_cell_body {
  color: #000;
}
.table_cell_left {
  text-align: left !important;
  flex-direction: row-reverse;
}
.tb_data {
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 400;
}
.table_body {
  display: table-row-group;
}
.company_detail {
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 1px;
  margin-bottom: 24px;
}
.table_root {
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
}
.table_header {
  display: table-header-group;
}
.tabel_row {
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
}
.tb__title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  width: 100%;
  padding: 6px 16px;
  text-align: center !important;
  background-color: #08bcc0;
}
.table_cell_head {
  color: #fff;
  font-weight: 600;
  line-height: 1.5rem;
}
.table_cell {
  display: table-cell;
  padding: 10px 20px;
  font-size: 1rem;
  text-align: right;
  font-weight: 400;
  line-height: 1.43;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  vertical-align: inherit;
}
.ch__footer {
  text-align: center;
}
</style>
