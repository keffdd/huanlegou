import { reqGoodsInfo, reqAddOrUpdateCart } from "@/api/index.js"
import { getuuid } from "@/utils/uuid_token.js"
const state = {
    goodinfo: {},
    // 获取游客的信息，生成uuid
    uuid_token: getuuid()
}
const mutations = {
    GETGOODSINFO(state, goodinfo) {
        state.goodinfo = goodinfo
    },
}
const actions = {
    // 获取产品信息
    async getGoodsInfo({ commit }, skuId) {
        let r = await reqGoodsInfo(skuId)
        if (r.code == 200) {
            commit('GETGOODSINFO', r.data)
        }
    },
    async addOrUpdateCart({ commit }, { skuId, skuNum }) {
        //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
        let result = await reqAddOrUpdateCart(skuId, skuNum);
        // console.log(result);
        if (result.code == 200) {
            //如果加入购物车成功,返回promise即为成功
            return "ok";
        } else {
            //如果加入购物车失败，返回失败的Promise
            return Promise.reject();
        }

    }
}
const getters = {
    categoryView(state) {
        return state.goodinfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodinfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodinfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}