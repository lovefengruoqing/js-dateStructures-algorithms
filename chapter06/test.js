var Linked = require('./Linked.js').Linked

var cities = new Linked()

cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Alma", "Russellville")

console.log("正向显示：")
cities.display()
console.log("\n逆向显示：")
cities.dispReverse()

console.log('\n移除head')
cities.remove("head")
console.log("正向显示：")
cities.display()
console.log("\n逆向显示：")
cities.dispReverse()

console.log('\n移除Conway')
cities.remove("Conway")
console.log("正向显示：")
cities.display()
console.log("\n逆向显示：")
cities.dispReverse()