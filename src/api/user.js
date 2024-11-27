// 个人中心
import request from "@/utils/request"
// 猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}