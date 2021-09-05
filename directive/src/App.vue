<template>
  <div>
    <app-header/>
    <div class="container">
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
      textToRender:'Text value'
    }
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
