var HashTable = require('./HashTable.js').HashTable

var hashTable = new HashTable()

HashTable.prototype.buildChains = function(){
	for(var i = 0; i<this.table.length; i++){
		this.table[i] =[]
	}
}

hashTable.buildChains()

HashTable.prototype.put = function(data){
	var pos = this.simpleHash(data),
		count = 0
	while(this.table[pos][count] != undefined){
		count++
	}
	this.table[pos][count] = data
}

HashTable.prototype.showDistro = function(){
	var count = 0,str = ''
	for(index in this.table){
		str += index+': '
		while(this.table[index][count] != undefined){
			str += this.table[index][count] + ' '
			count++
		}
		if(str != index+': '){
			console.log(str)
		}
		count = 0
		str = ''
	}
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

for(index in someNames){
	hashTable.put(someNames[index])
}

hashTable.showDistro()