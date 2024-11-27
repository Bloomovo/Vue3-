// 订单结算
import { getCheckoutInfoAPI } from "@/api/order"
import { createOrderAPI, getOrderAPI } from '@/api/pay'
import { defineStore } from "pinia"
import { ref } from "vue"
export const useOrderStore = defineStore('order', () => {
  const orderList = ref([])
  const curAddress = ref(null)

  const getCheckoutInfo = async () => {
    const res = await getCheckoutInfoAPI()
    orderList.value = res.data.result
    curAddress.value = orderList.value.userAddresses[0]
  }

  const orderPay = ref([])
  const payInfo = ref([])
  // 提交订单
  const createOrder = async (data) => {
    const res = await createOrderAPI(data)
    orderPay.value = res.data.result
    
  }
  // 获取支付结算订单
  const getOrder = async (id) => {
    const res = await getOrderAPI(id)
    payInfo.value = res.data.result
  }
  return {
    orderList,
    getCheckoutInfo,
    curAddress,
    orderPay,
    createOrder,
    getOrder,
    payInfo
  }
},{
  persist: true
})