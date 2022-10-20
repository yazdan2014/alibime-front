<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="checkout"
      v-model="visible"
      hide-header
      hide-footer
      size="lg"
    >
      <div class="checkout_form">
        <div class="ch__data p-3">
          <div class="ch___tables">
            <table class="company_detail table_root">
              <thead class="table_header">
                <tr class="table_row">
                  <th
                    class="table_cell table_cell_head tb__title"
                    scope="col"
                    colspan="2"
                  >
                    اطلاعات بیمه {{ companyname }}
                  </th>
                </tr>
              </thead>
              <tbody class="table_body">
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">حق بیمه</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    <vue-numeric
                      :value="finalprice"
                      separator=","
                      read-only
                    ></vue-numeric>
                    تومان
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">
                    مدت بیمه نامه
                  </td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    یک ساله
                  </td>
                </tr>
                <tr v-if="coversStatus" class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">پوشش ها</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    <span v-if="coverchemical">{{ coverchemical_ }} ,</span>
                    <span v-if="coverglassbreak">{{ coverglassbreak_ }} ,</span>
                    <span v-if="covernaturaldisasters"
                      >{{ covernaturaldisasters_ }} ,</span
                    >
                    <span v-if="coverTheftOfPart"
                      >{{ covertheftofparts_ }} ,</span
                    >
                    <span v-if="coverpricefluctuation"
                      >{{ coverPriceFluctuation_ }} ,</span
                    >
                    <span v-if="covertransportation"
                      >{{ covertransportation_ }} ,</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="company_detail table_root">
              <thead class="table_header">
                <tr class="table_row">
                  <th
                    class="table_cell table_cell_head tb__title"
                    scope="col"
                    colspan="2"
                  >
                    مشخصات خودرو
                  </th>
                </tr>
              </thead>
              <tbody class="table_body">
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">شرکت بیمه</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ companyname }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">برند خودرو</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ carbrand }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">مدل خودرو</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ carmodel }}
                  </td>
                </tr>

                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">نوع کاربری</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ cartype }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">
                    اصالت خودرو
                  </td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ carisirani }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">سال تولید</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ carbuildyear }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">ارزش خودرو</td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    <vue-numeric
                      :value="carvalue"
                      separator=","
                      read-only
                    ></vue-numeric>
                    تومان
                  </td>
                </tr>

                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">
                    شرکت بیمه گر ثالث
                  </td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ thirdpartycompany }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">
                    درصد تخفیف ثالث
                  </td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ thirdpartyDis }}
                  </td>
                </tr>
                <tr class="table_row tb__data">
                  <td class="table_cell table_cell_body tb_data">
                    تخفیف بیمه قبلی
                  </td>
                  <td
                    class="table_cell table_cell_body table_cell_left tb_data"
                  >
                    {{ carbodydis }}
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
  props: {
    insprice: {
      type: String,
      required: false,
      default: '',
    },
    insterm: {
      type: String,
      required: false,
      default: '',
    },
    inspropertydamage: {
      type: String,
      required: false,
      default: '11٫000٫000',
    },
    companyname: {
      type: String,
      required: false,
      default: '',
    },
    carbrand: {
      type: String,
      required: false,
      default: '',
    },
    carbuildyear: {
      type: String,
      required: false,
      default: '',
    },
    cartype: {
      type: String,
      required: false,
      default: '',
    },
    carmodel: {
      type: String,
      required: false,
      default: '',
    },
    cartid: {
      type: Number,
      required: false,
      default: 1,
    },
    carbid: {
      type: Number,
      required: false,
      default: 1,
    },
    carmid: {
      type: Number,
      required: false,
      default: 1,
    },
    basePropertyDamage: {
      type: Number,
      required: false,
      default: 1,
    },
    carisirani: {
      type: String,
      required: false,
      default: '',
    },
    thirdpartycompany: {
      type: String,
      required: false,
      default: '',
    },
    thirdpartydiscount: {
      type: Number,
      default: 0,
    },
    lastcarbodycompany: {
      type: String,
      required: false,
      default: '',
    },
    carbodydiscount: {
      type: Number,
      default: 0,
    },

    finalprice: { type: Number, required: false, default: 1 },
    carvalue: { type: Number, default: 1 },
    maaliat: { type: Number, default: 1 },
    whithoutmaaliat: { type: Number, default: 1 },
    coversprice: { type: Number, default: 1 },

    coverchemical: Boolean,
    coverglassbreak: Boolean,
    covertransportation: Boolean,
    coverpricefluctuation: { type: Number, default: 0 },
    coverTheftOfPart: { type: Number, default: 0 },
    covernaturaldisasters: Boolean,
  },
  data() {
    return {
      visible: false,
      loading: false,
      coverchemical_: 'پاشیدن مواد شیمیایی',
      coverglassbreak_: 'شکست شیشه',
      covertransportation_: 'ایاب و ذهاب',
      coverpricefluctuation_: 'نوسانات ارزش',
      covertheftofparts_: 'سرقت درجا',
      covernaturaldisasters_: 'حوادث طبیعی',
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      info: 'auth/getInfo',
    }),

    // cartypeName() {
    //   if (this.cartype === 'passenger') return 'سواری'
    //   if (this.cartype === 'taxi') return 'تاکسی'
    //   return 'نامشخص'
    // },
    // carirani() {
    //   if (this.carisirani === 'irani') return 'تولید داخل'
    //   if (this.carisirani === 'out') return 'وارداتی'
    //   return 'نامشخص'
    // },
    thirdpartyDis() {
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
    carbodydis() {
      if (this.carbodydiscount === 1) return '۱ سال'
      if (this.carbodydiscount === 2) return '۲ سال'
      if (this.carbodydiscount === 3) return '۳ سال'
      if (this.carbodydiscount === 4) return '۴ سال'
      if (this.carbodydiscount === 5) return '۵ سال'
      if (this.carbodydiscount === 6) return '۶ سال'
      if (this.carbodydiscount === 7) return '۷ سال و بیشتر'
      return 'بدون تخفیف'
    },
    coversStatus() {
      if (
        this.coverchemical ||
        this.coverglassbreak ||
        this.covertransportation ||
        this.coverpricefluctuation ||
        this.coverTheftOfPart ||
        this.covernaturaldisasters
      ) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    completeOrder() {
      const data = {
        company: this.companyname,
        status: 11,
        insType: 'بیمه بدنه',
        carTypeName: this.cartype,
        carBrandName: this.carbrand,
        carModelName: this.carmodel,
        carBuildYear: this.carbuildyear,
        carValue: this.carvalue,
        orderPrice: this.finalprice,
        insCycleTime: 12,
        carisIrani: this.carisirani,
        thirdPartyCompany: this.thirdpartycompany,
        thirdPartyDiscount: this.thirdpartyDis,
        lastCarBodyCompany: this.lastcarbodycompany,
        carBodyDiscount: this.carbodydis,
        coverChemical: this.coverchemical,
        coverGlassBreak: this.coverglassbreak,
        coverNaturalDisasters: this.covernaturaldisasters,
        coverTransportation: this.covertransportation,
        coverPriceFluctuation: this.coverpricefluctuation,
        coverTheftOfParts: this.coverTheftOfParts,
        maaliat: this.maaliat,
        whithoutMaaliat: this.whithoutmaaliat,
        coversPrice: this.coversprice,
      }
      this.addOrder(data)
    },
    addOrder(data) {
      this.loading = true
      this.$store.dispatch('orders/carBodyAddOrder', data).then((result) => {
        // eslint-disable-next-line
        console.log(
          'سفارش بیمه شما با موفقیت اضافه گردید. میتونید از طریق پنل کاربری سفارش خود را پیگیری کنید'
        )
        this.loading = false
        this.$router.push({
          path: `/complete/car-body/?order_id=${result._id}`,
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
.accept_btn {
  background-color: #08bcc0;
  display: inline-block;
}
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
