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

      // console.log(binding)
      console.log(el.parentNode)
      
      binding
      
      vnode
  },
  inserted(el,binding,vnode){
    console.log(el.parentNode)

    binding
    vnode
  },
  update(el,binding,vnode,oldVnode){
    console.log('update')
    el
    binding
    vnode
    oldVnode
  },
  componentUpdated(){
    console.log('update too')
  },
  unbind(el,binding,vnode){
    console.log('unbind')
    el
    binding
    vnode
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
