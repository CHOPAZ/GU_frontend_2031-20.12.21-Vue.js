import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_DATA = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
    { id: 7, date: '20.03.2020', category: 'Food', value: 1789 },
    { id: 8, date: '21.03.2020', category: 'Navigation', value: 70 },
    { id: 9, date: '22.03.2020', category: 'Sport', value: 360 }
  ],
  page4: [
    { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 696 },
    { id: 11, date: '24.03.2020', category: 'Education', value: 500 },
    { id: 12, date: '25.03.2020', category: 'Food', value: 100 }
  ]
}
export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListById: []
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      //  получение уникального id (т.е сравнивает если такие id в API_DATA
      const uniqIdObj = paymentsList.filter((item) => {
        return state.paymentsListById.indexOf(item.id) < 0
      })
      // получаем из uniqIdObj все id
      const uniqId = uniqIdObj.map(obj => obj.id)
      state.paymentsList.push(...uniqIdObj)
      state.paymentsListById.push(...uniqId)
    //  теперь когда будут приходить новые данные будет проверка, если что то есть то дополняем, если ничего нет то берем то что есть
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
  },
  getters: {
    paymentsList: ({ paymentsList }) => paymentsList
  },
  actions: {
    fetchData ({ commit }, page) {
      setTimeout(() => {
        const initialPaymentsList = API_DATA[`page${page}`]
        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 0)
    }
  }
})
