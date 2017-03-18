var Queue = require("./Queue.js").Queue

var queues = []

for(var i=0; i<10; i++){
	queues[i] = new Queue()
}

var nums = []

for(var i=0; i<100; ++i){
	nums[i] = Math.floor(Math.random()*100)
}

function displayArr(arr){
	return arr.join(', ')
}

function distribute(nums, queues, digit){
	for(index in nums){
		if(digit === 1){
			queues[nums[index]%10].enqueue(nums[index])
		}else{
			queues[Math.floor(nums[index]/10)].enqueue(nums[index])
		}
	}
}

function collect(queues, nums, callback){
	nums = []
	for(index in queues){
		while(!queues[index].isEmpty()){
			nums.push(queues[index].dequeue())
		}
	}
	return nums;
}

console.log("随机生成的十个数：\n"+displayArr(nums))

console.log('\n对个位进行排序：')
distribute(nums,queues,1)
nums = collect(queues,nums)		//由于node.js有异步回调的特性，因此要将排序后的结果赋给nums，不然后面displayArr函数执行后展示的都是未排序的nums数组内的值
console.log('......\n经过排序后：\n'+displayArr(nums))

console.log('\n对十位进行排序：')
distribute(nums,queues,10)
nums = collect(queues,nums)
console.log('......\n经过排序后：\n'+displayArr(nums))
