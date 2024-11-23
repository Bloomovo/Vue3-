<script setup>
import GoosItem from '@/components/GoosItem.vue'
import { useTopCategroy } from '@/stores/categroy';
const store = useTopCategroy()
</script>
<template>
<div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in store.categoryData.children" :key="i.id">
      <RouterLink :to="`/category/subCategory/${i.id}`">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
</div>
<div class="ref-goods" v-for="item in store.categoryData.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>
  </div>
  <div class="body">
    <GoosItem v-for="good in item.goods" :goods="good" :key="good.id" />
  </div>
</div>
</template>

<style scoped lang="scss">
  .sub-list {
    width: 1240px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
  </style>