<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>My personal coasts</h1>
    </header>
    <main>
      <AddPaymentsList @add-payment="addPayment"/>
      <PaymentsDisplay
        :paymentsList="paymentsList"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentsList from '@/components/AddPaymentsList.vue'

export default {
  name: 'App',
  components: {
    AddPaymentsList,
    PaymentsDisplay
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    // fetchPaymentsData () {
    //   return [
    //     {
    //       date: '28.03.2020',
    //       category: 'Food',
    //       value: 169
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Transport',
    //       value: 360
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Food',
    //       value: 532
    //     }
    //   ]
    // },
    addPayment (data) {
      this.paymentsList.push(data)
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
