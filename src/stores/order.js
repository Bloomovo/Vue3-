// 订单结算
import { getCheckoutInfoAPI } from "@/api/order"
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
  return {
    orderList,
    getCheckoutInfo,
    curAddress
  }
})