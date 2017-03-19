var Set = require('./Set.js').Set

var set1 = new Set()

set1.add("Mike")
set1.add("Clayton")
set1.add("Jennifer")
set1.add("Raymond")

var set2 = new Set()

set2.add("Raymond")
set2.add("Cynthia")
set2.add("Jonathan")

var newSet = set1.union(set2)

console.log(newSet.show())