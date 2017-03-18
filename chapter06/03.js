var Linked = require('./Linked.js').Linked

Linked.prototype.show = function(element){
	currentNode = this.find(element)
	console.log(currentNode.element)
}

var linked = new Linked()

linked.insert("Beijing","head")
linked.insert("shanghai","Beijing")
linked.insert("wuhan","shanghai")

linked.show("shanghai")