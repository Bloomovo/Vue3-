// 订单结算
import { getCheckoutInfoAPI } from "@/api/order"
import { createOrderAPI } from '@/api/pay'
import { defineStore } from "pinia"
import { ref } from "vue"
// 我的订单接口导入
import { getUserOrdeAPI } from "@/api/order"
export const useOrderStore = defineStore('order', () => {
  const orderList = ref([])
  const curAddress = ref(null)
  
  const getCheckoutInfo = async () => {
    const res = await getCheckoutInfoAPI()
    orderList.value = res.data.result
    curAddress.value = orderList.value.userAddresses[0]
  }

  const orderPay = ref([])
  // 提交订单
  const createOrder = async (data) => {
    const res = await createOrderAPI(data)
    orderPay.value = res.data.result
  }

  // 获取订单列表
  const MyOrderList = ref([])
  const total = ref(0)

  // loading 加载
  const loading = ref(true)
  const isLoading = computed(() => loading.value ? true : false)
  // 我的订单
  const getUserOrder = async (params) => {
    const res = await getUserOrdeAPI(params)
    MyOrderList.value = res.data.result.items
    total.value = res.data.result.counts
    loading.value = false
  }

  return {
    orderList,
    getCheckoutInfo,
    curAddress,
    orderPay,
    createOrder,
    getUserOrder,
    MyOrderList,
    total,
    loading,
    isLoading
  }
})