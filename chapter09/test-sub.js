var Set = require('./Set.js').Set

var set1 = new Set()
var set2 = new Set()

set1.add("Cynthia")
set1.add("Clayton")
set1.add("Jennifer")
set1.add("Danny")
set1.add("Jonathan")
set1.add("Terrill")
set1.add("Raymond")
set1.add("Mike")

set2.add("Cynthia")
set2.add("Raymond")
set2.add("Jonathan")

set1.subSet(set2)