<template>
  <div class="p-2 rounded checkbox-form">
    <div class="form-check">
      <input
        id="flexCheckDefault-1"
        class="form-check-input"
        type="checkbox"
        value=""
      />
      <label class="newsletter form-check-label" for="flexCheckDefault-1">
        {{ label }}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    label: { type: String, required: true },
  },
  // computed: {
  //   isChecked() {
  //     if (this.modelValue instanceof Array) {
  //       return this.modelValue.includes(this.value)
  //     }
  //     // Note that `true-value` and `false-value` are camelCase in the JS
  //     return this.modelValue === this.trueValue
  //   },
  // },
  // methods: {
  //   updateInput(event) {
  //     let isChecked = event.target.checked
  //     if (this.modelValue instanceof Array) {
  //       let newValue = [...this.modelValue]
  //       if (isChecked) {
  //         newValue.push(this.value)
  //       } else {
  //         newValue.splice(newValue.indexOf(this.value), 1)
  //       }
  //       this.$emit('change', newValue)
  //     } else {
  //       this.$emit('change', isChecked ? this.trueValue : this.falseValue)
  //     }
  //   },
  // },
}
</script>
<style scoped>
.checkbox-form {
  cursor: pointer;
}
</style>
