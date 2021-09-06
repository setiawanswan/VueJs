<template>
  <div>
    <app-header/>
    <div class="container">

      <transition name="slideup">
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
      </transition>

      <transition name="appear">
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
      </transition>

      <button class="btn btn-primary" @click="display = !display">Toggle anim</button>

    </div>
    <app-footer/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      display: false
    }
  }
}
</script>

<style>

/* state */

.appear-enter {
  transform: translateX(30px);
  opacity: 0;
} 

.appear-enter-active {
  transition: all .3s ease;
}

.appear-leave {

}

.appear-leave-active {
  transform: translateX(30px);
  opacity: 0;
  transition: all .3s ease;

}

/* state */

.slideup-enter {
  opacity: 0;
}

.slideup-enter-active {
  transition: opacity 1s;
  animation: slideup 1s ease-out;
}

.slideup-leave {

}

.slideup-leave-active {
  opacity: 0;
  transition: opacity 1s;
  animation: slideDown 1s ease-out;
}

@keyframes slideup {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0x);
  }
  to {
    transform: translateY(20px);
  }
}

.container{
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
