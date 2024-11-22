import { getHotAPI } from "@/api/homeHot"
import { defineStore } from 'pinia'
import { ref } from "vue"
export const useHomeHotStore = defineStore('homeHot', () => {
  const hotList = ref([])
  const getHot = async () => {
    const res = await getHotAPI()
    hotList.value = res.data.result
  }
  return {
    hotList,
    getHot
  }
})