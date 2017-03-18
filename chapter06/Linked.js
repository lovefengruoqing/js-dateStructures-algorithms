function Node(el){
	this.element = el
	this.next = null
	this.previous = null
}

function LinkedList(){
	this.head = new Node('head')
}

LinkedList.prototype = {
	find: function(item){
		var currNode = this.head
		while(currNode.element != item){
			currNode = currNode.next
		}
		return currNode
	},
	findLast: function(){
		var currentNode = this.head
		while(!(currentNode.next == null)){
			currentNode = currentNode.next
		}
		return currentNode
	},
	insert: function(newElement, item){
		var newNode = new Node(newElement),
			currentNode = this.find(item),
			nextNode = currentNode.next
		if(nextNode != null){
			newNode.next = nextNode
			currentNode.next = newNode
			newNode.previous = currentNode
			nextNode.previous = newNode
		}else{
			newNode.next = nextNode
			currentNode.next = newNode
			newNode.previous = currentNode
		}
	},
	remove: function(item){
		var current = this.find(item),
			previousNode = current.previous,
			nextNode = current.next
		if(current.element == "head"){
			console.log("head不能移除！")
			return
		}
		if(nextNode != null){
			previousNode.next = nextNode
			nextNode.previous = previousNode
		}else{
			previousNode.next = nextNode
		}
	},
	display: function(){
		var currNode = this.head
		while(!(currNode.next == null)){
			console.log(currNode.next.element)
			currNode = currNode.next
		}
	},
	dispReverse: function(){
		var currentNode = this.findLast()
		while(!(currentNode.previous == null)){
			console.log(currentNode.element)
			currentNode = currentNode.previous
		}
	}
}

exports.Linked = LinkedList;