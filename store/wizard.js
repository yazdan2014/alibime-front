export const store = {
  state: {
    currentTab: 0,
    lastTab: 0,
    v: {},
    getCartypeName: '',
    getBrandName: '',
    getModelName: '',
    getCarbuildyear: '',
    getPreviousCompanyName: '',
    

    BuildingType: '',
    buildingStructureType: '',
    buildingProductionYear: '',
    buildingMeter: '',
    buildingPropertiesValue: '',

    carTypeSelected: {},
    carTypeName: '',
    carBrandData: {},
    carBrandName: '',
    carModelName: '',
    brandSelected: '',
    usageSelected: '',
    iraniSelected: '',
    carValue: 0,
    modelSelected: '',
    yearSelected: '',
    monthSelected: '',
    accesoriesValue: 0,
    hasLastIns: [],

    policyStatus: '',
    PolicyStatusName: '',

    token:'',

    coverTheftOfParts: 0,
    coverPriceFluctuation: 0,

    changeValue: 0,
    totalTabs: 10,
  },
  setCarTypeName(newValue) {
    return (this.state.carTypeName = newValue)
  },
  setCarTypeSelected(newValue) {
    return (this.state.carTypeSelected = newValue)
  },
  setCoverPriceFluctuation(newValue) {
    return (this.state.coverPriceFluctuation = newValue)
  },
  setCoverTheftOfParts(newValue) {
    return (this.state.coverTheftOfParts = newValue)
  },
  setChangeValue(newValue) {
    return (this.state.changeValue = newValue)
  },
  setcarValueInput(newValue) {
    return (this.state.carValue = newValue)
  },
  setAccesoriesValue(newValue) {
    return (this.state.accesoriesValue = newValue)
  },
  setCarValue(newValue) {
    return (this.state.carValue = newValue)
  },
  setIraniSelected(newValue) {
    return (this.state.iraniSelected = newValue)
  },
  setUsageSelected(newValue) {
    return (this.state.usageSelected = newValue)
  },
  setYearSelected(newValue) {
    return (this.state.yearSelected = newValue)
  },
  setPolicyStatus(newValue) {
    return (this.state.policyStatus = newValue)
  },
  setPolicyStatusName(newValue) {
    return (this.state.PolicyStatusName = newValue)
  },
  setcarModelName(newValue) {
    return (this.state.carModelName = newValue)
  },
  setcarBrandName(newValue) {
    return (this.state.carBrandName = newValue)
  },
  setCarBrandData(newValue) {
    return (this.state.carBrandData = newValue)
  },
  setBrandSelected(newValue) {
    return (this.state.brandSelected = newValue)
  },
  setModelSelected(newValue) {
    return (this.state.modelSelected = newValue)
  },
  setCurrentTab(newValue) {
    return (this.state.currentTab = newValue)
  },
  setValidation(newValue) {
    return (this.state.v = newValue)
  },
  setLastTab(newValue) {
    return (this.state.lastTab = newValue)
  },
  setcartypeName(newValue) {
    return (this.state.getCartypeName = newValue)
  },
  setcarbrandsName(newValue) {
    return (this.state.getBrandName = newValue)
  },
  setcarmodelName(newValue) {
    return (this.state.getModelName = newValue)
  },
  setcarbuildyear(newValue) {
    return (this.state.getCarbuildyear = newValue)
  },
  setpreviousCompanyName(newValue) {
    return (this.state.getPreviousCompanyName = newValue)
  },
  getLastTab() {
    return this.state.lastTab
  },
  setBuildingType(newValue) {
    return (this.state.BuildingType = newValue)
  },
  setbuildingStructureType(newValue) {
    return (this.state.buildingStructureType = newValue)
  },
  setbuildingProductionYear(newValue) {
    return (this.state.buildingProductionYear = newValue)
  },
  setbuildingMeter(newValue) {
    return (this.state.buildingMeter = newValue)
  },
  setbuildingPropertiesValue(newValue) {
    return (this.state.buildingPropertiesValue = newValue)
  },
  setTotalTab(newValue) {
    return (this.state.totalTabs = newValue)
  },
}
