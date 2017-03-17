//构建构造函数
function Letters(){
	this.arr = []
}

// 添加方法
Letters.prototype = {
	// 朝数组中添加方法
	addLetter: function(){
		for( index in arguments) this.arr.push(arguments[index]);
	},
	// 合并单词
	displayWord: function(){
		console.log('These letters unite is: '+this.arr.join(""))
	}
}

// new一个实例
var letters = new Letters()

// letters.addLetter("a","b","c","d","e","f","g","f")

// 添加数据到数组中
letters.addLetter("H","e","l",'l','o')

// 调用合并字母成为单词的方法
letters.displayWord()