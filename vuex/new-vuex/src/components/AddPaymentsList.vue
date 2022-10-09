<template>
  <v-card class="pa-8" v-show="showAddPayments">
    <v-text-field v-model="d_payment.date"
      label="Date"/>
    <v-text-field v-model="d_payment.category"
      label="Category"/>
    <v-text-field v-model="d_payment.value"
      label="Value"/>
    <v-btn @click="onSubmit">Save <v-icon>mdi-plus</v-icon></v-btn>
  </v-card>
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
      },
      showAddPayments: true

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
    }
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
