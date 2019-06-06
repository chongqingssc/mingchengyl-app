// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './assets/iconfont/iconfont.css';
import './assets/style.css'
import './permission'
import store from './store'
import md5 from 'js-md5';
import Toast from 'muse-ui-toast';
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)



Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(Toast);

Vue.prototype.$md5 = md5;
Vue.prototype.$ = $;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',


})
