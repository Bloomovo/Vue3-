// 轮播图
import request from '@/utils/request.js'
export const getBannerAPI = () => {
  return request.get('home/banner')
}