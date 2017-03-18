var Stack = require('./Stack.js').Stack

var stack = new Stack()

console.log('Push "Jay", "fengruoqng", "xiaoqiang"\n')
stack.push("Jay")
stack.push("fengruoqing")
stack.push("xiaoqiang")
console.log("The stack length is:",stack.length())
console.log("The peek of stack is:",stack.peek())

console.log('\nAfter pop...\nThe pop element is:',stack.pop())
console.log("The stack length is:",stack.length())
console.log("The peek of stack is:",stack.peek())

console.log('\nPush "Cynthia"\n')
stack.push("Cynthia")
console.log("The stack length is:",stack.length())
console.log("The peek of stack is:",stack.peek())

console.log('\nclearing...')
stack.clear()
console.log("The stack length is:",stack.length())
console.log("The peek of stack is:",stack.peek())