var HashTable = require('./HashTable.js').HashTable

var hashTable = new HashTable()

hashTable.put('David')
hashTable.put('Jennifer')
hashTable.put('Jay')
hashTable.put('fengruoqing')
hashTable.put('Mike')
hashTable.put('Cynthia')
hashTable.put('Cynthiaa')
hashTable.put('hust')

// Cynthiaa的哈希值和Jennifer的哈希值碰撞了

hashTable.showDistro()