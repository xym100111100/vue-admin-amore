import request from '@/utils/request'


export function clientListData(token) {
    return request({
      url: '/client/list',
      method: 'get',
      params: { token }
    })
  }