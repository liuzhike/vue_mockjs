//此处可以转换
//
module.exports = {
	"/mock":{
		bypass:function(req,res,proxyOptions){
			console.log(req)
			console.log("测试代理")
		}
	}
}
