// require过来即为一个实例
var List = require("./List.js").List

// 朝列表中添加数据
List.append("Jennifer","Jay","fengruoqing","Michael","Danny")

// 使用迭代器遍历列表
// 原书的写法有误，可以作为参考
function ergodicFromFront(){
	for(List.front(); ;List.next()){
		console.log(List.getElement())
		if(List.currPos() == List.length()-1){
			console.log('Have reached the end!')
			return true
		}
	}
}

// 从后向前遍历列表
function ergodicFromEnd(){
	for(List.end(); ;List.prev()){
		console.log(List.getElement())
		if(List.currPos() == 0){
			console.log('Have reached the front!')
			return true
		}
	}
}

//采取这样的方式连续执行
ergodicFromFront() && ergodicFromEnd() && console.log("Pretty work!")