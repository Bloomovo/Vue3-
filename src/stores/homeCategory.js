import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/layout.js'
// Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字(id)
export const useCategoryStore = defineStore('category', () => {
  // 导航数据
  const categoryStoreList = ref([])
  // 
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryStoreList.value = res.data.result
  }
  return {
    getCategory,
    categoryStoreList
  }
})