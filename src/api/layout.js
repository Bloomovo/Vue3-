// 引入 request
import request from "@/utils/request"
// 导航栏接口
export const getCategoryAPI = () => {
  return request.get('/home/category/head')
}