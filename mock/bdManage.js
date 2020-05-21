// 客户端数据，注意需要将该文件引入到mock/index.js里面才能被mock到
export default [
  // 获取数据列表
  {
    url: '/bdmanage/list',
    type: 'get',
    response: res => {
      console.log(res);
      const info = [{
          id: '1',
          bdName: '张三'
        },
        {
          id: '2',
          bdName: '李四'
        },
        {
          id: '3',
          bdName: '王五'
        }
      ]

      return {
        code: 200,
        data: info
      }
    }
  }


]
