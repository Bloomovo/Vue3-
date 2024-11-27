import request from '@/utils/request'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
  return request({
    url:'/member/order/pre'
  })
}
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
// 我的订单
export const getUserOrdeAPI = (params) => {
  return request({
    url:'/member/order',
    method:'GET',
    params
  })
}