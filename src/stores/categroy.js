import { ref } from 'vue'
import { defineStore } from "pinia"
import { getTopCategroyAPI } from "@/api/TopCategroy"
export const useTopCategroy = defineStore('TopCategroy', () => {
  const categoryData = ref([])
  // 面包屑
  const getTopCategroy = async (id) => {
    const res = await getTopCategroyAPI(id)
    categoryData.value = res.data.result
  }
  return {
    categoryData,
    getTopCategroy
  }
})
// distributionSite: '2'