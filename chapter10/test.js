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

console.log('\n前序遍历：')
nums.preOrder(nums.root)

console.log('\n后序遍历：')
nums.postOrder(nums.root)