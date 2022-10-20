export default {
  getFireInsOffer(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .getFireInsOffer(data)
        .then((result) => {
          const order = result
          vuexContext.commit('getFireInsOffer', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getThirdPartyOffer(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .getThirdPartyOffer(data)
        .then((result) => {
          const order = result
          vuexContext.commit('getThirdPartyOffer', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getCarBodyOffer(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .getCarBodyOffer(data)
        .then((result) => {
          const order = result
          vuexContext.commit('getCarBodyOffer', order)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
}
