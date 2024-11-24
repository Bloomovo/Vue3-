import { defineStore } from "pinia"
import { ref } from "vue"
import { getDetailAPI } from "@/api/detail"
export const useDetailStore = defineStore('detail', () => {
  const detailList = ref([])
  const getDetail = async (id) => {
    const res = await getDetailAPI(id)
    detailList.value = res.data.result
  }
  return {
    detailList,
    getDetail
  }
})