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
	// 后续遍历
	postOrder: function(node){
		if(!(node == null)){
			this.postOrder(node.left)
			this.postOrder(node.right)
			console.log(node.show()+' ')
		}
	},
	getMin: function(){
		var current = this.root
		while(!(current.left == null)){
			current = current.left
		}
		return current.data
	},
	getMax: function(){
		var current = this.root
		while(!(current.right == null)){
			current = current.right
		}
		return current.data
	},
	find: function(data){
		var current = this.root
		while(current != null){
			if(current.data == data){
				return current
			}else if(current.data < data){
				current = current.right
			}else{
				current = current.left
			}
		}
		return null
	}
}


exports.BST = BST
