export default {
  setOrders(state, orders) {
    orderFixes(orders)
    state.orders = orders
  },
  addOrder(state, order) {
    orderFixes([order])
    state.orders.push(order)
  },
  getOrderById(state, order) {
    state.orders = order
  },
  setImageOrder(state, order) {
    state.orders = order
  },
  getImageOrder(state, order) {
    state.orders = order
  },
  editOrder(state, order) {
    const index = state.orders.findIndex((item) => {
      return item._id === order._id
    })
    if (index !== -1) {
      orderFixes([order])
      state.orders.splice(index, 1, order)
    }
  },
  deleteOrder(state, id) {
    const index = state.orders.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.orders.splice(index, 1)
  },
}

function orderFixes(orders, rootState) {
  orders.forEach((element) => {})
}
