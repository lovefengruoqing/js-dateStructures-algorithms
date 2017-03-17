var List = require('./List.js').List

var list = new List()

function Person(name, gender){
	this.name = name
	this.gender = gender
}

function pushPerson(){
	for( index in arguments ){
		var person = new Person(arguments[index][0], arguments[index][1])
		list.append({
			name: person.name,
			gender: person.gender
		})
	}
	
}

pushPerson(["Jay", "men"],["feng", "men"],["ruo", "men"],["qing", "men"],["kang", "men"],["Michael", "men"],["Joey", "women"],["zhang", "women"],["xiaoming", "women"],["xiaohua", "women"])

function displaySameGender(list, gender){
	for(key in list.dataStore){
		if(list.dataStore[key].gender == gender){
			console.log(list.dataStore[key].name)
		}
	}
}

displaySameGender(list, "women")