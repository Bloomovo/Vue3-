<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TopCategory from './components/TopCategory.vue'
import categroyBanner from './components/categroyBanner.vue'
import SubList from './components/SubList.vue'
// 调用面包屑
import { useTopCategroy } from '@/stores/categroy.js'
// 调用 Categroybanner
import { useBannerStore } from '@/stores/banner'
const bannerStore = useBannerStore()
const store = useTopCategroy()
const route = useRoute()
onMounted(() => {
  store.getTopCategroy(route.params.id)
  bannerStore.getBanner({ distributionSite: '2' })
})

</script>
<template>
  <TopCategory></TopCategory>
  <categroyBanner></categroyBanner>
  <SubList/>
</template>
