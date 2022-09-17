import { reqGetCode, reqRegister, reqUserLogin, reqUserInfo, reqUserLogout } from "@/api/index.js"
import { getToken, setToken, removeToken } from "@/utils/token.js"
const state = {
    code: '',
    token: getToken(),
    userinfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userinfo) {
        state.userinfo = userinfo
    },
    CLEAR(state) {
        state.code = ''
        state.userinfo = [],
            removeToken()
    }
}
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let r = await reqGetCode(phone)
        if (r.code == 200) {
            commit('GETCODE', r.data)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    // 注册
    async userRegister({ commit }, user) {
        let r = await reqRegister(user)
            // console.log(r);
        if (r.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(r.message));
        }
    },
    // 登录
    async UserLogin({ commit }, user) {
        let r = await reqUserLogin(user)
            // console.log(r);
        if (r.code == 200) {
            commit('USERLOGIN', r.data.token)
            setToken(r.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error(r.message))
        }
    },
    // 获取用户信息
    async userInfo({ commit }) {
        let r = await reqUserInfo()
            // console.log(r);
        if (r.code == 200) {
            commit('GETUSERINFO', r.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(r.message))
        }
    },
    // 退出登录
    async logOut({ commit }) {
        let r = await reqUserLogout()
        if (r.code == 200) {
            commit('CLEAR')
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