var HashTable = require("./HashTable.js").HashTable

var lineHash = new HashTable()

lineHash.put = function(data){
	var pos = this.simpleHash(data)
	while(this.table[pos] != undefined){
		pos++
	}
	this.values[pos] = data
}
