<template>
  <div>
    <transition name='fade'>
        <router-view/>
    </transition>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myFoot from './foot'
export default {
  components:{
    myFoot
  }
}
</script>

<style lang='less' scoped>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
