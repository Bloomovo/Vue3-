import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getGoodsAPI } from '@/api/product.js'
export const useProductStore = defineStore('product', () => {
  const goodsProduct = ref([])
  const getGoods = async () => {
    const res = await getGoodsAPI()
    goodsProduct.value = res.data.result
  }
  return {
    goodsProduct,
    getGoods
  }
})