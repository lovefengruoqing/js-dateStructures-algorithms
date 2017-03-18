var Linked = require('./Linked.js').Linked

// 给Linked原型上增加一个advance方法，可以向前移动链表中的元素
Linked.prototype.advance = function(element,n){
	var currentNode = this.head,
		aimNode = this.find(element),
		count = 0
	while(currentNode.next != aimNode){
		currentNode = currentNode.next
		count++
	}
	if(n>count){
		console.log("当前元素排在"+(count+1)+"位，不能向前移动"+n+'位！')
		return
	}else{
		if(aimNode.next != null){
			aimNode.previous.next = aimNode.next
			aimNode.next.previous = aimNode.previous
		}else{
			aimNode.previous.next = aimNode.next
		}
		count = count-n
		currentNode = this.head
		while(count!=0){
			currentNode = currentNode.next
			count--;
		}
		if(currentNode.next != null){
			aimNode.previous = currentNode
			currentNode.next.previous = aimNode
			aimNode.next = currentNode.next
			currentNode.next = aimNode
		}else{
			aimNode.next = currentNode.next
			currentNode.next = aimNode
			aimNode.previous = currentNode
		}
	}
}

var linked = new Linked()

linked.insert("Beijing","head")
linked.insert("shanghai","Beijing")
linked.insert("wuhan","shanghai")

linked.display()
linked.advance('wuhan',3)
linked.display()