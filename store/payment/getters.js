export default {
  getPaymentById: (state) => (id) => {
    return state.payments.find((item) => {
      return item.id === id
    })
  },
}
