function Stack(){
	this.dataStore = []
	this.top = 0
}

Stack.prototype = {
	// 向栈中推入一个元素
	push: function(el){
		this.dataStore[this.top++] = el
	},
	//从栈中推出一个元素
	pop: function(){
		if(this.top>0) return this.dataStore[--this.top]
		else throw "错误操作，栈中没有元素"
	},
	// 预览栈顶元素
	peek: function(){
		return this.dataStore[this.top - 1]
	},
	// 栈内元素
	length: function(){
		return this.top
	},
	// 清空栈
	clear: function(){
		this.top = 0
	}
}

exports.Stack = Stack