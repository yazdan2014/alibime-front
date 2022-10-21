<template>
  <div>
    <header id="header" class="header">
      <div class="top_page"></div>
    </header>
    <div class="container">
      <div class="compare">
        <div class="stepper_horizontal"></div>
        <div class="ins-step-box">
          <div class="compare_header step-header">
            <div class="d-flex align-items-center">
              <h1 class="compare_title">بیمه بدنه خودرو</h1>
              <div class="steps_data">
                <div class="step-link">
                  <div class="modal_button" @click="brand_modal">
                    <span class="tabStatus">برند: </span>
                    <span class="tabLabel">{{ storeState.carBrandName }}</span>
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
                    <span class="tabLabel">{{ storeState.carModelName }}</span>
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
                    <span class="tabLabel">{{ storeState.yearSelected }}</span>
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
                  <div class="modal_button" @click="usage_modal">
                    <span class="tabStatus">کاربری: </span>
                    <span class="tabLabel">{{ storeState.usageSelected }}</span>
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
                  <div class="modal_button" @click="irani_modal">
                    <span class="tabStatus">داخلی یا وارداتی: </span>
                    <span class="tabLabel">{{ storeState.iraniSelected }}</span>
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
                  <div class="modal_button" @click="value_modal">
                    <span class="tabStatus">ارزش: </span>
                    <span class="tabLabel">
                      <vue-numeric
                        :value="storeState.carValue"
                        separator=","
                        read-only
                      ></vue-numeric>
                      تومان
                    </span>
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
                  <div class="modal_button" @click="accessories_modal">
                    <span class="tabStatus">ارزش لوازم غیر فابریک: </span>
                    <span class="tabLabel"
                      ><span class="tabLabel">
                        <vue-numeric
                          :value="storeState.accesoriesValue"
                          separator=","
                          read-only
                        ></vue-numeric>
                        تومان
                      </span></span
                    >
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
              </div>
            </div>
          </div>
          <div class="d-flex">
            <!-- <check-box-pro
              :label="coverChemicalLable"
              :click.self="addcoverChemical()"
            >
            </check-box-pro> -->
            <div class="coverModal custom-checkbox">
              <div class="coverModalBotton" @click="theftofparts_Modal()">
                <span>سرقت درجا</span>
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
            <div class="coverModal custom-checkbox">
              <div class="coverModalBotton" @click="pricefluctuation_Modal()">
                <span>نوسانات ارزش</span>
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
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              @change="addcoverChemical()"
            >
              پاشیدن مواد شیمیایی
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-2"
              name="checkbox-2"
              @change="addcoverGlassBreak()"
            >
              شکست شیشه
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-3"
              name="checkbox-3"
              @change="addcoverNaturalDisasters()"
            >
              حوادث طبیعی
            </b-form-checkbox>

            <b-form-checkbox
              id="checkbox-6"
              name="checkbox-6"
              @change="addcoverTransportation()"
            >
              ایاب و ذهاب
            </b-form-checkbox>
          </div>

          <b-overlay
            :show="loading"
            spinner-variant="primary"
            spinner-type="grow"
            spinner-small
            rounded="sm"
          >
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
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\4.png"
                                alt="سینا"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-03.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-02.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="finalPrice"
                                separator=","
                                read-only
                              ></vue-numeric>
                              
                              تومان
                            </div>
                            <div
                              class="step-button step-button-next"
                              @click.stop="onRunCheckoutModal"
                            >
                              سفارش
                            </div>
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
                                    <li class="more-item">
                                      <span
                                        data-target="#tab2"
                                        data-toggle="tab"
                                        class="header-item active"
                                        >توضیحات</span
                                      >
                                    </li>
                                  </ul>
                                  <div class="tab-content">
                                    <div id="tab2" class="tab-pane">
                                      <div class="co-2">
                                        <p>
                                          در صورت خرید قبل از ساعت 21 هر روز،
                                          بیمه‌نامه شما در همان روز صادر و فعال
                                          می‌شود.
                                        </p>
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
                                      <vue-numeric
                                        v-model="whithoutMaaliat"
                                        separator=","
                                        read-only
                                      ></vue-numeric>
                                    </div>
                                  </div>
                                  <div class="base-price d-flex">
                                    <div>پوشش های اضافی</div>
                                    <div class="divider"></div>
                                    <div class="base_price_show">
                                      <vue-numeric
                                        v-model="coversPrice"
                                        separator=","
                                        read-only
                                      ></vue-numeric>
                                    </div>
                                  </div>

                                  <div class="base-price d-flex">
                                    <div>۹٪ مالیات ارزش افزوده</div>
                                    <div class="divider"></div>
                                    <div class="base_price_show">
                                      <vue-numeric
                                        v-model="maaliat"
                                        separator=","
                                        read-only
                                      ></vue-numeric>
                                    </div>
                                  </div>
                                  <div class="base-price d-flex">
                                    <div>تخفیف</div>
                                    <div class="divider"></div>
                                    <div class="base_price_show">
                                      <vue-numeric
                                        v-model="finalDiscount"
                                        separator=","
                                        read-only
                                      ></vue-numeric>
                                    </div>
                                  </div>
                                  <div class="base-price d-flex">
                                    <div>مبلغ نهایی</div>
                                    <div class="divider"></div>
                                    <div class="base_price_show">
                                      <vue-numeric
                                        v-model="final_Price"
                                        separator=","
                                        read-only
                                      ></vue-numeric>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-collapse>
                      </div>
                    </div>
                    <div id="سرمد" class="company_card d-none d-md-block">
                      <div class="company_card_content">
                        <div class="card__content">
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\20.png"
                                alt="سرمد"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-04.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-04.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="fp1"
                                separator=","
                                read-only
                              ></vue-numeric>
                              تومان
                            </div>
                            <div
                              class="step-button btn__disable step-button-next"
                            >
                              بزودی
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="ایران" class="company_card d-none d-md-block">
                      <div class="company_card_content">
                        <div class="card__content">
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\7.png"
                                alt="ایران"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-05.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-01.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="fp2"
                                separator=","
                                read-only
                              ></vue-numeric>
                              تومان
                            </div>
                            <div
                              class="step-button btn__disable step-button-next"
                            >
                              بزودی
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="سامان" class="company_card d-none d-md-block">
                      <div class="company_card_content">
                        <div class="card__content">
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\19.png"
                                alt="سامان"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-04.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-04.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="fp3"
                                separator=","
                                read-only
                              ></vue-numeric>
                              تومان
                            </div>
                            <div
                              class="step-button btn__disable step-button-next"
                            >
                              بزودی
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="ما" class="company_card d-none d-md-block">
                      <div class="company_card_content">
                        <div class="card__content">
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\10.png"
                                alt="ما"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-04.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-04.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="fp4"
                                separator=","
                                read-only
                              ></vue-numeric>
                              تومان
                            </div>
                            <div
                              class="step-button btn__disable step-button-next"
                            >
                              بزودی
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="معلم" class="company_card d-none d-md-block">
                      <div class="company_card_content">
                        <div class="card__content">
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="card_company_logo"
                                src="\resource\img\company\13.png"
                                alt="معلم"
                              />
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
                              <img
                                src="\resource\img\icons\quality\q-04.svg"
                                alt="quality"
                              />
                            </div>
                          </div>
                          <div class="card_item_body">
                            <div class="card_item">
                              <img
                                class="timer"
                                src="\resource\img\icons\timer\timer-04.svg"
                                alt="timer"
                              />
                            </div>
                          </div>

                          <div class="card_item_body">
                            <div class="card_item company__price">
                              <vue-numeric
                                v-model="fp5"
                                separator=","
                                read-only
                              ></vue-numeric>
                              تومان
                            </div>
                            <div
                              class="step-button btn__disable step-button-next"
                            >
                              بزودی
                            </div>
                          </div>
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
    <check-modal
      ref="checkout"
      :cartype="storeState.usageSelected"
      :carbrand="storeState.carBrandName"
      :carbuildyear="storeState.yearSelected"
      :carmodel="storeState.carModelName"
      :cartid="car_brand"
      :carbid="car_brand"
      :carmid="car_brand"
      :carisirani="storeState.iraniSelected"
      :companyname="company_name"
      :thirdpartycompany="thirdpartyCompany"
      :thirdpartydiscount="thirdpartyDiscount_"
      :lastcarbodycompany="lastBodyInsCompany"
      :carbodydiscount="carbodydiscount_"
      :coverchemical="coverChemical_"
      :coverglassbreak="coverGlassBreak_"
      :covertransportation="coverTransportation_"
      :coverpricefluctuation="storeState.coverPriceFluctuation"
      :covertheftofparts="storeState.coverTheftOfParts"
      :covernaturaldisasters="coverNaturalDisasters_"
      :carvalue="carvalue_"
      :finalprice="final_Price"
      :maaliat="maaliat"
      :whithoutmaaliat="whithoutMaaliat"
      :coversprice="coversPrice"
    ></check-modal>
    <select-item-modal
      ref="ItemModalBrand"
      :title="brand_title"
      :setcarmodel="car_brand"
      :setcarbrand="car_model"
      :switch="1"
    >
    </select-item-modal>
    <select-item-modal
      ref="ItemModalModel"
      :title="model_title"
      :setcarmodel="car_brand"
      :setcarbrand="car_model"
      :switch="2"
    >
    </select-item-modal>
    <select-year-modal ref="SelectYearModal" @onReloadPage="reloadQueryOnPage">
    </select-year-modal>
    <select-usage-modal
      ref="SelectUsageModal"
      @onReloadPage="reloadQueryOnPage"
    >
    </select-usage-modal>
    <select-irani-modal
      ref="SelectIraniModal"
      @onReloadPage="reloadQueryOnPage"
    >
    </select-irani-modal>
    <value-input-modal
      ref="valueInputModal"
      @onReloadPage="reloadQueryOnPage"
    ></value-input-modal>
    <accessories-input-modal
      ref="AccessoriesModal"
      @onReloadPage="reloadQueryOnPage"
    >
    </accessories-input-modal>
    <theft-of-parts-modal
      ref="TheftOfPartsModal"
      @onReloadPage="reloadQueryOnPage"
    ></theft-of-parts-modal>
    <price-fluctuation-modal
      ref="priceFluctuationModal"
      @onReloadPage="reloadQueryOnPage"
    ></price-fluctuation-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import VueNumeric from 'vue-numeric'
import { store } from '@/store/wizard.js'
import valueInputModal from '@/components/car-items/carbody/CarValueModal'
// import CheckBoxPro from '~/components/base/CheckBoxPro.vue'
export default {
  components: {
    CheckModal: () =>
      import('@/components/car-items/carbody/CheckoutModalCarBody'),
    SelectItemModal: () =>
      import('@/components/car-items/carbody/SelectItemModal'),
    SelectYearModal: () =>
      import('@/components/car-items/carbody/SelectYearModal'),
    SelectUsageModal: () =>
      import('@/components/car-items/carbody/SelectCarUsageModal'),
    SelectIraniModal: () =>
      import('@/components/car-items/carbody/SelectCarIraniModal'),
    // valueInputModal: () =>
    //   import('@/components/car-items/carbody/CarValueModal'),
    AccessoriesInputModal: () =>
      import('@/components/car-items/carbody/CarAccessoriesModal'),
    TheftOfPartsModal: () =>
      import('@/components/car-items/carbody/CoverTheftOfPartsModal'),
    PriceFluctuationModal: () =>
      import('@/components/car-items/carbody/CoverPriceFluctuatioModal'),
    VueNumeric,
    valueInputModal,

    // CheckBoxPro,
  },
  layout: 'landing-pages',

  data() {
    return {
      car_brand: 0,
      car_model: 0,
      carBrandName: null,
      carModelName: null,
      // brandName: null,
      // modelName: null,
      car_usage: false,
      car_is_irani: null,
      car_production_year: 0,
      car_production_year_: 0,
      car_value: 0,
      carvalue_: 0,
      car_accessories_value: 0,
      car_is_new: false,
      has_previous_policy: false,
      years_without_incident: 0,
      discount_thirdparty: 0,
      coverChemical_: false,
      // coverChemicalLable: 'پاشیدن مواد شیمیایی',
      coverGlassBreak_: false,
      coverNaturalDisasters_: false,
      coverTransportation_: false,
      coverPriceFluctuation: 0,
      coverTheftOfParts: 0,
      company_name: 'سینا 3002',
      lastBodyInsCompany: null,
      thirdpartyCompany: null,
      thirdpartyDiscount: 0,
      thirdpartyDiscount_: 0,
      carBodyDiscount: 0,
      carbodydiscount_: 0,

      storeState: store.state,

      final_Price: 0,
      maaliat: 0,
      finalDiscount: 0,
      whithoutMaaliat: 0,
      coversPrice: 0,
      fp1: 0,
      fp2: 0,
      fp3: 0,
      fp4: 0,
      fp5: 0,
      tabIndex: 0,
      loading: true,

      brand_title: 'برند خودرو',
      model_title: 'مدل خودرو',
    }
  },
  computed: {
    ...mapGetters({
      getCarTypes: 'car/getBodyInsCarTypes',
    }),
    carTypeSearch() {
      const searchById = this.$misc.cloneDeep(this.getCarTypes)
      return searchById.find((item) => {
        return item.id === this.car_brand
      })
    },
  },
  watch: {
    car_brand() {
      this.car_brand = parseInt(this.car_brand)
      store.setBrandSelected(this.car_brand)
      store.setcarBrandName(this.carTypeSearch.name)
    },
    car_model() {
      this.car_model = parseInt(this.car_model)
      store.setModelSelected(parseInt(this.car_model))
      const carModels = this.carTypeSearch.model
      store.setCarBrandData(this.carTypeSearch.model)
      store.setcarModelName(
        carModels.find((item) => item.id === this.car_model).name
      )
    },
    car_production_year() {
      store.setYearSelected(this.car_production_year)
      this.car_production_year_ = parseInt(this.car_production_year)
    },
    carBodyDiscount() {
      this.carbodydiscount_ = parseInt(this.carBodyDiscount)
    },
    thirdpartyDiscount() {
      this.thirdpartyDiscount_ = parseFloat(this.thirdpartyDiscount)
      console.log(this.thirdpartyDiscount_)
    },
    car_usage() {
      store.setUsageSelected(this.cartypeUsage())
    },
    car_is_irani() {
      store.setIraniSelected(this.carirani())
    },
    car_value() {
      store.setCarValue(parseInt(this.car_value))
      this.carvalue_ = parseInt(this.car_value)
    },
    car_accessories_value() {
      store.setAccesoriesValue(this.car_accessories_value)
    },
    coverTheftOfParts() {
      store.setCoverTheftOfParts(this.coverTheftOfParts)
    },
    coverPriceFluctuation() {
      store.setCoverPriceFluctuation(this.coverPriceFluctuation)
    },
    deep: true,
  },
  mounted() {
    this.loadRouterData()
    this.getApiData()
  },

  methods: {
    cartypeUsage() {
      if (this.car_usage === 'passenger') return 'سواری'
      if (this.car_usage === 'taxi') return 'تاکسی'
      return 'نامشخص'
    },
    carirani() {
      if (this.car_is_irani === 'irani') return 'خودرو داخلی'
      if (this.car_is_irani === 'out') return 'خودرو وارداتی'
      return 'نامشخص'
    },
    reload() {
      this.getApiData()
      console.log('reload is activate!') // eslint-disable-line
      // this.reloadQueryOnPage()
      // this.$forceUpdate()
      // location.reload()
    },
    reloadOnPage() {
      this.reloadQueryOnPage()
    },
    addcoverChemical() {
      if (this.coverChemical_ === true) {
        this.coverChemical_ = false
      } else {
        this.coverChemical_ = true
      }
      this.reload()
      console.log(this.coverChemical_) // eslint-disable-line
    },
    addcoverGlassBreak() {
      if (this.coverGlassBreak_ === true) {
        this.coverGlassBreak_ = false
      } else {
        this.coverGlassBreak_ = true
      }
      this.reload()
      console.log(this.coverGlassBreak_) // eslint-disable-line
    },
    addcoverNaturalDisasters() {
      if (this.coverNaturalDisasters_ === true) {
        this.coverNaturalDisasters_ = false
      } else {
        this.coverNaturalDisasters_ = true
      }
      this.reload()
      console.log(this.coverNaturalDisasters_) // eslint-disable-line
    },
    addcoverTransportation() {
      if (this.coverTransportation_ === true) {
        this.coverTransportation_ = false
      } else {
        this.coverTransportation_ = true
      }
      this.reload()
      console.log(this.coverTransportation_) // eslint-disable-line
    },
    // addcoverPriceFluctuation() {
    //   if (this.coverPriceFluctuation_ === true) {
    //     this.coverPriceFluctuation_ = false
    //   } else {
    //     this.coverPriceFluctuation_ = true
    //   }
    //   this.reload()
    //   console.log(this.coverPriceFluctuation_) // eslint-disable-line
    // },
    // addcoverTheftOfParts() {
    //   if (this.coverTheftOfParts_ === true) {
    //     this.coverTheftOfParts_ = false
    //   } else {
    //     // this.coverTheftOfParts_ = true
    //     this.theftofparts_Modal()
    //   }
    //   this.reload()
    //   console.log(this.coverTheftOfParts_) // eslint-disable-line
    // },

    getData(data) {
      this.loading = true
      this.$store
        .dispatch('offers/getCarBodyOffer', data)
        .then((result) => {
          console.log(result) // eslint-disable-line
          this.final_Price = result.finalPrice
          this.maaliat = result.maaliat
          this.whithoutMaaliat = result.finalPriceWithoutMaaliat
          this.coversPrice = result.covers

          let finalPriceResult = result.finalPrice
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
      const data = {
        carBrand: this.car_brand,
        carModel: this.car_model,
        carUsage: this.car_usage,
        carIsIrani: this.car_is_irani,
        carProductionYear: this.car_production_year,
        carValue: this.car_value,
        carAccessoriesValue: this.car_accessories_value,
        carIsNew: this.car_is_new,
        hasPreviousPolicy: this.has_previous_policy,
        yearsWithoutIncident: this.years_without_incident,
        discountThirdParty: this.thirdpartyDiscount,
        coverChemical: this.coverChemical_,
        coverGlassBreak: this.coverGlassBreak_,
        coverNaturalDisasters: this.coverNaturalDisasters_,
        coverTransportation: this.coverTransportation_,
        coverPriceFluctuation: this.storeState.coverPriceFluctuation,
        coverTheftOfParts: this.storeState.coverTheftOfParts,
      }
      console.log(data) // eslint-disable-line
      this.getData(data)
    },
    reloadQueryOnPage() {
      console.log(this.storeState.carValue) // eslint-disable-line
      this.$router.push({
        path: '/compare/car-body',
        query: {
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
      // path: `/compare/car-body/?car_brand=${this.car_brand}&car_model=${this.car_model}&car_usage=${this.car_usage}&car_is_irani=${this.car_is_irani}&car_production_year=${this.car_production_year}&car_value=${this.car_value}&car_accessories_value=${this.car_accessories_value}&thirdpartyCompany=${this.thirdpartyCompany}&thirdpartyDis=${this.thirdpartyDiscount}&years_without_incident=${this.years_without_incident}`,
      // path: `/compare/car-body/?car_brand=${this.car_brand}&car_model=${this.car_model}&car_usage=${this.car_usage}&car_is_irani=${this.car_is_irani}&car_production_year=${this.formData.setCarYear}&car_value=${this.car_value}&car_accessories_value=${this.setCarAccesoriesPrice}&thirdpartyCompany=${this.thirdpartyCompany}&thirdpartyDis=${this.thirdpartyDiscount}`,
      // })
      this.$router.go(0)
      console.log('refresh!!!!') // eslint-disable-line
    },
    loadRouterData() {
      this.car_brand = this.$route.query.car_brand
      this.car_model = this.$route.query.car_model
      this.car_usage = this.$route.query.car_usage
      this.car_is_irani = this.$route.query.car_is_irani
      this.car_production_year = this.$route.query.car_production_year
      this.car_value = this.$route.query.car_value
      this.car_accessories_value = this.$route.query.car_accessories_value
      this.car_is_new = this.$route.query.car_is_new
      this.has_previous_policy = this.$route.query.has_previous_policy
      this.years_without_incident = this.$route.query.years_without_incident
      this.discount_thirdparty = this.$route.query.discount_thirdparty
      this.coverChemical_ = this.$route.query.cover_chemical
      this.coverGlassBreak_ = this.$route.query.cover_glass_break
      this.coverNaturalDisasters_ = this.$route.query.cover_natural_disasters
      this.covertransportation_ = this.$route.query.cover_transportation
      this.coverPriceFluctuation = this.$route.query.cover_price_fluctuation
      this.coverTheftOfParts = this.$route.query.cover_theft_of_parts
      this.thirdpartyCompany = this.$route.query.thirdpartyCompany
      this.thirdpartyDiscount = this.$route.query.thirdpartyDis
      this.carBodyDiscount = this.$route.query.carBodyDiscount
      this.lastBodyInsCompany = this.$route.query.lastBodyInsCompany
    },
    onRunCheckoutModal() {
      this.$refs.checkout.showModal()
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
    usage_modal() {
      this.$refs.SelectUsageModal.showModal()
    },
    irani_modal() {
      this.$refs.SelectIraniModal.showModal()
    },
    value_modal() {
      this.$refs.valueInputModal.showModal()
    },
    accessories_modal() {
      this.$refs.AccessoriesModal.showModal()
    },
    theftofparts_Modal() {
      this.$refs.TheftOfPartsModal.showModal()
    },
    pricefluctuation_Modal() {
      this.$refs.priceFluctuationModal.showModal()
    },
  },
}
</script>
<style scoped>
.coverModal {
  cursor: pointer;
}
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
  padding: 0 40px;
}
</style>
