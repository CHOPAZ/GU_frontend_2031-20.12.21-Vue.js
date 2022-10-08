<template>
  <div>
    <h1>My personal coasts</h1>
    <button @click="showAddForm">ADD NEW COSTS <span>+</span></button>
    <PaymentsDisplay
      :paymentsList="d_data"
      @remove="onRemove"
    />
    <PagiNation
      :currentPage="1"
      :amountPage="3"
      :length="c_length"
      v-model="d_data"
      ref="pagination"
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import PagiNation from '@/components/PagiNation'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {
    PagiNation,
    PaymentsDisplay
  },
  data () {
    return {
      d_data: []
    }
  },
  computed: {
    c_length () {
      return this.$store.state.paymentsList.length || 0
    }
  },
  methods: {
    showAddForm () {
      this.$modal.show({
        title: 'Add new costs',
        content: 'AddPaymentsList'
      })
    },
    onRemove () {
      this.$refs.pagination.currentElements()
    }
  }
}
</script>

<style lang="scss">
button {
  background-color: aquamarine;
  padding: 7px 15px;
  border-width: 1px;
  border-radius: 5px;
  text-align: right;
  cursor: pointer;
}
</style>
