import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/SubCategory.vue'
import Detail from '@/views/Detail/index.vue'
import Cart from '@/views/Cart/index.vue'
import Pay from '@/views/Pay/index.vue'
import Order from '@/views/Order/index.vue'
import User from '@/views/User/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/subCategory/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/user',
      component: User
    }
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
