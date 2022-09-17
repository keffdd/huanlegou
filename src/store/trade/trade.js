import { reqAddressInfo, reqShopInfo } from "@/api/index.js"
const state = {
    addressinfo: [],
    shopinfo: {}
}
const mutations = {
    GETADDRESSINDO(state, addressinfo) {
        state.addressinfo = addressinfo
    },
    GETSHOPINFO(state, shopinfo) {
        state.shopinfo = shopinfo
    }
}
const actions = {
    // 地址
    async getAddressInfo({ commit }) {
        let r = await reqAddressInfo()
            // console.log(r);
        if (r.code == 200) {
            commit('GETADDRESSINDO', r.data)
        } else {
            alert('获取地址失败')
        }
    },
    // 商品信息
    async getShopInfo({ commit }) {
        let r = await reqShopInfo()
            // console.log(r);
        if (r.code == 200) {
            commit('GETSHOPINFO', r.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}