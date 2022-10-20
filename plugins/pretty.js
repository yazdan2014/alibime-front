export default ({ app }, inject) => {
  inject('pretty', {
    log(obj) {
      if (typeof obj === 'object') {
        console.log(JSON.stringify(obj, null, ' ')) // eslint-disable-line
      } else {
        console.log(obj) // eslint-disable-line
      }
    },
  })
}
