<template>
  <div>
    <app-header/>
    <div class="container">
      <div> {{ userName }} </div>
      <div v-awesome.red.big="textToRender"></div>
      <div v-awesome.blue.small="textToRender"></div>
    </div>
    <app-footer/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userName: 'Francis Gregg',
      textToRender:'Text value'
    }
  },
  mounted() {
    setTimeout(() => {
      this.userName = 'Steve'
    },3000)
  }
}
</script>

<style>
.container{
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
