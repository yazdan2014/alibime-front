<template>
  <span class="typewriter-text">{{ text }}</span>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      text: '',
      index: 0,
    }
  },
  mounted() {
    this.typing()
  },
  methods: {
    typing() {
      let textIndex = 1
      const tmp = setInterval(() => {
        const temp = this.data[this.index]
        if (textIndex < temp.length + 1) {
          this.text = temp.substr(0, textIndex)
          textIndex++
        } else {
          setTimeout(() => {
            this.deleting()
          }, 2000)
          clearInterval(tmp)
        }
      }, 50)
    },
    deleting() {
      const temp = this.data[this.index]
      let textIndex = temp.length
      const tmp = setInterval(() => {
        if (textIndex + 1 > 0) {
          this.text = temp.substr(0, textIndex)
          textIndex--
        } else {
          if (++this.index >= this.data.length) this.index = 0

          this.typing()
          clearInterval(tmp)
        }
      }, 25)
    },
  },
}
</script>
