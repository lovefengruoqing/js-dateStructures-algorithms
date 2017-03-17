// 引入读取文件的模块，读取数据，List类模块
var fs = require('fs'),
	readline = require('readline'),
	List = require('./List.js').List

// 定义两个List实例
// list存储想要的书籍
// customerList存储被借走的书籍
var list = new List(),
	customerList = new List()

// 读取存储电影信息的文件，将结果写入list列表里
var data = fs.readFileSync('./films.txt','utf-8').split(/\r\n/ig)
for(index in data){
	list.append(data[index])
}

// 定义displayList函数，列出传入的列表里的存储的电影
function displayList(list){
	for(list.front(); ;list.next()){
		if(list.getElement() instanceof Customer){
			console.log(list.getElement()['name'] +', '+list.getElement()['movie'] )
		}else{
			console.log(list.getElement())
		}
		if(list.currPos() >= list.length()-1){
				return
			}
	}
}

// 构建一个Customer对象
function Customer(name, movie){
	this.name = name
	this.movie = movie
}

//构建一个checkOut函数，用于检索电影
function checkOut(name, movie, list, customerList){
	if(list.contains(movie)){
		var c = new Customer(name,movie)
		customerList.append(c)
		list.remove(movie)
	}else{
		console.log(movie + ' is not available.')
	}
}

// 执行程序的时候，展示当前list类中存在的电影
console.log("Available movies: "+list.length())
displayList(list)

console.log('\n')

// 构建一个readline模块实例
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// 完成借阅过程
rl.question("请输入姓名：",function(name){
	name = name
	rl.question("请输入想要的电影：",function(movieName){
		movieName = movieName

		checkOut(name, movieName, list,customerList)

		console.log('\nCustomer rentals: '+ customerList.length())
		displayList(customerList)

		console.log("\nMovies now available: "+list.length())
		displayList(list)
		rl.close()
	})
})