export default {
  _getBlockLoss: {
    rurl: /\/api\/block\/loss/,
    method: 'get',
    data: {
      data: {
        columns: ['date', 'totalCount'],
        rows: [
          {
            "date":"2020-02-05",
            "totalCount":114,
            "comment":null,
            "detail":[
              {
                "address":"41530f931037de0c369968a5cf622003d240ef96e2",
                "url":"https://www.beekuaibao.com",
                "lossCount":114
              }
            ]
          },
          {
            "date":"2020-02-06",
            "totalCount":0,
            "comment":null,
            "detail":[

            ]
          },
          {
            "date":"2020-02-10",
            "totalCount":621,
            "comment":null,
            "detail":[
              {
                "address":"41d599cb8c1b609722e81741667ba3c8fb441fba41",
                "url":"www.tronspirit.com",
                "lossCount":621
              }
            ]
          },
          {
            "date":"2020-02-11",
            "totalCount":333,
            "comment":null,
            "detail":[
              {
                "address":"411103d62d8299e90fa011b4ce7fc6ba151e5f1a23",
                "url":"https://www.tronvietnam.com/",
                "lossCount":300
              },
              {
                "address":"41530f931037de0c369968a5cf622003d240ef96e2",
                "url":"https://www.beekuaibao.com",
                "lossCount":33
              }
            ]
          }
        ]
      }
    }
  },
  _getDiscussionList: {
    rurl: /\/api\/analyize\/getDiscussionList(\?.*)*/,
    method: 'get',
    data: {
      data: [
        {
          author: '用户1',
          time: '2020-02-10 12:12:01',
          text: '哈哈哈哈哈哈哈哈1'
        },
        {
          author: '用户2',
          time: '2020-02-10 12:12:02',
          text: '哈哈哈哈哈哈哈哈2'
        },
        {
          author: '用户3',
          time: '2020-02-10 12:12:03',
          text: '哈哈哈哈哈哈哈哈3'
        },
      ]
    }
  },
  _publishDiscussion: {
    rurl: /\/api\/analyize\/publishDiscussion(\?.*)*/,
    method: 'post',
    data: {
      data: {}
    }
  },
}
