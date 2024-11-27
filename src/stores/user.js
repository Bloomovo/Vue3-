// 用户信息
import { getLoginAPI } from "@/api/login"
import { ref } from "vue"
import { defineStore } from "pinia"
import { useCartStore } from "./cart"
import { getGoodsAPI } from "@/api/cart"
// 猜你喜欢接口导入
import { getLikeListAPI } from "@/api/user"
export const useUserStore = defineStore('user', () => {
  const userInfo = ref([])
  const likeList = ref([])
  const getLogin = async (user) => {
    user.account = 'heima293',
    user.password = 'hm#qd@23!'
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
  // 猜你喜欢
  const getLikeList = async () => {
    const res = await getLikeListAPI({ limit: 4 })
    likeList.value = res.data.result
  }
  return {
    userInfo,
    getLogin,
    clearUserInfo,
    getLikeList,
    likeList
  }
}, {
  persist: true
})