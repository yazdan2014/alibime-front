<template>
  <div class="compare-page">
    <div class="container">
      <div class="compare">
        <div class="stepper_horizontal"></div>
        <div class="ins-step-box">
          <div class="compare_header">
            <div class="d-flex align-items-center">
              <h1 class="compare_title">بیمه آتش سوزی</h1>
              <ul class="steps_data">
                <li class="step-item d-flex">
                  <div class="step-link">
                    <span class="tabStatus">نوع ساختمان: </span>
                    <span v-if="buildingType === 'apartment'" class="tabLabel">مجتمع</span>
                    <span v-if="buildingType === 'house'" class="tabLabel">ویلایی</span>
                    <span v-if="buildingType === 'single-apartment'" class="tabLabel">آپارتمانی</span>
                  </div>
                  <div class="step-link">
                    <span class="tabStatus">نوع سازه: </span>
                    <span v-if="buildingStructureType === 'concrete'" class="tabLabel">بتنی</span>
                    <span v-if="buildingStructureType === 'iron'" class="tabLabel">فلزی</span>
                    <span v-if="buildingStructureType === 'brick'" class="tabLabel">آجری</span>
                  </div>
                  <div class="step-link">
                    <span class="tabStatus">سال ساخت: </span>
                    <span class="tabLabel">{{ buildingProductionYear }}</span>
                  </div>
                  <div class="step-link">
                    <span class="tabStatus">متراژ: </span>
                    <span class="tabLabel">{{ buildingMeter }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="change_data">ویرایش اطلاعات</div>
          </div>
          <div class="row compare_content">
            <div class="col-md-12 compare_company">
              <div class="table_header d-none d-md-block">
                <div class="th_items">
                  <div class="th__item"><span> شرکت بیمه</span></div>
                  <div class="th__item"><span>شعب پرداخت</span></div>
                  <div class="th__item">
                    <span id="item1">رتبه رضایتمندی</span>
                    <b-tooltip
                      target="item1"
                      placement="bottom"
                      title="رتبه‌ای که شرکت‌ بیمه در کیفیت پرداخت خسارت به مشتریان، کسب کرده‌ است."
                    ></b-tooltip>
                  </div>
                  <div class="th__item"><span>توانگری مالی</span></div>
                  <div class="th__item"><span>سرعت پاسخگویی</span></div>
                  <div class="th__item"><span>قیمت</span></div>
                </div>
              </div>
              <div class="company_list">
                <div class="company_cards">
                  <div id="سینا" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\4.png" alt="سینا" />
                            <div class="company__title">
                              <span>سینا</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-03.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-02.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button step-button-next" @click.stop="onRunCheckoutModal">سفارش</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="سرمد" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\20.png" alt="سرمد" />
                            <div class="company__title">
                              <span>سرمد</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-04.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-04.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button btn__disable step-button-next">بزودی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ایران" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\7.png" alt="ایران" />
                            <div class="company__title">
                              <span>ایران</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-05.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-01.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button btn__disable step-button-next">بزودی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="سامان" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\19.png" alt="سامان" />
                            <div class="company__title">
                              <span>سامان</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-04.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-04.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button btn__disable step-button-next">بزودی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ما" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\10.png" alt="ما" />
                            <div class="company__title">
                              <span>ما</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-04.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-04.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button btn__disable step-button-next">بزودی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="معلم" class="company_card d-none d-md-block">
                    <div class="company_card_content">
                      <div class="card__content">
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="card_company_logo" src="\resource\img\company\13.png" alt="معلم" />
                            <div class="company__title">
                              <span>معلم</span>
                            </div>
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">39</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">5</div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img src="\resource\img\icons\quality\q-04.svg" alt="quality" />
                          </div>
                        </div>
                        <div class="card_item_body">
                          <div class="card_item">
                            <img class="timer" src="\resource\img\icons\timer\timer-04.svg" alt="timer" />
                          </div>
                        </div>

                        <div class="card_item_body">
                          <div class="card_item company__price">
                            <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                            <span class="currency-prefix">تومان</span>
                          </div>
                          <div class="step-button btn__disable step-button-next">بزودی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-2 sidebar"></div> -->
          </div>
        </div>
      </div>
    </div>
    <check-modal ref="checkout"></check-modal>
  </div>
</template>
<script>
import VueNumeric from 'vue-numeric'
export default {
  layout: 'other-pages',
  components: {
    CheckModal: () => import('@/components/fire-insurance/CheckoutModal'),
    VueNumeric,
  },
  data() {
    return {
      buildingType: null,
      buildingStructureType: null,
      buildingProductionYear: null,
      buildingMeter: null,
      buildingPropertiesValue: null,
      buildingPricePerMeter: '1000000',
      coverTheftByBreak: false,
      coverPipeBreak: false,
      coverSubsidenceLandslide: false,
      coverEarthquake: false,
      coverRainSnowDamage: false,
      coverFlood: false,
      coverStorm: false,
      coverAvalanche: false,
      coverHeavySnow: false,
      company_name: 'سینا',
      ins_status: 'فاقد بیمه نامه قبلی',

      finalPrice: 0,
    }
  },

  mounted() {
    this.buildingType = this.$route.query.building_type
    this.buildingStructureType = this.$route.query.structure_type
    this.buildingProductionYear = this.$route.query.production_year
    this.buildingMeter = this.$route.query.building_meter
    this.buildingPropertiesValue = this.$route.query.properties_value
    this.coverTheftByBreak = this.$route.query.cover_theft_break
    this.coverPipeBreak = this.$route.query.cover_pipe_break
    this.coverSubsidenceLandslide = this.$route.query.cover_subsidence_landslide
    this.coverEarthquake = this.$route.query.cover_earthquake
    this.coverRainSnowDamage = this.$route.query.cover_rain_snow_damage
    this.coverFlood = this.$route.query.cover_flood
    this.coverStorm = this.$route.query.cover_storm
    this.coverAvalanche = this.$route.query.cover_avalanche
    this.coverHeavySnow = this.$route.query.cover_heavy_snow

    this.getApiData()
  },
  methods: {
    getData(data) {
      this.$store.dispatch('offers/getFireInsOffer', data).then((result) => {
        this.finalPrice = result
      })
    },
    getApiData() {
      const data = {
        buildingType: this.buildingType,
        buildingStructureType: this.buildingStructureType,
        buildingProductionYear: this.buildingProductionYear,
        buildingPricePerMeter: this.buildingPricePerMeter,
        buildingMeter: this.buildingMeter,
        buildingPropertiesValue: this.buildingPropertiesValue,
        coverTheftByBreak: this.coverTheftByBreak,
        coverPipeBreak: this.coverPipeBreak,
        coverSubsidenceLandslide: this.coverSubsidenceLandslide,
        coverEarthquake: this.coverEarthquake,
        coverRainSnowDamage: this.coverRainSnowDamage,
        coverFlood: this.coverFlood,
        coverStorm: this.coverStorm,
        coverAvalanche: this.coverAvalanche,
        coverHeavySnow: this.coverHeavySnow,
      }
      this.getData(data)
    },
    // getRouteData() {
    //   this.buildingType = this.$route.query.building_type
    //   this.buildingStructureType = this.$route.query.structure_type
    //   this.buildingProductionYear = this.$route.query.production_year
    //   this.buildingMeter = this.$route.query.building_meter
    //   this.buildingPropertiesValue = this.$route.query.properties_value
    //   this.coverTheftByBreak = this.$route.query.cover_theft_break
    //   this.coverPipeBreak = this.$route.query.cover_pipe_break
    //   this.coverSubsidenceLandslide = this.$route.query.cover_subsidence_landslide
    //   this.coverEarthquake = this.$route.query.cover_earthquake
    //   this.coverRainSnowDamage = this.$route.query.cover_rain_snow_damage
    //   this.coverFlood = this.$route.query.cover_flood
    //   this.coverStorm = this.$route.query.cover_storm
    //   this.coverAvalanche = this.$route.query.cover_avalanche
    //   this.coverHeavySnow = this.$route.query.cover_heavy_snow
    // },
    onRunCheckoutModal() {
      this.$refs.checkout.showModal()
    },
  },
}
</script>
<style scoped>
.company__price {
  display: contents !important;
}
</style>
