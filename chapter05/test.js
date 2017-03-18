var Queue = require('./Queue.js').Queue

var queue = new Queue()


console.log('朝队列依次插入四个人：\n',"Jay, Micheal, fengruoqing, Jennifer")
queue.enqueue('Jay')
queue.enqueue('Micheal')
queue.enqueue('fengruoqing')
queue.enqueue('Jennifer')
console.log('\n队列中现在存在的人：\n',queue.toString())

console.log("\n从队首删除一个人：\n......")
queue.dequeue()
console.log('队列中现在存在的人：\n',queue.toString())

console.log("\n队首的人：\n"+queue.front())
console.log("\n队尾的人：\n"+queue.end())

console.log('\n队列是否为空：\n.....\n'+queue.isEmpty())