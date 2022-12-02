export default {
  getOrders(vuexContext) {
    return new Promise((resolve, reject) => {
      const orders = vuexContext.rootState.orders
      if (orders.length > 0) return resolve(orders)
      this.$api
        .getOrders()
        .then((result) => {
          const orders = [...result]
          vuexContext.commit('setOrders', orders)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getOrderbyID(vuexContext, _id) {
    return new Promise((resolve, reject) => {
      this.$api
        .getOrderbyID(_id)
        .then((result) => {
          const order = result
          vuexContext.commit('getOrderById', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addOrder(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addOrder(data)
        .then((result) => {
          const order = result
          vuexContext.commit('addOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  carBodyAddOrder(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .carBodyAddOrder(data)
        .then((result) => {
          const order = result
          vuexContext.commit('addOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  carBodyEditOrder(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .carBodyEditOrder(data)
        .then((result) => {
          const order = result
          vuexContext.commit('editOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editOrder(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editOrder(data)
        .then((result) => {
          const order = result
          vuexContext.commit('editOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteOrder(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteOrder(id)
        .then((result) => {
          vuexContext.commit('deleteOrder', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  newTicket(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .newTicket(data)
        .then((result) => {
          vuexContext.commit('newTicket', data)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getTickets(vuexContext) {
    return new Promise((resolve, reject) => {
      this.$api
        .getTickets()
        .then((result) => {
          const tickets = [...result]
          vuexContext.commit('getTickets', tickets)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },

  editStatusOrder(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editStatusOrder(data)
        .then((result) => {
          const order = result
          vuexContext.commit('editOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  uploadImageOrder(vuexContext, { imageFile, orderId, name }) {
    return new Promise((resolve, reject) => {
      this.$api
        .uploadImageOrder(imageFile, orderId, name)
        .then((result) => {
          const order = result
          vuexContext.commit('setImageOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  downloadImageOrder(vuexContext, imageName) {
    return new Promise((resolve, reject) => {
      this.$api
        .downloadImageOrder(imageName)
        .then((result) => {
          const order = result
          vuexContext.commit('getImageOrder', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
          console.log(status)
        })
    })
  },
}
