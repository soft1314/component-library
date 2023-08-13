import _Vue from 'vue'
import button1 from "./button1/button1.vue";

function install(Vue) {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(button1.name, button1);
};

export default install;
