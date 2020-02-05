### menu.json 文件
menu.json 中的基本格式为element-ui 中的 [menu](https://element.eleme.cn/#/zh-CN/component/menu) 组件所需数据格式:  

```json
[
  {
    "path": "/home",
    "name": "Home",
    "title": "Home",
    "icon": "el-icon-guide",
    "auth": true
  },
  {
    "path": "",
    "name": "page-a",
    "title": "PageA",
    "icon": "el-icon-place",
    "auth": true,
    "children": [
      {
        "path": "/page-b",
        "name": "page-b",
        "title": "PageB",
        "icon": "el-icon-place",
        "auth": true
      },
      {
        "path": "/page-c",
        "name": "page-c",
        "title": "PageC",
        "icon": "el-icon-place",
        "auth": true,
        "children": [
          {
            "path": "/page-d",
            "name": "page-d",
            "title": "PageD",
            "icon": "el-icon-place",
            "auth": true
          }
        ]
      }
    ]
  }
]
```
其中:  
- title 即为菜单栏对应展示的文案，同时为网站标题  
