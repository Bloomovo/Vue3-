import { getOrderAPI } from '@/api/pay'
import { defineStore } from "pinia"
import { ref } from "vue"
// 获取支付结算订单
export const usePayStore = defineStore('pay', () => {
  const payInfo = ref()
  const getOrder = async (id) => {    
    const res = await getOrderAPI(id)
    payInfo.value = res.data.result
  }
  return {
    getOrder,
    payInfo
  }
})