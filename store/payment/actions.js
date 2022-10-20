export default {
  createPayment(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .createPayment(data)
        .then((result) => {
          const pay = result
          vuexContext.commit('addPay', pay)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getPayments(vuexContext) {
    return new Promise((resolve, reject) => {
      const orders = vuexContext.rootState.orders
      if (orders.length > 0) return resolve(orders)
      this.$api
        .getPayments()
        .then((result) => {
          const payments = [...result]
          vuexContext.commit('setPayments', payments)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getPaymentbyID(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .getPaybyID(data)
        .then((result) => {
          const pay = result
          vuexContext.commit('getPayment', pay)
          resolve(result)
        })
        .catch((status) => {
          console.log(status)
          reject(status)
        })
    })
  },
  verifyTransaction(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .verifyTrans(data)
        .then((result) => {
          const pay = result
          vuexContext.commit('verifyTransaction', pay)
          resolve(result)
        })
        .catch((status) => {
          console.log(status)
          reject(status)
        })
    })
  },
}
