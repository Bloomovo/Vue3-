// 面包屑
import request from "@/utils/request";
export const getTopCategroyAPI = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}
