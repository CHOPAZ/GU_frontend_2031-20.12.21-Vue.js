<template>
  <div>
      <h1>My personal coasts</h1>
      <AddPaymentsList @add-payment="addPayment"/>
      <PaymentsDisplay
        :paymentsList="currentElements"
      />
      <PagiNation
        :currentPage="page"
        :amountPage="amountPage"
        :length="12"
        @pagination="onChangePage"
      />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import AddPaymentsList from '@/components/AddPaymentsList.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import PagiNation from '@/components/PagiNation'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {
    PagiNation,
    AddPaymentsList,
    PaymentsDisplay
  },
  data () {
    return {
      page: 1,
      amountPage: 3
    }
  },
  computed: {
    ...mapGetters(['paymentsList']),
    // вывод 10-ти элементов на страницу
    currentElements () {
      const { amountPage, page } = this
      return this.paymentsList.slice(
        amountPage * (page - 1),
        amountPage * (page - 1) + amountPage)
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
      this.fetchData(this.page)
    }
  },
  created () {
    this.fetchData(1)
  }
}
</script>

<style scoped>

</style>
