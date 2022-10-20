<template>
  <div class="_button _btn text-center" :class="selected ? 'active_' : ''">
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
<style>
._button {
  font-size: 18px;
  font-weight: 500;
  padding: 14px;
  color: #112538;
  transition: box-shadow 0.3s, border-color 0.6s;
}
._button:hover {
  cursor: pointer;
}
._btn {
  background-color: #ced4da;
  border-radius: 5px;
  margin: 10px;
}
.active_ {
  background-color: #08bcc0;
  border-radius: 5px;
}
</style>
