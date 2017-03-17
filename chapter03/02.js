var List = require('./List.js').List

List.prototype.minInsert = function(el){
	for(index in this.dataStore){
		if(el >= this.dataStore[index]){
			throw "您输入的数太大了"
		}
	}
	this.append(el)
	return
}

var list = new List()

list.append(10)
list.append(34)
list.append(3)
list.append(5)
list.append(5)

console.log(list.dataStore)
list.minInsert(1)
console.log(list.dataStore)
