var Dictionary = require('./Dictionary.js').Dictionary,
	fs = require('fs')

var telephone = new Dictionary

var data = fs.readFileSync('./telephone.txt','utf-8').split(/\r\n/ig)

for(index in data){
	var temp = data[index].split(/：/)
	telephone.add(temp[0],temp[1])
}

console.log("显示所有的人：》》》")
telephone.displayAll()

console.log("\n显示昆凌电话号码：》》》")
console.log(telephone.dataStore['昆凌'])

console.log('\n增加电话号码后：》》》')
telephone.add('李玉刚',13797658000)
telephone.displayAll()

console.log('\n删除电话号码后：》》》')
telephone.remove('昆凌')
telephone.displayAll()

console.log('\n清空所有电话号码后：》》》')
telephone.clear()
console.log("还剩",telephone.count())