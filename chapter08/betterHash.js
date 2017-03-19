var HashTable = require('./HashTable.js').HashTable

// 修改原型方法
HashTable.prototype.betterHash = function(data){
	const H = 37
	var total =0
	for(index in data){
		total += H*total + data.charCodeAt(index)
	}
	console.log('哈希值：',data,'--->',total)
	total = total % this.table.length
	return parseInt(total)
}

HashTable.prototype.put = function(data){
	var pos = this.betterHash(data)
	this.table[pos] = data
}

var hashTable = new HashTable()

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

for(index in someNames){
	hashTable.put(someNames[index])
}

hashTable.showDistro()