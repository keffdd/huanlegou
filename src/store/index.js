import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home/index.js'
import search from './search/index.js'
import detail from './detail/index.js'
import shopcart from './shopcart/shopcart.js'
import user from './user/user'
import trade from './trade/trade.js'

export default new Vuex.Store({
    modules: { home, search, detail, shopcart, user, trade }
})