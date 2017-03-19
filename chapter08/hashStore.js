var HashTable = require('./HashTable.js').HashTable,
	readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

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

HashTable.prototype.put = function(key,data){
	var pos = this.betterHash(key)
	this.table[pos] = data
}

HashTable.prototype.get = function(key){
	return this.table[this.betterHash(key)]
}

var hashTable = new HashTable()

var name,number
rl.question('请输入一个名字：',function(name){
	name = name
	rl.question('请输入电话号码：',function(number){
		number = number
		hashTable.put(name,number)
		console.log(hashTable.get(name))
		rl.close()
	})
})