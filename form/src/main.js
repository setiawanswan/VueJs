import Vue from 'vue'
import App from './App.vue'

import Header from './Components/Header/Header.vue'

Vue.component('app-header', Header)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
