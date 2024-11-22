// 面包屑
import request from "@/utils/request";
export const getTopCategroyAPI = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}