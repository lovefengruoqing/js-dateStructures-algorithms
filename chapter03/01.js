var List = require('./List.js').List

List.prototype.maxInsert = function(el){
	for(index in this.dataStore){
		if(el <= this.dataStore[index]){
			throw "您输入的数太小了"
		}
	}
	this.append(el)
	return
}

var list = new List()

list.append(1)
list.append(34)
list.append(3)
list.append(5)

console.log(list.dataStore)
list.maxInsert("a")
console.log(list.dataStore)
