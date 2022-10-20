<template>
  <div class="p-3 col-md-12">
    <!-- <div class="gv_item text-center" :class="selected ? 'border-select' : ''">
      <span class="grid-view__title fs-5">{{ title }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    src: {
      type: String,
      required: false,
      default: '/img/car.svg',
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped></style>
