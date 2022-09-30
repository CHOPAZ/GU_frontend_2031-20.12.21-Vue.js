<template>
  <div class="paymentsForm">
    <div  class="form">
      <div class="inputForm">
        <input type="text" placeholder="Amount" v-model="d_payment.value">
        <input type="text" placeholder="Type" v-model="d_payment.category">
        <input type="text" placeholder="Date" v-model="d_payment.date">
      </div>
      <div class="buttonControls">
        <button @click="onSubmit">Save <span>+</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentsList',
  props: {
    payment: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      d_payment: {
        value: null,
        category: null,
        date: null
      }
    }
  },
  beforeMount () {
    if (this.payment) {
      this.d_payment = { ...this.payment }
    }
  },
  methods: {
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    },
    onSubmit () {
      this.d_payment.id ? this.editItem() : this.addPayment()
    },
    addPayment () {
      if (!this.d_payment.date) {
        this.d_payment.date = this.currenDate()
      }
      this.$emit('add-payment', this.d_payment)
    },
    editItem () {
      if (!this.d_payment.date) {
        this.d_payment.date = this.currenDate()
      }
      this.$emit('edit-payment', this.d_payment)
    },
    fillingCategory () {
      // РАЗОБРАТЬСЯ С ЭТИМ
      // if (this.$route.params.operation === 'add') {
      //   // this.hideAddPayments()
      //   this.showAddPayments = true
      // }
      if (this.$route.params.category) {
        this.category = this.$route.params.category
      }
      this.value = this.$route.query.value
    }
  },
  mounted () {
    this.fillingCategory()
  }
}
</script>

<style lang="scss">
.paymentsForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  padding-left: 10px;
}

.showAddPayments {
  margin-bottom: 10px;
}

.form {
  width: 300px;
  align-items: center;
}

.inputForm {
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    box-sizing: border-box;
    padding: 5px 10px;
    margin-bottom: 5px;
    width: 100%;
  }
}

.buttonControls {
  display: flex;
  justify-content: right;
}

</style>
