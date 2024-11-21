<script setup>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeCateGory from '@/components/HomeCateGory.vue'
import HomeHot from '@/components/HomeHot.vue'
import HomeNew from '@/components/HomeNew.vue'
import HomeProduct from '@/components/HomeProduct.vue'
</script>

<template>
  <div class="contianer">
    <HomeCateGory/>
    <HomeCateGory/>  
  </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct />
</template>