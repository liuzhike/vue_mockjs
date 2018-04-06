### vue 使用 mockjs 模拟数据

### 安装
 > npm i mockjs --save--dev
 
 * 创建mock文件夹
 ```markdown
├─modules       
│ │ └─test   
│ └─index.js         
```

* 在子模块中添加模拟数据
需要先引入mockjs和mock.random对象

```javascript
/***
 * 模拟数据
 * @type {MockXMLHttpRequest}
 */

const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random


const produceData = function (opt) {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      id: i,
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  // 模拟删除数据,post请求就是删除
  let rtype = opt.type.toLowerCase(); //获取请求类型
  switch (rtype) {
    case 'get':
      break;
    case 'post':
      let id = parseInt(JSON.parse(opt.body).id) //获取删除的id
      articles = articles.filter(function(val){
        return val.id!=id;//把这个id对应的对象从数组里删除
      });
      break;
    default:
  }
  return {
    code: '000',
    data: articles
  }
}

module.exports = produceData;

```

* 暴露出拦截接口列表，引入mockjs，api，和对应子模块
```javascript
/***
 * 拦截 api 列表
 * @type {MockXMLHttpRequest}
 */
import {queryApi} from '../store/api'
const Mock = require('mockjs')

// 拦截接口列表
Mock.mock(queryApi, /post|get/i, require('./modules/list'))
Mock.mock(queryApi, /post|get/i, require('./modules/list2'))

```



* 在`main.js`引入
> import './mock/index'

* 此时请求就会被拦截，并返回模拟数据（注意请求不会发出去）


### 官方文档[传送门](https://github.com/nuysoft/Mock/wiki)

### 使用示例[传送门](http://mockjs.com/examples.html) 
