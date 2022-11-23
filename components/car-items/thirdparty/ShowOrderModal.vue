<template>
  <div>
    <b-modal id="modal-prevent-closing" ref="checkout" v-model="visible" hide-header hide-footer size="lg">
      <div class="ch__data">
        {{ order_info }}
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      loading: false,
      order_info: [],
    }
  },
  props: {
    // cartype: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    // carbrand: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    // carmodel: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
  },
  computed: {},
  mounted() {
    if (document.getElementById('choice-test')) {
      const element = document.getElementById('choice-test')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
    if (document.getElementById('choice-remove-ins')) {
      const element = document.getElementById('choice-remove-ins')
      // eslint-disable-next-line
      const example = new Choices(element, {
        searchEnabled: false,
      })
      this.example_ = example
    }
  },
  methods: {
    getOrder(_id) {
      this.$store.dispatch('orders/getOrderbyID', _id).then((result) => {
        console.log(result)
        this.order_info = result
      })
    },
    showModal() {
      this.visible = true
      console.log('modal-visible')
    },
    exit() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
.select__ {
  width: 80%;
}
.right_line {
  width: 2px;
  height: 16px;
  border-radius: 2px;
  background-color: #08bcc0;
  display: inline-block;
  vertical-align: middle;
}
</style>
