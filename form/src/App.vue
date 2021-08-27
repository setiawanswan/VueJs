<template>
  <div>
    <app-header></app-header>
    <div class="container">

    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Components/Footer/Foot.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style scoped>
  .container{
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
