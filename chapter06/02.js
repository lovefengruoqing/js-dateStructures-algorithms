var Linked = require('./Linked.js').Linked

// 给Linked原型上增加一个back方法，可以向后移动链表中的元素
Linked.prototype.back = function(element,n){
	var aimNode = this.find(element),
		currentNode = aimNode,
		count = 0
	while(currentNode.next != null){
		currentNode = currentNode.next
		count++
	}
	if(n>count){
		console.log("当前元素后面仅有"+(count)+"位，不能向后移动"+n+'位！')
		return
	}else{
		if(aimNode.next != null){
			aimNode.previous.next = aimNode.next
			aimNode.next.previous = aimNode.previous
		}else{
			console.log("元素排在最后一位，不能向后移动了！")
			return
		}
		currentNode = aimNode
		while(n!=0){
			currentNode = currentNode.next
			n--;
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
linked.back('Beijing',2)
linked.display()