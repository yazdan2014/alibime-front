<template>
  <div class="d-inline">
    <input
      :id="randomId"
      v-model="show"
      format="jYYYY-jMM-jDD"
      :label="label"
      :disabled="disabled"
      class="simple-input-class rounded input__st birthday_input"
    />
    <client-only>
      <DatePicker
        v-model="date"
        format="YYYY-MM-DD"
        :element="randomId"
        :min="min"
        :max="maxValue"
        :type="type"
        :auto-submit="autoSubmit"
        :disabled="disabled"
      />
    </client-only>
  </div>
</template>

<script>
import momentJalaali from 'moment-jalaali'
import momentTimezone from 'moment-timezone'

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'date',
    },
    displayFormat: {
      type: String,
      required: false,
      default: 'jYYYY/jMM/jDD',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'white',
    },
    autoSubmit: {
      type: Boolean,
      required: false,
      default: false,
    },
    simple: {
      type: Boolean,
      required: false,
      default: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: true,
    },
    dense: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    pastyearenabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    min: {
      type: String,
      required: false,
      default: null,
    },
    max: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      randomId: '',
      maxValue: null,
    }
  },
  computed: {
    date: {
      get() {
        if (this.pastyearenabled) {
          const d = new Date()
          d.setFullYear(d.getFullYear() - 1)
          return momentJalaali(d).tz('Asia/Tehran').format()
        } else if (this.max !== null) {
          const d = new Date(this.max)
          d.setDate(d.getDate() + 365)
          return momentTimezone(d).tz('Asia/Tehran').format()
        } else {
          const d = new Date()
          return momentJalaali(d).tz('Asia/Tehran').format()
        }
      },
      set(date) {
        this.$emit('input', momentTimezone(date).toISOString())
      },
    },
    show: {
      get() {
        if (this.value === null) return ''
        else return momentJalaali(this.value).format(this.displayFormat)
      },
      set(show) {
        this.$emit('input', momentJalaali(show).format(this.displayFormat))
      },
    },
  },
  beforeMount() {
    this.randomId = Math.random().toString(36).substr(4, 16)
  },
}
</script>
<style>
.input__st {
  padding: 10px;
  border-radius: 0.25rem !important;
  text-align: center;
  border-style: solid;
  height: 50px;
  border-width: 1px;
  width: 300px;
}
.vpd-header {
  background-color: #21508a !important;
  border-radius: 10px 10px 0 0;
}
.vpd-day:not([disabled]).selected .vpd-day-effect {
  background-color: #08bcc0 !important;
}
.vpd-day:not([disabled]):hover .vpd-day-effect {
  background-color: #08bcc0 !important;
}
.vpd-content {
  border-radius: 10px;
}
</style>
