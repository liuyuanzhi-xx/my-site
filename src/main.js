import Vue from 'vue'
import App from "./App"
import "@/styles/global.less"
import router from "./router"
import popMessage from "./utils/popMessage"
import "./mock";
import "@/utils/eventBus"


Vue.config.productionTip = false;
Vue.config.devtools = true;
//注册全局指令
import vLoading from "./directives/loading"
import vLazy from "./directives/lazy"
Vue.directive("loading", vLoading)
Vue.directive("lazy", vLazy)

Vue.prototype.popMessage = popMessage;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')