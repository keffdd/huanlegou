import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
Vue.config.productionTip = false
import TypNav from '@/components/TypNav/TypNav.vue'
import PagiNation from '@/components/Pagination/PagiNation'
// import { reqCategoryList } from '@/api/index'
import store from '@/store/index.js'
import '@/mock/mockServe.js'
import 'swiper/css/swiper.css'
// 将api的全部请求函数统一引入
import * as API from "@/api/index.js"
// console.log(API);
// reqCategoryList()
// import { reqGetSearchInfo } from "@/api/index.js"

// console.log(reqGetSearchInfo({}));
Vue.component(TypNav.name, TypNav)
Vue.component(PagiNation.name, PagiNation)
import { Button, MessageBox } from 'element-ui';
// 全局注册
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/2.gif'
Vue.use(VueLazyload, {
        loading
    })
    // 引入表单验证的插件
import "@/plugins/validate.js"
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    },
    router,
    store
}).$mount('#app')