import _Vue from 'vue'
import button2 from './button2.vue'

button2.install = function(Vue){
  Vue.component(button2.name,button2)
}
export default button2;
