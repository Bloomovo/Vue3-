import { ref } from 'vue'
import { defineStore } from "pinia"
import { getTopCategroyAPI, getCategoryFilterAPI, getSubCategoryAPI} from "@/api/TopCategroy"
export const useTopCategroy = defineStore('TopCategroy', () => {
  const categoryData = ref([])
  const filterData = ref([])
  const goodList = ref([])
  const disabled = ref(false)
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
  // 二级分类商品
  const getSubCategory = async (data) => {
    const res = await getSubCategoryAPI(data)
    goodList.value = res.data.result
  }
  const getSubCategoryScroll = async (data) => {
    const res = await getSubCategoryAPI(data)
    goodList.value.items = goodList.value.items.concat(res.data.result.items)
    if (res.data.result.items.length === 0) {
      disabled.value = true
    }
  }
  return {
    categoryData,
    getTopCategroy,
    filterData,
    getCategoryFilter,
    goodList,
    getSubCategory,
    getSubCategoryScroll
  }
})
// distributionSite: '2'