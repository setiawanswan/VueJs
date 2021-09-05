import Vue from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

Vue.directive('awesome', {
  bind(el,binding,vnode){
      
      el.innerHTML = binding.value
      // el.style.color = 'red'

      // Functional
      // if (binding.arg === 'red') {
      //   el.style.color = 'red'
      // } else {
      //   el.style.color = 'blue'
      // }

      // Ternary
      el.style.color = binding.modifiers.red ? 'red' : 'blue'
      el.style.fontSize = binding.modifiers.small ? '12px' : '30px'

      console.log(binding)
      
      binding
      
      vnode
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
