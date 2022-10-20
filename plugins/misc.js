export default ({ app }, inject) => {
  inject('misc', {
    cloneDeep(obj) {
      if (!obj) return
      return JSON.parse(JSON.stringify(obj))
    },
  })
}
