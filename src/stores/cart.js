import { defineStore } from "pinia"
import { ref } from "vue"
// ElMessage
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const addCartList = (goods) => {
    // 商品是否存在
    const good = cartList.value.find(item => item.skuId === goods.skuId)
    // 商品存在 count ++
    if (good) {
      good.count += goods.count
      ElMessage({ type: 'success', message: `${goods.name}现已加入${good.count}件`})
      // 不存在加入cartList
    } else {
      cartList.value.push(goods)
      ElMessage({ type: 'success', message: `${goods.name}现已加入购物车`})
    }
  }
  return {
    cartList,
    addCartList
  }
})