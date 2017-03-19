function HashTable() {
	this.table = new Array(137)
}

HashTable.prototype = {
	simpleHash: function(data){
		var total = 0
		for(var i = 0; i<data.length; i++){
			total += data.charCodeAt(i)
		}
		return total%this.table.length
	}
};