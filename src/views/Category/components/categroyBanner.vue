<script setup>
import { useBannerStore } from '@/stores/banner'
const store = useBannerStore()
</script>

<!-- 轮播图 -->
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in store.bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
// 部分代码省略
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>