// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/rem.js'
import '@/assets/css/public.css'
import { Button, Rate, Overlay, Dialog, Uploader, Swipe, SwipeItem} from 'vant';

Vue.use(Button).use(Rate).use(Overlay).use(Dialog).use(Uploader).use(Swipe).use(SwipeItem)
// 
import Router from 'vue-router'

Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
