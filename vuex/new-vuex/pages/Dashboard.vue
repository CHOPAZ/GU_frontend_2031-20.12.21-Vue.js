<template>
  <div>
    <v-row>
      <div class="text-h5 text-sm-h3 mb-8 mt-8">My personal coasts</div>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog
          v-model="dialog"
          width="400"
        >
          <template v-slot:activator="{on}">
            <v-btn color="teal"
              dark
              v-on="on"
            >
              ADD NEW COSTS <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card v-if="dialog">
            <AddPaymentsList
              @add-payment="addPayment"
              :payment="d_payment"
              @edit-payment="editPayment"
            />
          </v-card>
        </v-dialog>
        <PaymentsDisplay
          :paymentsList="elements"
          @edit="onEdit"
        />
        <PagiNation
          :currentPage="currentPage"
          :perPage="perPage"
          :length="c_length"
          @change-page="setCurrentPage"
          ref="pagination"
        />
      </v-col>
      <v-col>
        <BarChart style="width: 300px"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import PagiNation from '@/components/PagiNation'
import AddPaymentsList from '@/components/AddPaymentsList.vue'
import BarChart from '@/components/BarChart.vue'

import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {
    AddPaymentsList,
    PagiNation,
    PaymentsDisplay,
    BarChart
  },
  data () {
    return {
      currentPage: 1,
      dialog: false,
      d_payment: null,
      perPage: 5
    }
  },
  computed: {
    ...mapGetters(['getPaymentList']),

    c_length () {
      return this.$store.state.paymentsList.length || 0
    },

    paymentsList () {
      return this.getPaymentList
    },

    elements () {
      // какие элементов выводить
      const { perPage, currentPage } = this

      const range = {
        from: perPage * (currentPage - 1),
        to: perPage * (currentPage - 1) + perPage
      }

      return this.paymentsList.slice(range.from, range.to)
    }
  },
  methods: {
    addPayment (data) {
      this.$store.dispatch('addItem', { payment: data })
      this.dialog = false
    },
    editPayment (data) {
      this.$store.dispatch('editItem', { payment: data })
      this.dialog = false
      this.d_payment = null
    },
    onEdit (id) {
      this.d_payment = this.$store.state.paymentsList.find((i) => {
        return i.id === id
      })
      this.dialog = true
    },
    setCurrentPage (value) {
      this.currentPage = value
    },
    fillingCategory () {
      if (this.$route.params.operation === 'add') {
        this.dialog = true
      }
      if (this.$route.params.category) {
        this.d_payment.category = this.$route.params.category
      }
      this.value = this.$route.query.d_payment('value')
    }
  },
  mounted () {
    this.fillingCategory()
  }
}
</script>

<style lang="scss">

</style>
