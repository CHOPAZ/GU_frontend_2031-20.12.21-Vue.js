import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [
      { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
      { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
      { id: 3, date: '22.03.2020', category: 'Sport', value: 450 },
      { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
      { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
      { id: 6, date: '25.03.2020', category: 'Food', value: 200 },
      { id: 7, date: '20.03.2020', category: 'Food', value: 1789 },
      { id: 8, date: '21.03.2020', category: 'Navigation', value: 70 },
      { id: 9, date: '22.03.2020', category: 'Sport', value: 360 },
      { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 696 },
      { id: 11, date: '24.03.2020', category: 'Education', value: 500 },
      { id: 12, date: '25.03.2020', category: 'Food', value: 100 }
    ],
    paymentsListById: []
  },
  mutations: {
    addPayment (state, { payment }) {
      const ids = state.paymentsList.map((i) => i.id)
      const max = Math.max(...ids)
      payment.id = max + 1
      state.paymentsList.push(payment)
      // state.paymentsList.splice(13, 1, payment)
    },
    removePayment (state, id) {
      const idx = state.paymentsList.findIndex((i) => i.id === id)
      state.paymentsList.splice(idx, 1)
    },
    editPayment (state, { payment }) {
      const item = state.paymentsList.find((i) => i.id === payment.id)
      Object.assign(item, payment)
    }
  },
  getters: {
    paymentsList: ({ paymentsList }) => paymentsList,
    getPaymentList: (state) => state.paymentsList
  },
  actions: {
    addItem (ctx, data) {
      ctx.commit('addPayment', data)
    },
    removeItem (ctx, id) {
      ctx.commit('removePayment', id)
    },
    editItem (ctx, data) {
      ctx.commit('editPayment', data)
    }
  }
})
