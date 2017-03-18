var Queue = require('./Queue.js').Queue,
	fs = require('fs')

var males = new Queue(),
	females = new Queue()

var data = fs.readFileSync('./dancers.txt','utf-8').split('\r\n')

function Dancer(name,gender){
	this.name = name
	this.gender = gender
}

function init(males, females, data){
	for(index in data){
		dancer = new Dancer((data[index].split(/ /)[1]+' '+data[index].split(/ /)[2]),data[index].split(/ /)[0])
		if(dancer.gender == "M"){
			males.enqueue({
				name: dancer.name,
				gender: dancer.gender
			})
		}else{
			females.enqueue({
				name: dancer.name,
				gender: dancer.gender
			})
		}
	}
}

init(males, females, data)


function combine(males, females){
	console.log("The dance partners are:")
	while(!females.isEmpty() && !males.isEmpty()){
		console.log('female dancer is:',females.dequeue().name,'and the male dancer is:',males.dequeue().name)
	}
	if (!females.isEmpty()) {console.log('\nSo regret,',females.front().name,'has no partner.')}
	if (!males.isEmpty()) {console.log('\nSo regret,',males.front().name,'has no partner.')}

}

combine(males,females)