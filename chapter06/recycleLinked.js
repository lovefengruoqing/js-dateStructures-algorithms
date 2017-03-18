function Node(el){
	this.element = el
	this.next = null
}

function RecycleLinked(){
	this.head = new Node('head')
	this.head.next = this.head
}

RecycleLinked.prototype = {
	find: function(item){
		var currNode = this.head
		while(currNode.element != item){
			currNode = currNode.next
		}
		return currNode
	},
	findPrevious: function(item){
		var currentNode = this.head
		while(currentNode.next.element != item){
			currentNode = currentNode.next
		}
		return currentNode
	},
	insert: function(newElement, item){
		var newNode = new Node(newElement),
			currentNode = this.find(item)
		if(currentNode.next == this.head){
			currentNode.next = newNode
			newNode.next = this.head
		}else{
			newNode.next = currentNode.next
			currentNode.next = newNode
		}
	},
	remove: function(item){
		if(item == "head"){
			console.log("不能移除链表头！！！")
			return
		}
		var currentNode = this.findPrevious(item)
		currentNode.next = currentNode.next.next

	},
	display: function(){
		var currNode = this.head
		while(!(currNode.next == this.head)){
			console.log(currNode.next.element)
			currNode = currNode.next
		}
	}
}


var recycleLinked = new RecycleLinked()

recycleLinked.insert("Beijing","head")
recycleLinked.insert("shanghai","Beijing")
recycleLinked.insert("wuhan","shanghai")

recycleLinked.display()
recycleLinked.remove("head")
recycleLinked.display()