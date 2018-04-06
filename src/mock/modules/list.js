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
      imgUrl: Random.dataImage('400x350', 'mock请求的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
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
