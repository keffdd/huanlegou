import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入进度条
const requests = axios.create({
        baseURL: '/mock',
        timeout: 5000,
    })
    // 请求拦截器
requests.interceptors.request.use((config) => {
        nProgress.start()
            // 进度条开始
        return config
    })
    // 响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done()
        // 进度条结束
    return res.data
}, () => {
    return Promise.reject(new Error('faile'))
})
export default requests