// 轮播图
import request from '@/utils/request.js'
export const getBannerAPI = (distributionSite) => {
  return request.get('home/banner', {
    params:{
      distributionSite
    }
  })
}