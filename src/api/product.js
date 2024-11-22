/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
import request from "@/utils/request"
export const getGoodsAPI = () => {
  return request({
    url: '/home/goods'
  })
}