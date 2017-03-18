var Dictionary = require('./Dictionary.js').Dictionary

var people = new Dictionary()

people.add("小明",13)
people.add("小花",13)
people.add("小刚",10)

console.log('添加完数据以后，字典中的数据有》》》》')
people.displayAll()

people.remove("小刚")
console.log("\n删除小刚以后，字典中的俄数据有》》》》")
people.displayAll()

people.remove("xiaocai")

people.clear()
console.log("\n执行清空操作以后，字典中的俄数据有》》》》\n",people.count())