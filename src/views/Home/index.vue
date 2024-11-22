<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeCateGory from '@/components/HomeCateGory.vue'
import HomeHot from '@/components/HomeHot.vue'
import HomeNew from '@/components/HomeNew.vue'
import HomeProduct from '@/components/HomeProduct.vue'
import HomePanel from '@/components/HomePanel.vue'
import { onMounted } from 'vue'
import { useBannerStore } from '@/stores/banner.js'
import { useNewGoodsStore } from '@/stores/newGoods'
import { useHomeHotStore } from '@/stores/homeHot'
import { useProductStore } from '@/stores/homeProduct'
const bannerStore = useBannerStore()
const newGoodsStore = useNewGoodsStore()
const homeHotStore = useHomeHotStore()
const goodsProduct = useProductStore()
onMounted(() => {
  bannerStore.getBanner()
  newGoodsStore.getNewGoods()
  homeHotStore.getHot()
  goodsProduct.getGoods()
})
</script>

<template>
  <div class="container">
    <HomeCateGory/>
    <HomeBanner/>  
  </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct />
</template>