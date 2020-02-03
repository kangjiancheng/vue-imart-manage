#开始

第一步：开启全局 mock：在[appConfig](../../app.config.js) 中 设置 `staticMock.enable = true`，使项目能够支持本地mock。设置一个全局本地mock 开关，可以快速关闭全局mock。

第二步：开启单独模块 mock：在对应的实际请求接口文件中 开启mock，针对对应文件中的接口进行mock，如：[test.js](../actions/test.js)

```javascript
import { getStaticMock } from "@/utils/common";
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getUserInfo: mockPrefix + '/user/userInfo',
  },
  post: {
    addUserInfo: '/user/userInfo',
  },
}
```
```getStaticMock(enableMock)``` 参数```enableMock``` true 时，返回```staticMock.prefix``` 即你要添加到地址中的要mock的代表字符串```(__staticMock__)```，方便你之后进行匹配mock,
当然你首先得开启全局mock。

3、设置请求地址的前缀mock正则表达式，为了可以识别这个接口要进行mock，一开始先往地址中添加```staticMock.prefix```，之后通过设置```staticMock.regexpMock``` 来匹配这个要mock的请求地址前缀代表。

```html
  staticMock: {
    prefix: '__staticMock__',  // 添加到请求地址中
    regexpPrefix: /.*__staticMock__/, // 添加到 mock 地址匹配中
  },
```



##例子

请求地址：

```html
http://127.0.0.1:8090/__local__/__staticMock__/user/userInfo?name=Tom
```

定义的接口mock模块形式:

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
其中 rurl 必须是正则表达式，不支持字符串，实际mock地址匹配的是：staticMock.regexpMock + rurl 正则表达式的拼接

data 数据生成规则：http://mockjs.com/examples.html
