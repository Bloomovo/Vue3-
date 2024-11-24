// 详情页面
import request from "@/utils/request"
export const getDetailAPI = (id) => {
  return request.get('/goods', {
    params: {
      id
    }
  })
}