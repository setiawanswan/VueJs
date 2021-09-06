import Vue from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
