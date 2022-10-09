import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { Bar } from 'vue-chartjs/legacy'

Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  Bar,
  render: h => h(App)
}).$mount('#app')
