import Vue from 'vue'
import AppDonations from './AppDonations.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppDonations),
}).$mount('#app')
