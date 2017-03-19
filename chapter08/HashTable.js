function HashTable() {
	this.table = new Array(137)
}

HashTable.prototype = {
	simpleHash: function(data){
		var total = 0
		for(var i = 0; i<data.length; i++){
			total += data.charCodeAt(i)
		}
		console.log('哈希值：',data,'--->',total)
		return total%this.table.length
	},
	put: function(data){
		var pos = this.simpleHash(data)
		this.table[pos] = data
	},
	showDistro: function(){
		for(index in this.table){
			if(this.table[index] != undefined){
				console.log(index+': '+this.table[index])
			}
		}
	}
};

exports.HashTable = HashTable