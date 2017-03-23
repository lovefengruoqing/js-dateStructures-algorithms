var BST = require('./BST.js').BST

var nums = new BST()

nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
nums.insert(939)
nums.insert(122)

// 中序遍历
console.log('中序遍历：')
nums.inOrder(nums.root)
// 前序遍历
console.log('\n前序遍历：')
nums.preOrder(nums.root)
// 后序遍历
console.log('\n后序遍历：')
nums.postOrder(nums.root)

console.log("\n最大值：",nums.getMax())
console.log("\n最小值：",nums.getMin())

console.log("\n查找99：",nums.find(99))
console.log("\n查找199：",nums.find(199))
