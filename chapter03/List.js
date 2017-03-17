// 实现列表类

//构建构造函数
function List(){
	// 定义属性
	this.listSize = 0
	this.pos = 0
	this.dataStore = []
}

//在原型链中添加方法
List.prototype = {
	// 清空列表中所有的数据
	clear: function(){
		this.dataStore.splice(0)
		this.listSize = 0
		this.pos = 0
		return true;
	},
	// 找到对应元素
	find: function(el){
		for( index in this.dataStore){
			if(this.dataStore[index] == el){
				return index
			}
		}
		return -1
	},
	// 显示列表中的元素
	toString: function(){
		return this.dataStore
	},
	// 向列表中任意位置插入数据
	insert: function(el, after){
		var insertPosition = this.find(after)
		if(insertPosition>-1){
			this.dataStore.splice(insertPosition+1, 0, el)
			this.listSize++
			return this.dataStore
		}
		return false;
	},
	// 给列表添加元素
	append: function(el){
		for( index in arguments){
			this.dataStore[this.listSize++] = arguments[index]
		}
	},
	// 删除对应元素
	remove: function(el){
		var num = this.find(el)
		if(num > -1){
			this.dataStore.splice(num, 1)
			this.listSize--
			return true
		}
		return false
	},
	// 显示列表中有多少个元素
	length: function(){
		return this.listSize
	},
	// 查询是否包含指定元素
	contains: function(el){
		if(this.find(el) != -1){
			return true
		}else{
			return false
		}
	},
	// 跳到最前
	front: function(){
		this.pos = 0
	},
	// 跳到最后
	end: function(){
		this.pos = this.listSize-1
	},
	// 前一个
	prev: function(){
		if(this.pos>0){
			this.pos--
		}
	},
	// 后一个
	next: function(){
		if(this.pos<this.listSize-1){
			this.pos++
		}
	},
	// 当前位置
	currPos: function(){
		return this.pos
	},
	// 移动到
	moveTo: function(position){
		this.position = position
	},
	// 当前位置的元素
	getElement: function(){
		return this.dataStore[this.pos]
	}
}

// 将列表类，暴露出去一个接口
exports.List = List;
