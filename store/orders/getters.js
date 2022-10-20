export default {
  getOrders(state) {
    return state.orders
  },
  getOrderById: (state) => (id) => {
    return state.orders.find((item) => {
      return item._id === id
    })
  },
  // getOrderById(state) {
  //   return state.orders
  // },
  getBuyedOrders(state) {
    return state.orders.filter((item) => {
      return Number(item.status) >= 4
    })
  },
  getActiveOrders(state) {
    return state.orders.filter((item) => {
      return Number(item.status) === 6
    })
  },
  getInProccessOrders(state) {
    return state.orders.filter((item) => {
      return Number(item.status) < 4
    })
  },
}
