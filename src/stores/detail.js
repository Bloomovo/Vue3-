import { defineStore } from "pinia"
import { ref } from "vue"
import { getDetailAPI, fetchHotGoodsAPI } from "@/api/detail"
export const useDetailStore = defineStore('detail', () => {
  const detailList = ref([])
  const detailHotList = ref([])
  const getDetail = async (id) => {
    const res = await getDetailAPI(id)
    detailList.value = res.data.result
  }
  const getDetailHot = async (obj) => {
    const res = await fetchHotGoodsAPI(obj)
    detailHotList.value = res.data.result
  }
  return {
    detailList,
    getDetail,
    detailHotList,
    getDetailHot
  }
})