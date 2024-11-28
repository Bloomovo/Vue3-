import { defineStore } from "pinia"
import { computed, ref } from "vue"
// ElMessage
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// 加入购物车和删除购物车接口
import { insertCartAPI, delCartAPI, memberGoodAPI, memberGoodsAPI, getGoodsAPI } from "@/api/cart"
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const addCartList = async (goods) => {
    // 商品是否存在
    const good = cartList.value.find(item => item.skuId === goods.skuId)
    // 商品存在 count ++
    if (good) {
      good.count += goods.count
      // 修改商品数量
      const { skuId, count, selected } = good
      await memberGoodAPI({skuId, count, selected })
      ElMessage({ type: 'success', message: `${goods.name}现已加入${good.count}件`})
      // 不存在加入cartList
    } else {
      cartList.value.push(goods)
      // 将本地购物车数据，更新到接口数据
      const { skuId, count } = goods
      await insertCartAPI({ skuId, count })
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
  const delCart = async (id) => {
    const ids = cartList.value.map(item => {
      if (item.skuId === id) {
        return item.skuId
      }
    })
    cartList.value = cartList.value.filter(item => item.skuId !== id)
    // 将本地购物车数据，更新到接口数据
    await delCartAPI(ids)
  }
  // 购物车列表
  // 单选功能
  const singleCheck = async (id, flag) => {
    const good = cartList.value.find(item => item.skuId === id)
    good.selected = flag
    // 修改商品选中状态
    const { skuId, count, selected } = good
    await memberGoodAPI({skuId, count, selected })
  }
  // 全选按钮状态
  const isAll = computed(() => cartList.value.every(item => item.selected))
  // 全选功能
  const allCheck = async (flag) => {
    cartList.value.forEach(item => item.selected = flag)
    // 修改商品全选状态
    const ids = cartList.value.map(item => item.skuId)
    await memberGoodsAPI({flag, ids })
  }
  // 已选数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item)=> sum += item.count, 0))
  // 已选总价
  const selectedTotal = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item)=> sum += item.count * item.price, 0))
  // 获取最新购物车列表
  const getGoods = async () => {
    const res = await getGoodsAPI()
    cartList.value = res.data.result
  }
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
    selectedTotal,
    getGoods
  }
}, {
  persist: true
})