import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { getBannerAPI } from '@/api/banner.js'

export const useBannerStore = defineStore('banner', () => {
  const bannerList = ref([])
  const getBanner = async (params = {}) => {
    const { distributionSite = '1' } = params
    const res = await getBannerAPI(distributionSite)
    bannerList.value = res.data.result
  }
  return {
    bannerList,
    getBanner
  }
})