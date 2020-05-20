// 客户端数据，注意需要将该文件引入到mock/index.js里面才能被mock到
export default [
 
  // 获取客户列表
  {
    url: '/client/list',
    type: 'get',
    response: config => {
      console.log(config)
      const info = [
        {
          id: "1111",
          username: 'umbrella'
        },
        {
          id: "11112",
          username: 'umbrella'
        },
        {
          id: "11131",
          username: 'umbrella'
        }
      ]

      return {
        code: 200,
        data: info
      }
    }
  },

]
