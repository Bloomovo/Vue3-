import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useUserStore } from './stores/user'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'
import router from './router'
// 引入初始化样式
import '@/styles/common.scss'
// 引入懒加载
import { lazyPlugin } from '@/directives/index.js'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 配置前置路由导航
const breakList = ['/cart','/user','/pay','order']
router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const token = store.userInfo.token
  if (breakList.includes(to.path) && !token) {
    console.log(to.path)
    ElMessage({ type: 'error', message: 'token不存在，请先登录'})
    next('/login')
  } else {
    next()
    return
  }
})
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
