<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="../src/assets/logo.png">
      <h1>My personal coasts</h1>
    </header>
    <main>
      <AddPaymentsList @add-payment="addPayment"/>
      <PaymentsDisplay
        :paymentsList="currentElements"
      />
      <PagiNation
        :currentPage="page"
        :amountPage="amountPage"
        :length="paymentsList.length"
        @pagination="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentsList from './components/AddPaymentsList.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import PagiNation from '@/components/PagiNation'

export default {
  name: 'App',
  components: {
    PagiNation,
    AddPaymentsList,
    PaymentsDisplay
  },
  data () {
    return {
      page: 1,
      amountPage: 5
    }
  },
  computed: {
    ...mapGetters(['paymentsList']),
    // вывод 10-ти элементов на страницу
    currentElements () {
      const { amountPage, page } = this
      return this.paymentsList.slice(amountPage * (page - 1), amountPage * (page - 1) + amountPage)
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      this.ADD_PAYMENT_DATA(data)
    },
    onChangePage (numberPage) {
      this.page = numberPage
    }
  },
  created () {
    this.fetchData()
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
