// 创建订单生成订单ID
import { createOrderAPI } from '@/api/pay'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const usePayStore = defineStore('pay', () => {
  const orderPay = ref([])
  const createOrder = (data) => {
    const res = createOrderAPI(data)
    orderPay.value = res.data.result 
  }
  return {
    orderPay,
    createOrder
  }
})