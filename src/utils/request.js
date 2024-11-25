// 导入 axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const store = useUserStore()
const router = useRouter()
// axios 实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 从pinia中导入 token
  const token = store?.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    // 否则 退出登录
    router.replace('/login')
    return
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage({ type: 'error', message: response.data.message})
  return Promise.reject(error)
})
export default request
