function Dictionary(){
	this.dataStore = []
}

Dictionary.prototype = {
	add: function(key, value){
		this.dataStore[key] = value
	},
	find: function(key){
		return this.dataStore[key]
	},
	remove: function(key){
		if(!this.dataStore[key]){
			console.log(key,'在字典中不存在')
		}else{
			delete this.dataStore[key]
		}
	},
	displayAll: function(){
		// 调用Object.keys方法，会输出一个有键组成的数组
		sortData = Object.keys(this.dataStore).sort()
		for(key in sortData){
			console.log(sortData[key]+" --> "+this.dataStore[sortData[key]])
		}
	},
	count: function(){
		var n = 0
		for(key in this.dataStore){
			n++
		}
		return n
	},
	clear: function(){
		for(key in this.dataStore){
			delete this.dataStore[key]
		}
	}
}

exports.Dictionary = Dictionary