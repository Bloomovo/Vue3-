import request from "@/utils/request"
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
// 删除购物车
export const delCartAPI = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 修改购物车商品
export const memberGoodAPI = ({ skuId, selected, count}) => {
  return request({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data: {
      selected,
      count
    }
  })
}

// 修改全选和取消
export const memberGoodsAPI = ({ selected, ids }) => {
  return request({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected,
      ids
    }
  })
}

// 获取购物车列表数据
export const getGoodsAPI = () => {
  return request.get('/member/cart')
}