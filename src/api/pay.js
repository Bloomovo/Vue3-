import request from "@/utils/request"
// 创建订单
export const createOrderAPI = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}
// 获取-订单详情
export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`,
    method: 'GET'
  })
}