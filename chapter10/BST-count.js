function Node(data, left, right){
    this.data = data
    this.count = 1
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
    update: function(data){
        var grade = this.find(data)
        grade.count++
        return grade
    }
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
    // 获得最小值
    getMin: function(){
        var current = this.root
        while(!(current.left == null)){
            current = current.left
        }
        return current.data
    },
    // 获得最大值
    getMax: function(){
        var current = this.root
        while(!(current.right == null)){
            current = current.right
        }
        return current.data
    },
    // 查找指定元素
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
    },
    // 删除数据
    remove: function(data){
        this.removeNode(this.root, data)
    },
    // 删除节点
    removeNode: function(node, data){
        if(node == null){
            return null
        }
        if(data == node.data){
            if(node.left ==null && node.right == null){
                return null;
            }
            if(node.left == null){
                return node.right
            }
            if(node.right == null){
                return node.left
            }
            var tempNode = this.getMine(node.right)
            node.data = tempNode.data
            node.right = this.removeNode(node.right, tempNode.data)
            return node
        }else if(data < node.data){
            node.left = this.removeNode(node.left, data)
            return node
        }else{
            node.right = this.removeNode(node.right, data)
            return node
        }
    }
}
