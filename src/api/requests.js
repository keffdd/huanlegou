import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入进度条
import store from '@/store'
const requests = axios.create({
        //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
        baseURL: 'http://gmall-h5-api.atguigu.cn/api',
        // baseURL: '/api',
        // 项目打包的时候不需要配置代理服务器
        // 时间不能超过5s
        timeout: 5000,
    })
    // 请求拦截器
    //请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use((config) => {
        //请求拦截器:请求头【header】,请求头能否给服务器携带参数
        //请求拦截器：其实项目中还有一个重要的作用,给服务器携带请求们的公共的参数
        //进度条开始
        nProgress.start()
            // console.log(store);
            // 获取仓库的数据，如果有就把uuid_token给请求头的userTempId
        if (store.state.detail.uuid_token) {
            config.headers.userTempId = store.state.detail.uuid_token;
        }
        if (store.state.user.token) {
            config.headers.token = store.state.user.token;
        }
        return config
    })
    // 响应拦截器
    //响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    nProgress.done()
        // 进度条结束
    return res.data
}, () => {
    return Promise.reject(new Error('faile'))
})
export default requests
//最后需要暴露:暴露的是添加新的功能的axios,即为requests