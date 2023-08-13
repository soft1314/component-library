import YButton1 from './button1/button1.vue'
import _Vue from 'vue'

[YButton1].map(item=>{
  item.install = Vue => {
    if (!Vue) {
      window.Vue = Vue = _Vue
    }
    Vue.component(item.name, item)
  }
})

export default {
  YButton1
}
