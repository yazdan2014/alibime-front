<template>
  <img :src="src" :height="height" :width="width" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
      default: '16',
    },
    width: {
      type: String,
      required: false,
      default: '16',
    },
  },
}
</script>
