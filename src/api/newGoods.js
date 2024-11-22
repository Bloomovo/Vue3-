// 新鲜好物接口
import request from "@/utils/request"
export const getNewGoodsAPI = () => {
  return request.get('/home/new')
}