function Set(){
	this.dataStore = []
}

Set.prototype = {
	add: function(el){
		if(this.dataStore.indexOf(el)<0){
			this.dataStore.push(el)
			return true
		}else{
			return false
		}
	},
	remove: function(el){
		var pos = this.dataStore.indexOf(el)
		if(pos>=0){
			this.dataStore.splice(pos, 1)
			return true
		}else{
			return false
		}
	},
	show: function(){
		return this.dataStore
	},
	clear: function(){
		this.dataStore = []
		return this.dataStore
	},
	contains: function(el){
		if(this.dataStore.indexOf(el)>-1){
			return true
		}else{
			return false
		}
	},
	union: function(set){
		var tempSet = new Set()
		for(var i=0; i<this.dataStore.length; i++){
			tempSet.add(this.dataStore[i])
		}
		for(var j=0; j<set.dataStore.length; j++){
			if(!tempSet.contains(set.dataStore[j])){
				tempSet.dataStore.push(set.dataStore[j])
			}else{
				console.log(set.dataStore[j],"是一个重复的数据！！！")
			}
		}
		return tempSet
	},
	intersect: function(set){
		var tempSet = new Set()
		for(var i=0; i<this.dataStore.length; i++){
			if(set.contains(this.dataStore[i])){
				tempSet.add(this.dataStore[i])
			}
		}
		return tempSet
	},
	subSet: function(set){
		if(this.dataStore.length>set.dataStore.length){
			for(var i=0; i<set.dataStore.length; i++){
				if(!this.contains(set.dataStore[i])){
					console.log("两集合没有父子关系")
					return
				}
			}
			console.log(set,"集合是",this,"集合的子集")
		}else if(this.dataStore.length=set.dataStore.length){
			for(var i=0; i<set.dataStore.length; i++){
				if(!this.contains(set.dataStore[i])){
					console.log("两集合没有父子关系")
					return
				}
			}
			console.log("两集合相等")
		}else{
			for(var i=0; i<this.dataStore.length; i++){
				if(!set.contains(this.dataStore[i])){
					console.log("两集合没有父子关系")
					return
				}
			}
			console.log(this,"集合是",set,"集合的子集")
		}
	},
	difference: function(set){
		var tempSet = new Set()
		for(var i = 0; i < this.dataStore.length; i++){
			if(!set.contains(this.dataStore[i])){
				tempSet.add(this.dataStore[i])
			}
		}
		return tempSet
	}
}

exports.Set = Set