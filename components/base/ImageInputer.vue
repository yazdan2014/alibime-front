<template>
  <div>
    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      file1: null,
      file2: null,
    }
  },
}
</script>
