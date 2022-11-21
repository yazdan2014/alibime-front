<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="step-header">
      <div class="container">
        <div class="compare">
          <div class="stepper_horizontal"></div>
          <div class="ins-step-box">
            <div class="card card-body mt-sm-7">
              <div class="d-flex align-items-center">
                <h1 class="col-2 compare_title fs-4 mb-0">بیمه شخص ثالث</h1>
                <div class="col-7 details d-flex text-bold">
                  <div class="detail_item">
                    <span class="tabLabel">{{ storeState.carTypeName }}</span>
                  </div>
                  <div class="detail_item">
                    <span class="tabLabel">{{ storeState.carBrandName }}</span>
                  </div>
                  <div class="detail_item">
                    <span class="tabLabel">{{ storeState.carModelName }}</span>
                  </div>
                  <div class="detail_item">
                    <span class="tabLabel">{{ car_production_year }}</span>
                  </div>
                </div>
                <div class="col-3 teqt-left">
                  <i class="fa fa-pencil-square-o me-1"></i>
                  <span type="button" data-toggle="modal" href="https://alibime.info/thirdparty" class="tabLabel" >ویرایش اطلاعات</span>
                  <!-- <span type="button" data-toggle="modal" data-target="#myModal" class="tabLabel" @click.stop="onRunEditModal">ویرایش اطلاعات</span> -->
                </div>
                <!-- <div class="d-flex"> 
                  <div class="step-link">
                    <div class="modal_button" @click="type_modal">
                      <span class="tabStatus">کاربری: </span>
                      <span class="tabLabel">{{ storeState.carTypeName }}</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-compact-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="step-link">
                    <div class="modal_button" @click="brand_modal">
                      <span class="tabStatus">برند: </span>
                      <span class="tabLabel">{{
                        storeState.carBrandName
                      }}</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-compact-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="step-link">
                    <div class="modal_button" @click="model_modal">
                      <span class="tabStatus">مدل: </span>
                      <span class="tabLabel">{{
                        storeState.carModelName
                      }}</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-compact-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="step-link">
                    <div class="modal_button" @click="year_modal">
                      <span class="tabStatus">سال ساخت: </span>
                      <span class="tabLabel">{{
                        storeState.yearSelected
                      }}</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-compact-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="step-link">
                    <div class="modal_button" @click="policy_modal">
                      <span class="tabStatus">وضعیت بیمه نامه: </span>
                      <span class="tabLabel">{{
                        storeState.PolicyStatusName
                      }}</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-compact-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="mt-sm-4 d-md-flex">
              <div class="col-md-2 card card-body" style="height: fit-content">
                <div class="inputProperty">
                  <div class="text-center">
                    <h4 class="fs-6">حداکثر تعهد مالی</h4>
                    <p>میزان جبران خسارت برای هر حادثه</p>
                  </div>
                  <!-- <label for="range-1"></label> -->
                  <div v-if="sliderValues && sliderValues.length" class="wrapper slider-range">
                    <!-- <custom-slider
                      v-model="basePropertyDamage"
                      min="10"
                      max="50"
                      step="1"
                      :values="sliderValues"
                      raising
                      @change="reload()"
                    /> -->
                    <b-form-group v-slot="{ ariaDescribedby }">
                      <b-form-radio-group
                        v-model="basePropertyDamage"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        :class="radio"
                        name="radios-stacked"
                        stacked
                        @change="reload()"
                      ></b-form-radio-group>
                    </b-form-group>
                  </div>
                  <div class="mt-2 sidebar_footer">
                    <span>تعهد مالی: {{ basePropertyDamage }} میلیون‌تومان</span>
                    <span>تعهدجانی: ۸۰۰میلیون‌تومان</span>
                    <span>تعهدراننده: ۶۰۰میلیون‌تومان</span>
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <b-overlay :show="loading" spinner-variant="primary" spinner-type="grow" spinner-small rounded="sm">
                  <div class="row compare_content">
                    <div class="table_header d-none d-md-block">
                      <div class="th_items">
                        <div class="th__item"><span>شرکت بیمه</span></div>
                        <div class="th__item"><span>شعب پرداخت</span></div>
                        <div class="th__item">
                          <span id="item1">رتبه رضایتمندی</span>
                          <tooltip
                            target="item1"
                            placement="bottom"
                            title="رتبه‌ای که شرکت‌ بیمه در کیفیت پرداخت خسارت به مشتریان، کسب کرده‌ است."
                          ></tooltip>
                        </div>
                        <div class="th__item"><span>توانگری مالی</span></div>
                        <div class="th__item"><span>سرعت پاسخگویی</span></div>
                        <div class="th__item"><span>قیمت</span></div>
                      </div>
                    </div>
                    <div class="company_list">
                      <div class="company_cards">
                        <div id="سینا" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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

                            <div v-b-toggle.collapse-2 class="more-btn text-center">
                              <span>بیشتر</span>
                            </div>
                            <b-collapse id="collapse-2">
                              <div class="offer-more">
                                <div class="row pl-0 offer-box">
                                  <div class="col-9 pr-0 pl-0">
                                    <div class="tabbable">
                                      <ul class="nav nav-tabs p-0">
                                        <li v-if="jarimeDirkard" class="more-item">
                                          <span data-target="#tab1" data-toggle="tab" class="header-item active"> جریمه دیرکرد </span>
                                        </li>
                                        <li class="more-item">
                                          <span
                                            data-target="#tab2"
                                            data-toggle="tab"
                                            class="header-item"
                                            :class="{
                                              active: !jarimeDirkard,
                                            }"
                                          >
                                            توضیحات
                                          </span>
                                        </li>
                                      </ul>
                                      <div class="tab-content">
                                        <div id="tab1" class="tab-pane" :class="{ active: jarimeDirkard }">
                                          <div class="co-flex">
                                            <div class="co-1">
                                              <p>
                                                تعداد روز
                                                <br />
                                                <span> {{ jarimeDirkardDay }} روز </span>
                                              </p>
                                            </div>
                                            <div class="pt-3">X</div>
                                            <div class="co-1">
                                              <p>
                                                جریمه روز
                                                <br />
                                                <span>
                                                  {{ jarimeCalculateDay }}
                                                </span>
                                              </p>
                                            </div>
                                            <div class="pt-3">=</div>
                                            <div class="co-1">
                                              <p>
                                                مبلغ کل جریمه
                                                <br />
                                                <span>{{ jarimeDirkard }}</span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div id="tab2" class="tab-pane" :class="{ active: !jarimeDirkard }">
                                          <div class="co-2">
                                            <p>در صورت خرید قبل از ساعت 21 هر روز، بیمه‌نامه شما در همان روز صادر و فعال می‌شود.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-3 pl-0 pr-0 price_details">
                                    <div class="price-details p-2">
                                      <div class="base-price d-flex">
                                        <div>حق بیمه خالص</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="whithoutMaaliat" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                      <div class="base-price d-flex">
                                        <div>حوادث راننده</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="havadesFinal" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                      <div class="base-price d-flex">
                                        <div>۹٪ مالیات ارزش افزوده</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="maaliat" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                      <div class="base-price d-flex">
                                        <div>تخفیف</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="finalDiscount" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                      <div class="base-price d-flex">
                                        <div>تعهد مالی</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="finalBaseProperty" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                      <div class="base-price d-flex">
                                        <div>مبلغ نهایی</div>
                                        <div class="divider"></div>
                                        <div class="base_price_show">
                                          <vue-numeric v-model="finalPrice" separator="," read-only></vue-numeric>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </b-collapse>
                          </div>
                        </div>
                        <div id="سرمد" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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
                                  <vue-numeric v-model="fp1" separator="," read-only></vue-numeric>
                                  <span class="currency-prefix">تومان</span>
                                </div>
                                <div class="step-button btn__disable">بزودی</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="ایران" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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
                                  <vue-numeric v-model="fp2" separator="," read-only></vue-numeric>
                                  <span class="currency-prefix">تومان</span>
                                </div>
                                <div class="step-button btn__disable">بزودی</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="سامان" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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
                                  <vue-numeric v-model="fp3" separator="," read-only></vue-numeric>
                                  <span class="currency-prefix">تومان</span>
                                </div>
                                <div class="step-button btn__disable">بزودی</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="ما" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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
                                  <vue-numeric v-model="fp4" separator="," read-only></vue-numeric>
                                  <span class="currency-prefix">تومان</span>
                                </div>
                                <div class="step-button btn__disable">بزودی</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="معلم" class="company_card me-3 d-md-block">
                          <div class="card card-body mb-3">
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
                                  <vue-numeric v-model="fp5" separator="," read-only></vue-numeric>
                                  <span class="currency-prefix">تومان</span>
                                </div>
                                <div class="step-button btn__disable">بزودی</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="col-md-2 sidebar"></div> -->
                  </div>
                </b-overlay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <check-modal
      ref="checkout"
      :finalprice="finalPrice"
      :lastpolicystartdate="lastPolicyStartDate"
      :lastpolicyexpdate="lastPolicyExpDate"
      :cartype="storeState.carTypeName"
      :carbrand="storeState.carBrandName"
      :carmodel="storeState.carModelName"
      :basepropertydamage="basePropertyDamage"
      :carbuildyear="car_production_year"
      :carinsstatus="pre_company"
      :companyname="company_name"
      :thirdpartydiscount="DisThirdparty"
      :driverDis="DisDriver"
      :maaliat="maaliat"
      :whithoutmaaliat="whithoutMaaliat"
      :finalbaseproperty="finalBaseProperty"
      :havadesfinal="havadesFinal"
      :jarimedirkard="jarimeDirkard"
      :jarimedirkardday="jarimeDirkardDay"
      :financialdamage="financialDamage"
      :lifedamage="lifeDamage"
      :havadesdamage="havadesDamage"
    ></check-modal>
    <edit-modal
      :cartype="storeState.carTypeName"
      :carbrand="storeState.carBrandName"
      :carmodel="storeState.carModelName"
      ref="editmodal"
    ></edit-modal>
    <select-item-modal ref="ItemModaltype" :title="type_title" :switch="1"></select-item-modal>
    <select-item-modal ref="ItemModalBrand" :title="brand_title" :switch="2"></select-item-modal>
    <select-item-modal ref="ItemModalModel" :title="model_title" :switch="3"></select-item-modal>
    <select-year-modal ref="SelectYearModal"></select-year-modal>
    <select-policy-modal ref="SelectPolicyModal" @onReloadPage="reloadQueryOnPage"></select-policy-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import VueNumeric from 'vue-numeric'
import momentJalaali from 'moment-jalaali'
// import moment from 'moment'
import { store } from '@/store/wizard.js'

// import CustomSlider from '@/components/base/CustomRangeSlider'

export default {
  components: {
    EditModal: () => import('@/components/car-items/thirdparty/EditDataModal'),
    CheckModal: () => import('@/components/car-items/thirdparty/CheckoutModal'),
    SelectItemModal: () => import('@/components/car-items/thirdparty/SelectItemModal'),
    SelectYearModal: () => import('@/components/car-items/thirdparty/SelectYearModal'),
    SelectPolicyModal: () => import('@/components/car-items/thirdparty/SelectPolicyModal'),
    VueNumeric,
    // CustomSlider,
  },
  layout: 'main',
  data() {
    return {
      carTypeName: null,
      carBrand: null,
      carModel: null,
      policy_status: null,
      carCylinder: 4,
      car_production_year: null,
      last_policy_exp_date: null,
      previousCompany: null,
      ins_status: null,
      lastPolicyStartDate: null,
      lastPolicyExpDate: null,
      DisThirdparty: 0,
      DisDriver: 0,
      company_name: 'سینا 3002',

      lastPolicyStartDateـ: null,
      lastPolicyExpDateـ: null,

      car_type: '',
      car_build_year: null,
      car_model: null,
      car_brand: null,
      maaliat: 0,
      jarimeDirkard: null,
      jarimeDirkardDay: null,
      jarimeCalculateDay: null,
      finalDiscount: 0,
      financialDamage: 0,
      lifeDamage: 0,
      havadesDamage: 0,
      basePropertyDamage: 20,
      finalBaseProperty: null,
      havadesFinal: 0,

      finalPrice: 0,
      whithoutMaaliat: 0,
      fp1: 0,
      fp2: 0,
      fp3: 0,
      fp4: 0,
      fp5: 0,
      tabIndex: 0,
      loading: true,
      pre_company: '',

      storeState: store.state,

      type_title: 'کاربری خودرو',
      brand_title: 'برند خودرو',
      model_title: 'مدل خودرو',
      date_: 0,

      slider: '16',
      sliderValues: null,
      sliderValues1: [
        {
          label: '20٫000٫000 تومان',
          value: '20',
        },
        {
          label: '25٫000٫000 تومان',
          value: '25',
        },
        {
          label: '32٫000٫000 تومان',
          value: '32',
        },
        {
          label: '45٫000٫000 تومان',
          value: '45',
        },
        {
          label: '50٫000٫000 تومان',
          value: '50',
        },
        {
          label: '60٫000٫000 تومان',
          value: '60',
        },
        {
          label: '65٫000٫000 تومان',
          value: '65',
        },
        {
          label: '70٫000٫000 تومان',
          value: '70',
        },
        {
          label: '75٫000٫000 تومان',
          value: '75',
        },
        {
          label: '80٫000٫000 تومان',
          value: '80',
        },
        {
          label: '100٫000٫000 تومان',
          value: '100',
        },
        {
          label: '120٫000٫000 تومان',
          value: '120',
        },
        {
          label: '130٫000٫000 تومان',
          value: '130',
        },
        {
          label: '150٫000٫000 تومان',
          value: '150',
        },
        {
          label: '200٫000٫000 تومان',
          value: '200',
        },
        {
          label: '240٫000٫000 تومان',
          value: '240',
        },
        {
          label: '250٫000٫000 تومان',
          value: '250',
        },
        {
          label: '260٫000٫000 تومان',
          value: '260',
        },
        {
          label: '300٫000٫000 تومان',
          value: '300',
        },
        {
          label: '320٫000٫000 تومان',
          value: '320',
        },
      ],
      hasBime: [
        { id: 1, title: 'فاقد بیمه نامه', value: 'no' },
        { id: 2, title: 'خودرو صفر کیلومتر', value: 'zero' },
        { id: 3, title: 'دارای بیمه نامه قبلی', value: 'yes' },
      ],
      options: [
        { text: '۳۲۰ میلیون تومان', value: '320' },
        { text: '۲۶۰ میلیون تومان', value: '260' },
        { text: '۲۰۰ میلیون تومان', value: '200' },
        { text: '۱۵۰ میلیون تومان', value: '150' },
        { text: '۱۰۰ میلیون تومان', value: '100' },
        { text: '۸۰ میلیون تومان', value: '80' },
        { text: '۵۰ میلیون تومان', value: '50' },
        { text: '۴۸ میلیون تومان', value: '48' },
        { text: '۴۰ میلیون تومان', value: '40' },
        { text: '۳۲ میلیون تومان', value: '32' },
        { text: '۳۰ میلیون تومان', value: '30' },
        { text: '۲۰ میلیون تومان', value: '20' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      getCarTypes: 'car/getCarTypes',
    }),
    carTypeSearch() {
      const searchById = this.$misc.cloneDeep(this.getCarTypes)
      return searchById.find((item) => {
        return item.carTypeLatin === this.car_type
      })
    },
    carBrandSearch() {
      const searchById = this.$misc.cloneDeep(this.carTypeSearch.brand)
      return searchById.find((item) => {
        return item.id === this.car_brand
      })
    },
  },
  watch: {
    car_type() {
      store.setCarTypeSelected(this.car_type)
      store.setCarTypeName(this.carTypeSearch.carType)
    },
    car_brand() {
      this.car_brand = parseInt(this.car_brand)
      store.setBrandSelected(this.car_brand)
      store.setcarBrandName(this.carBrandSearch.name)
    },
    car_model() {
      this.car_model = parseInt(this.car_model)
      store.setModelSelected(parseInt(this.car_model))
      const carModels = this.carBrandSearch.model
      store.setCarBrandData(this.carBrandSearch.model)
      store.setcarModelName(carModels.find((item) => item.id === this.car_model).name)
    },
    car_production_year() {
      store.setYearSelected(this.car_production_year)
      this.car_production_year_ = parseInt(this.car_production_year)
    },
    policy_status() {
      store.setPolicyStatus(this.policy_status)
      store.setPolicyStatusName(this.hasBime.find((item) => item.value === this.policy_status).title)
    },
  },
  mounted() {
    this.loadRouterData()
    console.log(momentJalaali(this.last_policy_exp_date).format('jYYYY/jMM/jDD')) // eslint-disable-line

    this.carTypeNameChange()
    this.getApiData()

    this.sliderValues = this.sliderValues1

    if (this.$route.query.policy_status === 'no') {
      this.pre_company = 'بدون بیمه نامه'
    } else if (this.$route.query.policy_status === 'yes') {
      this.pre_company = this.$route.query.previous_company
    } else if (this.$route.query.policy_status === 'zero') {
      this.pre_company = 'صفر کیلومتر'
    }
  },
  methods: {
    reload() {
      this.getApiData()
    },
    reloadQueryOnPage() {
      console.log(this.storeState.carValue) // eslint-disable-line
      this.$router.push({
        path: '/compare/thirdparty',
        query: {
          car_type: this.carType,
          car_brand: this.car_brand,
          car_model: this.car_model,
          car_usage: this.car_usage,
          car_is_irani: this.car_is_irani,
          car_production_year: this.car_production_year,
          car_value: this.storeState.carValue,
          car_accessories_value: this.storeState.accesoriesValue,
          thirdpartyCompany: this.thirdpartyCompany,
          thirdpartyDis: this.thirdpartyDiscount,
        },
      })
      this.$router.go(0)
      console.log('refresh!!!') // eslint-disable-line
    },
    loadRouterData() {
      this.car_type = this.$route.query.car_type
      this.car_brand = this.$route.query.car_brand
      this.car_model = this.$route.query.car_model
      this.car_production_year = this.$route.query.car_production_year
      this.policy_status = this.$route.query.policy_status
      this.last_policy_exp_date = this.$route.query.last_policy_exp_date
      this.ins_status = this.$route.query.previous_company
      this.lastPolicyStartDate = this.$route.query.lastPolicy_StartDate
      this.lastPolicyExpDate = this.$route.query.lastPolicy_ExpDate
      this.DisThirdparty = parseFloat(this.$route.query.DisThirdparty)
      this.DisDriver = parseFloat(this.$route.query.DisDriver)
      this.financialDamage = parseInt(this.$route.query.financialDamage)
      this.lifeDamage = parseInt(this.$route.query.lifeDamage)
      this.havadesDamage = parseInt(this.$route.query.havadesDamage)

      const l = momentJalaali(this.lastPolicyStartDate)
      this.lastPolicyStartDate_ = String(l.format('jYYYY-jMM-jDD'))
      const e = momentJalaali(this.lastPolicyExpDate)
      this.lastPolicyExpDate_ = e.format('jYYYY-jMM-jDD')

      console.log(this.lastPolicyStartDate_, this.lastPolicyExpDate_)
    },
    getData(data) {
      this.loading = true
      this.$store
        .dispatch('offers/getThirdPartyOffer', data)
        .then((result) => {
          console.log(result) // eslint-disable-line
          let finalPriceResult = result.finalPrice
          this.finalPrice = result.finalPrice
          this.whithoutMaaliat = result.withoutMaliaat
          this.maaliat = result.maaliat
          this.jarimeDirkard = result.jarimeSum
          this.jarimeDirkardDay = result.jarimeDays
          this.jarimeCalculateDay = result.jarimePerDay
          this.havadesFinal = result.havadesFinal
          this.finalBaseProperty = result.BaseProperty
          this.fp1 = finalPriceResult += finalPriceResult * 0.05
          this.fp2 = finalPriceResult += finalPriceResult * 0.005
          this.fp3 = finalPriceResult += finalPriceResult * 0.005
          this.fp4 = finalPriceResult += finalPriceResult * 0.005
          this.fp5 = finalPriceResult += finalPriceResult * 0.005
          this.loading = false
        })
        .catch((e) => {
          this.loading = false
          console.log('error step 1 = ', e) // eslint-disable-line no-console
        })
    },
    getApiData() {
      // محاسبه روز جریمه
      if (this.lastPolicyExpDate) {
        this.date_ = this.lastPolicyExpDate
      } else if (this.last_policy_exp_date) {
        this.date_ = this.last_policy_exp_date
      }
      const a = new Date(this.date_)
      const b = new Date()
      const res = b - a
      const jarimeDays = res / (1000 * 3600 * 24) - 1
      if (jarimeDays > 0) {
        this.jarimeDirkard = Math.ceil(jarimeDays)
      }
      console.log('jarime:' + this.jarimeDirkard)
      const data = {
        carType: this.car_type,
        carBrand: this.car_brand,
        carModel: this.car_model,
        carCylinder: this.carCylinder,
        jarimeDays: this.jarimeDirkard,
        carBuildYear: this.car_production_year,
        policyStatus: this.policy_status,
        previousCompany: this.previousCompany,
        lastPolicyStartDate: this.lastPolicyStartDate,
        lastPolicyExpDate: this.lastPolicyExpDate,
        basePropertyDamage: this.basePropertyDamage,
        policyTerm: 12,
        carThirdDiscount: this.DisThirdparty,
        havadesDiscount: this.DisDriver,
        financialDamage: this.financialDamage,
        lifeDamage: this.lifeDamage,
        havadesDamage: this.havadesDamage,
      }
      console.log(data) // eslint-disable-line
      this.getData(data)
    },
    carTypeNameChange() {
      if (this.car_tid === 1) {
        this.carTypeName = 'سواری'
      } else if (this.car_tid === 2) {
        this.carTypeName = 'وانت'
      } else if (this.car_tid === 3) {
        this.carTypeName = 'تاکسی درون شهر'
      } else if (this.car_tid === 4) {
        this.carTypeName = 'تاکسی برون شهر'
      } else if (this.car_tid === 5) {
        this.carTypeName = 'ون'
      } else if (this.car_tid === 6) {
        this.carTypeName = 'کامیون'
      } else if (this.car_tid === 7) {
        this.carTypeName = 'کامیونت'
      }
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
    onRunEditModal() {
      this.$refs.editmodal.showModal()
    },
    onRunCheckoutModal() {
      this.$refs.checkout.showModal()
    },
    type_modal() {
      this.$refs.ItemModaltype.showModal()
    },
    brand_modal() {
      this.$refs.ItemModalBrand.showModal()
    },
    model_modal() {
      this.$refs.ItemModalModel.showModal()
    },
    year_modal() {
      this.$refs.SelectYearModal.showModal()
    },
    policy_modal() {
      this.$refs.SelectPolicyModal.showModal()
    },

    // changeOptions() {
    //   this.sliderValues = this.changed ? this.sliderValues1 : this.sliderValues2
    //   this.changed = !this.changed
    // },
    // changeValue() {
    //   this.slider = this.sliderValues[1].value
    // },
  },
}
</script>
<style scoped>
.offer-more {
  color: #2f2f2f;

  border-top: none;
  background-color: rgba(0, 0, 0, 0.04);
}
.divider {
  flex-grow: 1;
}
.more-btn {
  cursor: pointer;
}
.active {
  background-color: #f5f5f5;
}
.header-item {
  padding: 7px;
  width: 100%;
  text-align: center;
}
.tabbable {
  background-color: white;
}
.more-item {
  width: 20%;
  height: 36px;
  display: flex;
  opacity: 1 !important;
  max-width: unset;
  min-height: unset;
  border-left: 1px solid #d5d5d5;
  background-color: #fff;
  cursor: pointer;
}
.tab-content {
  background-color: whitesmoke;
}
.co-flex {
  display: flex;
}
.co-1 {
  width: 20%;
  text-align: center;
}
.co-2 {
  text-align: right;
}
.offer-box {
  background-color: whitesmoke;
  border-top: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  border-left: 1px solid #dee2e6;
}
.price_details {
  border-right: 1px solid #d5d5d5;
}
.inputProperty {
  text-align: right;
}
</style>
