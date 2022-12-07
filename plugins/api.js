const urlRequestOTP = '/account/otp/moblie'
const urlConfirmOTP = '/account/otp/confirm'
const urlLogout = '/account/logout'
const urlGetAccountInfo = 'account/info'
const urlEditAccountInfo = 'account/info'
const urlGetReminders = 'reminder'
const urlAddReminder = 'reminder'
const urlDeleteReminder = 'reminder/{reminderId}'
const urlGetOrders = 'order'
const urlGetOrderById = 'order/{orderId}'
const urlAddOrder = 'order'
const urlAddCarBodyOrder = 'order/car-body'
const urlEditCarBodyOrder = 'order/car-body'
const urlEditOrder = 'order'
const urlDeleteOrder = 'order'
const urlEditStatusOrder = 'order/status'
const urlUploadImageOrder = 'order/image/{orderId}/{name}'
const urlDownloadImageOrder = '/order/downloadImage/{imageName}'
const urlFireInsOffers = '/offer/fire-ins/'
const urlThirdPartyOffers = '/offer/thirdparty/'
const urlCarBodyOffers = '/offer/car-body/'
const urlCarData = 'car/data'
const createPay = 'payment/gopayment'
const _getPayById = 'payment/getbyid'
const verifyTransaction = 'payment/verify'
const urlGetPayments = 'payment'
const urlGetTickets = 'ticket'
const urlNewTicket = 'ticket'
const axios = require('axios')

export default ({ app }, inject) => {
  inject('api', {
    requestOTP({ mobilePhone }) {
      return new Promise((resolve, reject) => {
        app.$axios
          .$post(urlRequestOTP, {
            mobilePhone,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    confirmOTP({ mobilePhone, confirmationCode, tempToken }) {
      return new Promise((resolve, reject) => {
        app.$axios
          .$post(urlConfirmOTP, {
            mobilePhone,
            confirmationCode,
            tempToken,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getInfo() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$get(urlGetAccountInfo)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
            console.log(app.store.state.auth.token)
          })
      })
    },
    editInfo(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$put(urlEditAccountInfo, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlLogout)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getReminders() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(urlGetReminders)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addReminder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlAddReminder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteReminder(reminderId) {
      const url = String(urlDeleteReminder).replace('{reminderId}', reminderId)
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$delete(url)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getOrders() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(urlGetOrders)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getPayments() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(urlGetPayments)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getOrderbyID(_id) {
      const url = String(urlGetOrderById).replace('{orderId}', _id)
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(url)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addOrder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlAddOrder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    carBodyAddOrder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlAddCarBodyOrder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    carBodyEditOrder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$put(urlEditCarBodyOrder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editOrder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$put(urlEditOrder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteOrder(orderId) {
      const url = String(urlDeleteOrder)
      const body = JSON.stringify({
        _id: orderId,
      })
      const config = {
        method: 'delete',
        url: process.env.API_BASE_URL + '/' + url,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'X-Access-Token': app.store.state.auth.token,
        },
        data: body,
      }
      return new Promise((resolve, reject) => {
        axios(config)
          .then(function (result) {
            resolve(result)
          })
          .catch(function (error) {
            reject(app.$mhandler.check(error))
          })
      })
      // const url = String(urlDeleteOrder)
      // return new Promise((resolve, reject) => {
      //   app.$axios
      //     .create({
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Cache-Control': 'no-cache',
      //         'X-Access-Token': app.store.state.auth.token,
      //       },
      //     })
      //     .$delete(url)
      //     .then((result) => {
      //       resolve(result)
      //     })
      //     .catch((error) => {
      //       reject(app.$mhandler.check(error))
      //     })
      // })
    },
    editStatusOrder(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$put(urlEditStatusOrder, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    uploadImageOrder(imageFile, orderId, name) {
      const url = String(urlUploadImageOrder).replace('{orderId}', orderId).replace('{name}', name)
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('image', imageFile)

        app.$axios
          .create({
            headers: {
              // 'Content-Type': 'application/json',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(url, formData)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    downloadImageOrder(imageName) {
      const url = String(urlDownloadImageOrder).replace('{imageName}', imageName)
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              // 'Content-Type': 'application/json',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$get(url, {
            responseType: 'arraybuffer',
          })
          .then((result) => {
            resolve(Buffer.from(result).toString('base64'))
          })
          // .then((result) => {
          //   // Buffer.from(result.data, 'binary').toString('base64')
          //   resolve(base64.encode(result.data))
          // })
          .catch((error) => {
            reject(app.$mhandler.check(error))
            console.log(error)
          })
      })
    },
    getCarData() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(urlCarData)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getThirdPartyOffer(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlThirdPartyOffers, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getCarBodyOffer(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlCarBodyOffers, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getFireInsOffer(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(urlFireInsOffers, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    createPayment(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Access-Token': app.store.state.auth.token,
            },
          })
          .$post(createPay, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getPaybyID(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(_getPayById, data)
          .then((result) => {
            console.log(result)
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    verifyTrans(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(verifyTransaction, data)
          .then((result) => {
            console.log(result)
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getTickets() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$get(urlGetTickets)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    newTicket(data) {
      const url = String(urlNewTicket)
      const body = JSON.stringify({
        orderId: data.orderId,
        title: data.title,
        text: data.text,
        attachmentsURL: data.attachmentsURL,
      })
      console.log(data)
      const config = {
        method: 'post',
        url: process.env.API_BASE_URL + '/' + url,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'X-Access-Token': app.store.state.auth.token,
        },
        data: body,
      }
      return new Promise((resolve, reject) => {
        axios(config)
          .then(function (result) {
            resolve(result)
          })
          .catch(function (error) {
            reject(app.$mhandler.check(error))
          })
      })
    },
  })
}
