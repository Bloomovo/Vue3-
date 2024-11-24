import { ref } from 'vue'
import { defineStore } from "pinia"
import { getTopCategroyAPI, getCategoryFilterAPI } from "@/api/TopCategroy"
export const useTopCategroy = defineStore('TopCategroy', () => {
  const categoryData = ref([])
  const filterData = ref([])
  // 面包屑
  const getTopCategroy = async (id) => {
    const res = await getTopCategroyAPI(id)
    categoryData.value = res.data.result
  }
  // 二级分类面包屑
  const getCategoryFilter = async (id) => {
    const res = await getCategoryFilterAPI(id)
    filterData.value = res.data.result
  }
  return {
    categoryData,
    getTopCategroy,
    filterData,
    getCategoryFilter
  }
})
// distributionSite: '2'