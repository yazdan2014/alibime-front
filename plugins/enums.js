const INSURANCE_TYPE = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'بیمه شخص ثالث' },
  { value: 2, text: 'بیمه بدنه' },
  { value: 3, text: 'بیمه عمر' },
  { value: 4, text: 'بیمه آتش سوزی' },
  { value: 5, text: 'بیمه مسئولیت پزشکان' },
  { value: 6, text: 'بیمه درمان' },
]

const QUESTION = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'بله' },
  { value: 2, text: 'خیر' },
]

const GENDER = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'مرد' },
  { value: 2, text: 'زن' },
]

const VALIDITY_DURATION = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'یک ماهه' },
  { value: 2, text: 'سه ماهه' },
  { value: 3, text: 'شش ماهه' },
  { value: 4, text: 'یک ساله' },
]

const REMINDER_CYCLE = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'یک ماهه' },
  { value: 2, text: 'سه ماهه' },
  { value: 3, text: 'شش ماهه' },
  { value: 4, text: 'یک ساله' },
]

const PROVINCE = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'تهران' },
  { value: 2, text: 'اصفهان' },
  { value: 3, text: 'فارس' },
]

const ORDER_STATUS = [
  { value: 0, text: '' },
  { value: 1, text: 'ورود اطلاعات' },
  { value: 2, text: 'تکمیل اطلاعات' },
  { value: 3, text: 'در انتظار پرداخت' },
  { value: 4, text: 'در حال بررسی' },
  { value: 5, text: 'در دست صدور' },
  { value: 6, text: 'تکمیل' },
]

const EnumsValues = {
  INSURANCE_TYPE,
  QUESTION,
  GENDER,
  VALIDITY_DURATION,
  ORDER_STATUS,
  PROVINCE,
  REMINDER_CYCLE,
}

export default ({ app }, inject) => {
  inject('enums', {
    getEnumsValues(value = null) {
      return value === null ? EnumsValues : EnumsValues[value]
    },
    getEnumText(item, index) {
      if (typeof index === 'undefined' || index === null || !(index >= 0)) {
        return ''
      }
      return Number(index) < EnumsValues[item].length
        ? EnumsValues[item][index].text
        : ''
    },
    getEnumColor(item, index) {
      if (typeof index === 'undefined' || index === null || !(index >= 0)) {
        return ''
      }
      return EnumsValues[item][index].color
    },
    getEnumTextByValue(item, value) {
      if (typeof value === 'undefined' || value === null || !(value >= 0)) {
        return ''
      }
      const obj = EnumsValues[item].find((item) => {
        return item.value === value
      })
      return obj ? obj.text : ''
    },
  })
}
