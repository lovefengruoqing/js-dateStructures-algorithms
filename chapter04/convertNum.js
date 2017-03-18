var Stack = require('./Stack.js').Stack

function convertNum(num, base){
	var stack = new Stack()
	do{
		stack.push(num%base);
		num = Math.floor(num /= base)
	}while(num>0)
	var converted = stack.dataStore.reverse().join('')
	return converted
}

console.log("100转换成二进制为：",convertNum(100, 2))
console.log("\n100转换成三进制为：",convertNum(100, 3))
console.log("\n100转换成四进制为：",convertNum(100, 4))
console.log("\n100转换成五进制为：",convertNum(100, 5))
console.log("\n100转换成六进制为：",convertNum(100, 6))
console.log("\n100转换成七进制为：",convertNum(100, 7))
console.log("\n100转换成八进制为：",convertNum(100, 8))
console.log("\n100转换成九进制为：",convertNum(100, 9))