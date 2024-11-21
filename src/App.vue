<script setup>

import { useCategoryStore } from '@/stores/category.js'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <RouterView/>
</template>