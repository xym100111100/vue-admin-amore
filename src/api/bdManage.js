import request from '@/utils/request'


export function bdManageData(token) {
  return request({
    url: '/bdmanage/list',
    method: 'get',
    params: {
      token
    }
  })
}
