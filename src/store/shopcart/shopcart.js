import { reqShopCart, reqDeleteCart, reqUpdateChecked } from '@/api/index.js'
const state = {
    ShopCartList: []
}
const mutations = {
    GETSHOPCARTLIST(state, ShopCartList) {
        state.ShopCartList = ShopCartList
    }
}
const actions = {
    //获取用户购物车的数据
    async getShopCart({ commit }) {
        let r = await reqShopCart()
            // console.log(r);
        if (r.code == 200) {
            commit("GETSHOPCARTLIST", r.data)
        }
    },
    //删除某一个商品的数据
    async getDeleteCart({ commit }, skuId) {
        let r = await reqDeleteCart(skuId)
        if (r.code == 200) {
            return 'ok';
        } else {
            return Promise.reject();
        }
    },
    //修改某一个商品勾选状态
    async updateChecked({ commit }, { skuId, isChecked }) {
        let r = await reqUpdateChecked(skuId, isChecked)
        if (r.code == 200) {
            return 'ok';
        } else {
            return Promise.reject();
        }
    },
    // 删除选中的商品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
            //获取购物车商品的个数,进行遍历
        getters.ShopCartList.cartInfoList.forEach(item => {
            let Promise = item.isChecked == 1 ? dispatch('getDeleteCart', item.skuId) : ''
            PromiseAll.push(Promise)
        });
        //Promise.all():参数需要的是一个数组【数组里面需要promise】
        //Promise.all()执行一次,返回的是一个Promise对象,Promise对象状态：成功、失败取决于什么?
        //成功、还是失败取决于数组里面的promise状态:四个都成功、返回成功Promise、只要有一个失败、返回Promise失败状态！！！
        return Promise.all(PromiseAll)
    },
    //修改全部商品的勾选的状态
    updatecheckedAll({ dispatch, state }, isChecked) {
        // console.log(state.ShopCartList);
        let PromiseAll = []
        state.ShopCartList[0].cartInfoList.forEach(item => {
            let Promise = dispatch('updateChecked', { skuId: item.skuId, isChecked })
            PromiseAll.push(Promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    ShopCartList(state) {
        return state.ShopCartList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}