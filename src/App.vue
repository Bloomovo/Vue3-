<script setup>
import { useCategoryStore } from '@/stores/homeCategory.js'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <RouterView/>
</template>