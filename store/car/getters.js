export default {
  getCarTypes(state) {
    return state.carTypes
  },
  getBodyInsCarTypes(state) {
    return state.carTypesBodyIns
  },
  getBodyInsById: (state) => (id) => {
    return state.carTypesBodyIns.find((item) => {
      return item.id === id
    })
  },
  // getCarTypeById: (state) => (id) => {
  //   return state.carTypes.find((item) => {
  //     return item._id === id
  //   })
  // },
  // getCarTypeItems(state) {
  //   return state.carTypes.map((item) => {
  //     return { value: item._id, text: item.name }
  //   })
  // },
  // getCarBrandsByTypeId: (state, getters) => (carTypeId) => {
  //   const carTypes = getters.getCarTypeById(carTypeId)
  //   return carTypes
  //     ? carTypes.brands.map((item) => {
  //         return { value: item._id, text: item.name }
  //       })
  //     : []
  // },
}
