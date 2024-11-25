// 登录
import request from "@/utils/request"
export const getLoginAPI = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}