import button1 from './button1/index';
import button2 from './button2/index';
import transcendfab from './transcendfab/index';
const components = [
  button1,button2,transcendfab
]
const install = function(Vue){
  if(install.installed){
    return;
  }
  components.map(component=>Vue.component(component.name,component))
}
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
export default {
  install,button1,button2,transcendfab
}