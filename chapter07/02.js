var Dictionary = require('./Dictionary.js').Dictionary,
	fs = require('fs')

var worldsList = new Dictionary()

var data = fs.readFileSync('./para.txt','utf-8').split(/[^a-zA-Z0-9]/ig)

// console.log(data)

for(index in data){
	if(data[index] != ''){
		data[index] = data[index].toLowerCase()
		if(!worldsList.dataStore[data[index]]){
			worldsList.dataStore[data[index]] = 1
		}else{
			worldsList.dataStore[data[index]]++
		}
	}
}

// 重写displayAll方法
worldsList.displayAll =  function(){
	// 调用Object.keys方法，会输出一个有键组成的数组
	sortData = Object.keys(this.dataStore).sort()
	for(key in sortData){
		console.log(sortData[key]+": "+this.dataStore[sortData[key]])
	}
}

worldsList.displayAll()