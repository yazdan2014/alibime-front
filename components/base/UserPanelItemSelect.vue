<template>
  <div class="panel_button" :class="selected ? 'active' : ''">
    <span class="grid-view__title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'آیتم خالی',
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
<style scoped>
.panel_button {
  font-size: 20px;
  padding: 10px;
  transition: box-shadow 0.3s, border-color 0.6s;
}
.panel_button:hover {
  cursor: pointer;
}
.active {
  background-color: #0bbbc0;
  border-radius: 5px;
}
</style>
