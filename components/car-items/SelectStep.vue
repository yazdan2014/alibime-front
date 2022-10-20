<template>
  <!-- <div class="grid_view_wrapper col-4 col-md-4 col-lg-3 col-xl-3">
    <div class="gv_item" :class="selected ? 'border-select' : ''">
      <div class="icon icon-car-riding grid-view__icon">
        <img :src="src" alt="" />
      </div>
      <span class="grid-view__title">{{ title }}</span>
    </div>
  </div> -->
  <option selected>{{ title }}</option>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
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
