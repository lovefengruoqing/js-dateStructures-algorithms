var Set = require('./Set.js').Set

var set1 = new Set()
var set2 = new Set()

set1.add("Clayton")
set1.add("Jennifer")
set1.add("Danny")

set2.add("Bryan")
set2.add("Clayton")
set2.add("Jennifer")

var diff1 = set1.difference(set2),
	diff2 = set2.difference(set1)

console.log(diff1.union(diff2).show())