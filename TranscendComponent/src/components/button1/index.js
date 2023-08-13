import _Vue from 'vue'
import button1 from './button1.vue'

button1.install = function(Vue){
  Vue.component(button1.name,button1)
}
export default button1;
