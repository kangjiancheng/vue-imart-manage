请求地址：

```
http://127.0.0.1:8090/__local__/mockStatic/user/userInfo?name=Tom
```

定义的接口模块形式:

```javascript
export default {
  getUserInfo: {
    rurl: /\/user\/userInfo(\?.*)*/,
    method: 'get',
    data: {
      'data|5-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
      }]
    }
  }
}
```


其中 rurl 必须是正则表达式，不支持字符串

data 数据生成规则：http://mockjs.com/examples.html

mock rurl会自动添加 mockApi 前缀，当请求路径中存在符合 ```/.*\/mockStatic/``` 这个正则表达式(或自定义rurlPrefix)时，会进行本地数据mock。

