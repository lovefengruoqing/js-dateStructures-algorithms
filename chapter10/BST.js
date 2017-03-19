function Node(data, left, right){
	this.data = data
	this.left = left
	this.right = right
}

Node.prototype.show = function(){
	return this.data
}

function BST(){
	this.root = null
}

BST.prototype = {
	insert: function(data){
		var n = new Node(data, null, null)
		if(this.root == null){
			this.root = n
		}else{
			var parent = this.root
			while(true){
				if(data<parent.data){
					if(parent.left == null){
						parent.left = n
						break
					}
					parent = parent.left
				}else{
					if(parent.right == null){
						parent.right = n
						break
					}
					parent = parent.right
				}
			}
		}
	},
	// 中序遍历
	inOrder: function(node){
		if (!(node == null)) {
			this.inOrder(node.left)
			console.log(node.show()+' ')
			this.inOrder(node.right)
		}
	},
	// 先序遍历
	preOrder: function(node){
		if(!(node == null)){
			console.log(node.show()+' ')
			this.preOrder(node.left)
			this.preOrder(node.right)
		}
	},
	postOrder: function(node){
		if(!(node == null)){
			this.postOrder(node.left)
			this.postOrder(node.right)
			console.log(node.show()+' ')
		}
	}
}


exports.BST = BST