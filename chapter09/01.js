var Set = require('./Set.js').Set

var set = new Set()

set.add = function(el){
	if(this.dataStore.indexOf(el)<0){
		this.dataStore.push(el)
		this.dataStore.sort()
		console.log("***")
		return true
	}else{
		return false
	}
}

set.add("David")
set.add("Jennifer")
set.add("Cynthia")
set.add("Mike")
set.add("Raymond")

console.log(set.show())