<script setup>
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHead.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutFixed from '@/components/LayoutFixed.vue'
</script>
<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>