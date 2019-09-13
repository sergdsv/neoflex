import Vue from 'vue'
import App from './App.vue'

import animateCss from 'animate.css';
Vue.use(animateCss)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
