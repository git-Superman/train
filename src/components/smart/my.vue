<template>
<div>
<transition name='fade' mode='out-in'>
        <router-view></router-view>
</transition>
</div>
</template>
<style lang="less" scoped>
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