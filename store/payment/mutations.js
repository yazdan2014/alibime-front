export default {
  addPay(state, pay) {
    payFixes([pay])
    state.payments.push(pay)
  },
  getPayment(state, pay) {
    state.payments = pay
  },
  setPayments(state, pay) {
    payFixes(pay)
    state.payments = pay
  },
  verifyTransaction(state, pay) {
    state.payments = pay
  },
}
function payFixes(pays, rootState) {
  pays.forEach((element) => {})
}
