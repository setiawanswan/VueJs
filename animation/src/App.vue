<template>
  <div>
    <app-header/>
    <div class="container">

      <!-- <transition name="slideup">
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello2</div>
      </transition>

      <transition name="appear">
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
      </transition>

      <button class="btn btn-primary" @click="display = !display">Toggle anim</button> -->

      <!-- <hr>

      <button class="btn btn-primary" @click="status = !status">Toggle Status</button>

      <transition name="appear" mode="out-in">
        <div class="p-3 mb-2 bg-success text-white" v-if="!status" key="status_down">Status is False</div>
        <div class="p-3 mb-2 bg-success text-white" v-else key="status_up">Status is True</div>
      </transition> -->

      <!-- <transition name="appear">
        <div class="p-3 mb-2 bg-success text-white" v-if="status">Status is True</div>
      </transition> -->

      <button class="btn btn-primary" @click="custom = !custom">CUSTOM</button>

      <transition 
        name="awesome"
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__bounce"
      >
        <div class="p-3 mb-2 bg-success text-white" v-if="custom">Hello</div>
      </transition>

    </div>
    <app-footer/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      display: false,
      status: false,
      custom: true
    }
  }
}
</script>

<style>

.awesome-enter {
  opacity: 0;
}

.awesomeEnter {
  transition: all 5s ease;
}

.awesomeLeave {
  transition: all 5s ease;
  opacity: 0;
}

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
