import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }
console.log(App.components)
new Vue({
  render: h => h(App),
  // compoents: {
  //   'app': App
  // }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
