<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeCateGory from '@/components/HomeCateGory.vue'
import HomeHot from '@/components/HomeHot.vue'
import HomeNew from '@/components/HomeNew.vue'
import HomeProduct from '@/components/HomeProduct.vue'
import HomePanel from '@/components/HomePanel.vue'
import { onMounted } from 'vue'
import { useBannerStore } from '@/stores/banner.js'
const bannerStore = useBannerStore()
onMounted(() => {
  bannerStore.getBanner()
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
    <HomePanel
    title="新鲜好物"
    sub-title="新鲜商品 好多商品"
    ></HomePanel>
    <HomePanel
    title="人气推荐"
    sub-title="人气推荐 好多商品"
    ></HomePanel>
</template>