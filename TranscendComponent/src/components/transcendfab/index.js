import _Vue from 'vue'
import transcendfab from './transcendfab.vue'

transcendfab.install = function(Vue){
  Vue.component(transcendfab.name,transcendfab)
}
export default transcendfab;
