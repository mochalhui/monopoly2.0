import Vue from 'vue'
import App from './App.vue'
import router from './router'
import compositionApi from "@vue/composition-api";

Vue.config.productionTip = false
Vue.use(compositionApi);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
