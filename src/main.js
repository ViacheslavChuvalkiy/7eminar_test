import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import './assets/icons/video.svg';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
