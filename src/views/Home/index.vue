<script setup>
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeCateGory from '@/views/Home/components/HomeCateGory.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import { onMounted, ref } from 'vue'
import { useBannerStore } from '@/stores/banner.js'
import { useNewGoodsStore } from '@/stores/newGoods'
import { useHomeHotStore } from '@/stores/homeHot'
import { useProductStore } from '@/stores/homeProduct'
const bannerStore = useBannerStore()
const newGoodsStore = useNewGoodsStore()
const homeHotStore = useHomeHotStore()
const goodsProduct = useProductStore()
const loading = ref(true)
onMounted(() => {
  bannerStore.getBanner()
  newGoodsStore.getNewGoods()
  homeHotStore.getHot()
  goodsProduct.getGoods()
  loading.value = false
})
</script>

<template>
  <div
    v-loading="loading"
  >
    <div class="container">
      <HomeCateGory/>
      <HomeBanner/>  
    </div>
      <HomeNew/>
      <HomeHot/>
      <HomeProduct />
  </div>
</template>