<template>
  <div>
    <app-header/>
    <div class="container">
      <div>
        <button @click="compToRender = 'Home'">Home</button>
        <button @click="compToRender = 'Page'">Page</button>
        <button @click="compToRender = 'Contact'">Contact</button>
      </div>
      <div>
        <keep-alive>
          <component :is="compToRender"></component>
        </keep-alive>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import Contact from './Components/Contact.vue'
import Home from './Components/Home.vue'
import Page from './Components/Page.vue'

export default {
  data() {
    return { 
        compToRender:'Contact'
    }
  },
  components:{
    Contact,
    Home,
    Page
  },
}
</script>

<style scoped>
  .container{
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
