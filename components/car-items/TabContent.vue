<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      isValidated: false,
    }
  },
  created() {
    this.isActive = this.selected
  },
}
</script>
