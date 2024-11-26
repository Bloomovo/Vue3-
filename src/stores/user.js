// 用户信息
import { getLoginAPI } from "@/api/login"
import { ref } from "vue"
import { defineStore } from "pinia"
import { useCartStore } from "./cart"
import { getGoodsAPI } from "@/api/cart"
export const useUserStore = defineStore('user', () => {
  const userInfo = ref([])
  const getLogin = async (user) => {
    user.account = 'xiaotuxian001',
    user.password = '123456'
    const res = await getLoginAPI(user)
    // pinia储存个人信息
    userInfo.value = res.data.result
    // 登录获取cartList
    const cartStore = useCartStore()
    const goodRes = await getGoodsAPI()
    cartStore.cartList = goodRes.data.result
  }
  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 退出 清除本地购物车
    const cartStore = useCartStore()
    cartStore.cartList = []
  }
  return {
    userInfo,
    getLogin,
    clearUserInfo
  }
}, {
  persist: true
})