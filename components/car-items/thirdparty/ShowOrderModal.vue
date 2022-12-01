<template>
  <div>
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
          </div>
        </div>
      </b-modal>
    </div>
    <!-- <b-modal id="modal-prevent-closing" ref="checkout" v-model="visible" hide-header hide-footer size="lg">
      <div class="ch__data">
        {{ order_info }}
      </div>
    </b-modal> -->
  </div>
</template>
<script>
import VueNumeric from 'vue-numeric'
export default {
  components: {
    VueNumeric,
  },
  data() {
    return {
      visible: false,
      loading: false,
      order_info: [],
      lastpolicystartdate: '',
      lastpolicyexpdate: '',
      driverDis: '',
      thirdpartydiscount: '',
      companyname: '',
      cartype: '',
      carbrand: '',
      carmodel: '',
      carbuildyear: '',
      carinsstatus: '',
      basepropertydamage: 0,
      finalprice: 0,
      maaliat: 0,
      whithoutmaaliat: 0,
      finalbaseproperty: 0,
      havadesfinal: 0,
      jarimedirkard: 0,
      jarimedirkardday: 0,
      financialdamage: 0,
      lifedamage: 0,
      havadesdamage: 0,
    }
  },
  props: {
    // cartype: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    // carbrand: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    // carmodel: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
  },
  computed: {},
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
    getOrder(_id) {
      this.$store.dispatch('orders/getOrderbyID', _id).then((result) => {
        console.log(result)
        this.order_info = result
        // this.lastpolicystartdate = result.
        this.lastpolicyexpdate = result.lastPolicyExpDate
        // this.driverDis = result.
        // this.thirdpartydiscount = result.
        this.companyname = result.company
        this.cartype = result.carTypeName
        this.carbrand = result.carBrandName
        this.carmodel = result.carModelName
        this.carbuildyear = result.carBuildYear
        this.carinsstatus = result.insStatus
        this.basepropertydamage = result.basePropertyDamage
        this.finalprice = result.orderPrice
        this.maaliat = result.maaliat
        this.whithoutmaaliat = result.whithoutMaaliat
        this.finalbaseproperty = result.basePropertyDamage
        this.havadesfinal = result.havadesFinal
        // this.jarimedirkard = result.
        // this.jarimedirkardday = result.
        this.financialdamage = result.financialDamage
        this.lifedamage = result.lifeDamage
        this.havadesdamage = result.havadesDamage
      })
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
