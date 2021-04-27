//数据仓库模块
import Vuex from "vuex"
import Vue from "vue"
import setting from "./setting"
import banner from "./banner"

Vue.use(Vuex); //应用vuex插件

const store = new Vuex.Store({
    modules: {
        setting,
        banner
    },
    strict: true
})
window.store = store;
export default store;