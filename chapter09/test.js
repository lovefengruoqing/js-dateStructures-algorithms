var Set = require('./Set.js').Set

var set = new Set()

set.add("David")
set.add("Jennifer")
set.add("Cynthia")
set.add("Mike")
set.add("Raymond")

if (set.add("Mike")) {
	console.log("Mike added")
}else {
	console.log("Can't add Mike, must already be in set")
}

console.log(set.show())

var removed = "Mike"
if (set.remove(removed)) {
	console.log(removed + " removed.")
}else {
	console.log(removed + " not removed.")
}
console.log("\n",set.show())
set.add("Clayton")
console.log("\n",set.show())
removed = "Alisa"
if (set.remove(removed)) {
	console.log(removed + " removed.")
}else {
	console.log(removed + " not removed.")
}

console.log("After clear set: --->>")
set.clear()
console.log("There are",set.show(),'in set')

