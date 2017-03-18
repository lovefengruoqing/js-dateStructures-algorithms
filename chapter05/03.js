var Queue = require('./Queue.js').Queue

// 构建一个Patient对象
function Patient(name,code){
	this.name = name
	this.code = code
}

var queue = new Queue()

queue.priorDequeue = function(){
	if(this.dataStore.length != 0){
		var prior = this.dataStore[0].code,
			temp = 0
		for(index in this.dataStore){
			if(this.dataStore[index].code > prior){
				prior = this.dataStore[index].code
				temp = index
			}
		}
		return this.dataStore.splice(temp,1)
	}else{
		console.log("队列为空")
		return
	}
}

queue.toString = function(){
	var str = ''
	if(this.dataStore.length != 0){
		for(index in this.dataStore){
			str += this.dataStore[index].name + ' code:' + this.dataStore[index].code + '\n'
		}
		return str
	}else{
		return -1
	}
}

queue.addPatient = function(){
	for(index in arguments){
		var patient = new Patient(arguments[index][0],arguments[index][1])
		queue.enqueue({
			name: patient.name,
			code: patient.code
		})
	}
}


function callback(){
	if (queue.toString() == -1) {
		return '对不起！现在没有病人'
	}else{
		return queue.toString()
	}
}

console.log("添加病人：\n......")
queue.addPatient(["Jay", 3],["kangkang", 4],["fengruoqing", 1],["Michael", 4],["Fehrenbach", 2])
console.log('\n现有的病人：\n',callback())

console.log("过了一会儿...\n删掉优先级最高的病人:\n",queue.priorDequeue(queue))
console.log('\n现有的病人：\n',callback())

console.log("过了一会儿...\n删掉优先级最高的病人:\n",queue.priorDequeue(queue))
console.log('\n现有的病人：\n',callback())

console.log("过了一会儿...\n删掉优先级最高的病人:\n",queue.priorDequeue(queue))
console.log('\n现有的病人：\n',callback())

console.log("过了一会儿...\n删掉优先级最高的病人:\n",queue.priorDequeue(queue))
console.log('\n现有的病人：\n',callback())

console.log("过了一会儿...\n删掉优先级最高的病人:\n",queue.priorDequeue(queue))
console.log('\n现有的病人：\n',callback())




