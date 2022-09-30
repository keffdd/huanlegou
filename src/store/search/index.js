import { reqGetSearchInfo } from '@/api/index.js'
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        // console.log(params);
        let r = await reqGetSearchInfo(params)
        if (r.code == 200) {
            commit('GETSEARCHLIST', r.data)
        }
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
            // 因为网络问题，访问不到数据为空数组
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}