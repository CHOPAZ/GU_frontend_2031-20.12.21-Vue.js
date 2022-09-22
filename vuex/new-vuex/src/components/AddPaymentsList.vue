<template>
  <div class="paymentsForm">
    <div class="showAddPayments">
      <button @click="hideAddPayments">ADD NEW COSTS <span>+</span></button>
    </div>
    <div v-show="showAddPayments" class="form">
      <div class="inputForm">
        <input type="text" placeholder="Amount" v-model="value">
        <input type="text" placeholder="Type" v-model="category">
        <input type="text" placeholder="Date" v-model="date">
      </div>
      <div class="buttonControls">
        <button @click="addPayment">Add <span>+</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentsList',
  data: () => ({
    value: '',
    category: '',
    date: '',
    showAddPayments: false
  }),
  methods: {
    addPayment () {
      const { value, category, date } = this
      const data = {
        date: date || this.currenDate,
        category,
        // date: date ? date : currenDate,
        value
      }
      this.$emit('add-payment', data)
    },
    hideAddPayments () {
      this.showAddPayments = !this.showAddPayments
    },
    fillingCategory () {
      if (this.$route.params.operation === 'add') {
        this.showAddPayments = true
      }
      if (this.$route.params.category) {
        this.category = this.$route.params.category
      }
      // this.category = this.$route.params.category
      this.value = this.$route.query.value
    }
  },
  computed: {
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
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

button {
  background-color: aquamarine;
  padding: 7px 15px;
  border-width: 1px;
  border-radius: 5px;
  text-align: right;
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
