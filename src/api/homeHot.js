import request from "@/utils/request"
// 人气推荐
export const getHotAPI = () => {
  return request.get('/home/hot')
}