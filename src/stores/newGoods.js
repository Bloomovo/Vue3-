// 新鲜好物
import { getNewGoodsAPI } from '@/api/newGoods.js'
import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useNewGoodsStore = defineStore('newGoods', () => {
const newList = ref([])
const getNewGoods = async () => {
  const res = await getNewGoodsAPI()
  newList.value = res.data.result
}
return {
  newList,
  getNewGoods
}
})