var Set = require('./Set.js').Set

var set1 = new Set()
var set2 = new Set()

set1.add("Mike")
set1.add("Clayton")
set1.add("Jennifer")
set1.add("Raymond")

set2.add("Raymond")
set2.add("Cynthia")
set2.add("Jonathan")

var intersect = set1.intersect(set2)

console.log("Set1 and Set2 all contains :",intersect.show())