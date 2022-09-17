import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index.js'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }

}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
            // console.log(result);
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let r = await reqGetBannerList()
        if (r.code == 200) {
            commit('GETBANNERLIST', r.data)
        }
    },
    async getFloorList({ commit }) {
        let r = await reqGetFloorList()
        if (r.code == 200) {
            commit('GETFLOORLIST', r.data)
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