// require过来即为一个实例
var List = require("./List.js").List

// 实例化对象
var list = new List();

// 朝列表中添加数据
list.append("Jennifer","Jay","fengruoqing","Michael","Danny")

// 使用迭代器遍历列表
// 原书的写法有误，可以作为参考
function ergodicFromFront(list){
	for(list.front(); ;list.next()){
		console.log(list.getElement())
		if(list.currPos() >= list.length()-1){
			console.log('Have reached the end!')
			return true
		}
	}
}

// 从后向前遍历列表
function ergodicFromEnd(list){
	for(list.end(); ;list.prev()){
		console.log(list.getElement())
		if(list.currPos() == 0){
			console.log('Have reached the front!')
			return true
		}
	}
}

//采取这样的方式连续执行
ergodicFromFront(list) && ergodicFromEnd(list) && console.log("Pretty work!")
