import { defineStore } from "pinia"
import { computed, ref } from "vue"
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
  // 商品总数量
  const allCount = computed(() => {
    return cartList.value.reduce((sum, item) => {
      return sum += item.count
    }, 0)
  })
  // 商品总价
  const total = computed(() => {
    return cartList.value.reduce((sum, item) => {
      return sum += item.count * item.price
    }, 0)
  })
  // 商品删除
  const delCart = (id) => {
    cartList.value = cartList.value.filter(item => item.skuId !== id)
  }
  // 购物车列表
  // 单选功能
  const singleCheck = (id, flag) => {
    const good = cartList.value.find(item => item.skuId === id)
    good.selected = flag
  }
  // 全选按钮状态
  const isAll = computed(() => cartList.value.every(item => item.selected))
  // 全选功能
  const allCheck = (flag) => {
    cartList.value.forEach(item => item.selected = flag)
  }
  // 已选数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item)=> sum += item.count, 0))
  // 已选总价
  const selectedTotal = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item)=> sum += item.count * item.price, 0))
  return {
    cartList,
    addCartList,
    allCount,
    total,
    delCart,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedTotal
  }
}, {
  persist: true
})