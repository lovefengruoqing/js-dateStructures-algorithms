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

var circle = new RecycleLinked()

circle.insert("1","head")
circle.insert("2","1")
circle.insert("3","2")
circle.insert("4","3")
circle.insert("5","4")
circle.insert("6","5")
circle.insert("7","6")
circle.insert("8","7")
circle.insert("9","8")
circle.insert("10","9")
circle.insert("11","10")
circle.insert("12","11")
circle.insert("13","12")
circle.insert("14","13")
circle.insert("15","14")
circle.insert("16","15")
circle.insert("17","16")
circle.insert("18","17")
circle.insert("19","18")
circle.insert("20","19")
circle.insert("21","20")
circle.insert("22","21")
circle.insert("23","22")
circle.insert("24","23")
circle.insert("25","24")
circle.insert("26","25")
circle.insert("27","26")
circle.insert("28","27")
circle.insert("29","28")
circle.insert("30","29")
circle.insert("31","30")
circle.insert("32","31")
circle.insert("33","32")
circle.insert("34","33")
circle.insert("35","34")
circle.insert("36","35")
circle.insert("37","36")
circle.insert("38","37")
circle.insert("39","38")
circle.insert("40","39")
circle.insert("41","40")

// 添加一个计算链表长度的方法
RecycleLinked.prototype.calcuLength = function(){
	var newNode = this.head,
		num = 0
	while(newNode.next != this.head){
		newNode=newNode.next
		num++
	}
	return num

}

// 移除第三个数
function remove3(circle){
	var num = 0,
		currentNode = circle.head
	while(circle.calcuLength()>2){
		if (currentNode.next != circle.head) {
			currentNode = currentNode.next
			num++
			if(num == 3){
				circle.remove(currentNode.element)
				num = 0
			}
			// console.log(circle.calcuLength())
		}else{
			currentNode = currentNode.next
		}
	}
	circle.display()
}

// 执行remove3得到结果
remove3(circle)