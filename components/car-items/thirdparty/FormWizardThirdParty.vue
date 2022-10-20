<template>
  <div class="order-page">
    <div class="container">
      <div class="vue-step-wizard">
        <div class="d-grid">
          <div class="step-header">
            <div class="wizard-header text-center">
              <!-- <h3 class="wizard-title">بیمه شخص ثالث</h3> -->
              <div v-if="storeState.lastTab === 0">
                <div v-for="tab in tabs" :key="tab.title">
                  <h3 class="wizard-title" v-if="tab.isActive">
                    {{ tab.title }}
                  </h3>
                </div>
              </div>
              <div v-else>
                <h5>حداکثر تعهد مالی برای جبران خسارت</h5>
              </div>
              <div class="col-md-5 step-progress p-0">
                <div v-if="storeState.lastTab === 1" class="bar progressbar" :style="{ width: 100 + '%' }"></div>
                <div v-if="storeState.lastTab === 0" class="bar progressbar" :style="{ width: progress + '%' }"></div>
              </div>
            </div>

            <ul class="step-pills">
              <li class="step-item d-flex">
                <div class="step-link ms-3">
                  <span class="tabStatusMain">اطلاعات وارد شده: </span>
                </div>
                <div v-if="storeState.getCartypeName" class="step-link ms-3">
                  <span class="tabStatus">خودرو: </span>
                  <span class="tabLabel">{{ storeState.getCartypeName }}</span>
                </div>
                <div v-if="storeState.carBrandName" class="step-link ms-3">
                  <span class="tabStatus">برند: </span>
                  <span class="tabLabel">{{ storeState.carBrandName }}</span>
                </div>
                <div v-if="storeState.getModelName" class="step-link ms-3">
                  <span class="tabStatus">مدل: </span>
                  <span class="tabLabel">{{ storeState.getModelName }}</span>
                </div>
                <div v-if="storeState.getCarbuildyear" class="step-link ms-3">
                  <span class="tabStatus">سال‌ساخت: </span>
                  <span class="tabLabel">{{ storeState.getCarbuildyear }}</span>
                </div>
                <div v-if="storeState.getPreviousCompanyName" class="step-link ms-3">
                  <span class="tabStatus">بیمه نامه قبلی: </span>
                  <span class="tabLabel">{{ storeState.getPreviousCompanyName }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="step-body mt-3">
            <form>
              <slot></slot>
            </form>
          </div>
          <div class="step-footer mt-3">
            <template v-if="!submitSuccess">
              <button :disabled="currentTab === 0" class="btn btn-secondary" @click="previousTab">مرحله قبلی</button>
              <button
                v-if="storeState.lastTab === 0"
                :disabled="this._validateCurrentTab() === false"
                class="btn btn-primary float-start"
                @click="nextTab"
              >
                مرحله بعدی
              </button>
              <button
                v-if="storeState.lastTab === 1"
                :disabled="_validateCurrentTab() === false"
                class="btn btn-primary float-start"
                @click="onSubmit"
              >
                استعلام قیمت
              </button>
            </template>
            <template v-else>
              <button class="step-button step-button-reset" @click="reset">ریست</button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from '@/store/wizard.js'
// import { mapGetters } from 'vuex'
export default {
  name: 'FormWizard',
  data() {
    return {
      tabs: [],
      currentTab: 0,
      currentTabTitle: '',
      totalTabs: 13,
      storeState: store.state,
      submitSuccess: false,
      progress: 0,
      isValidationSupport: false,
    }
  },
  watch: {
    currentTab() {
      store.setCurrentTab(this.currentTab)
    },
    totalTabs() {
      store.setTotalTab(this.totalTabs)
    },
    deep: true,
  },

  mounted() {
    this.tabs = this.$children
    // this.totalTabs = this.tabs.length
    this.currentTab = this.tabs.findIndex((tab) => tab.isActive === true)

    // Select first tab if none is marked selected
    if (this.currentTab === -1 && this.totalTabs > 0) {
      this.tabs[0].isActive = true
      this.currentTab = 0
    }
    // Setup Initial Progress
    this.progress = ((this.currentTab + 1) / this.totalTabs) * 100
  },

  updated() {
    /*
          Using this lifehook - since store variable gets updated after component is mounted
          isValidationSupport checks if user is looking to perform validation on each step
        */
    this.isValidationSupport = Object.keys(this.storeState.v).length !== 0 && this.storeState.v.constructor === Object
  },

  methods: {
    previousTab() {
      this._switchTab(this.currentTab - 1)

      this.$emit('onPreviousStep')
    },

    nextTab() {
      if (this._validateCurrentTab() === false) return

      this._switchTab(this.currentTab + 1)

      this.$emit('onNextStep')
    },

    reset() {
      this.tabs.forEach((tab) => {
        tab.isActive = false
        tab.isValidated = false
      })

      this._switchTab(0)
      this.submitSuccess = false
      this.storeState.v.$reset()

      this.$emit('onReset')
    },

    changeStatus() {
      this.submitSuccess = true
    },

    selectTab(index) {
      if (index < this.currentTab) {
        this._switchTab(index)
      }

      if (this._validateCurrentTab() === false) {
        return
      }

      if (this.tabs[index - 1].isValidated === false) {
        return
      }

      this._switchTab(index)
    },

    onSubmit() {
      if (this._validateCurrentTab() === false) return
      this.$emit('onComplete')
    },

    _switchTab(index) {
      // Disable all tabs
      this.tabs.forEach((tab) => {
        tab.isActive = false
      })

      this.currentTab = index
      this.tabs[index].isActive = true

      this.progress = ((this.currentTab + 1) / this.totalTabs) * 100
    },

    _validateCurrentTab() {
      if (!this.isValidationSupport)
        // Check if user wants to validate
        return true

      this.storeState.v.$touch()

      if (this.storeState.v.$invalid) {
        this.tabs[this.currentTab].isValidated = false
        return false
      }

      this.tabs[this.currentTab].isValidated = true

      return true
    },
  },
}
</script>
<style></style>
