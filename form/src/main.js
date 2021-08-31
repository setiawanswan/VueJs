import Vue from 'vue'
import App from './App.vue'

import Header from './Components/Header/Header.vue'
import Footer from './Components/Footer/Foot.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
