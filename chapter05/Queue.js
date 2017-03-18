function Queue(){
	this.dataStore = []
}

Queue.prototype = {
	// 向队列尾部添加一个元素
	enqueue: function(el){
		this.dataStore.push(el)
		return this.dataStore.length
	},
	// 从队首删除一个元素
	dequeue: function(){
		return this.dataStore.shift()
	},
	// 读取队首和队尾数据
	front: function(){
		return this.dataStore[0]
	},
	end: function(){
		return this.dataStore[this.dataStore.length-1]
	},
	// 显示队列所有元素
	toString: function(){
		return this.dataStore.join('\n')
	},
	// 判断队列是否为空
	isEmpty: function(){
		if(this.dataStore.length == 0){
			return true
		}else{
			return false
		}
	}
}

exports.Queue = Queue