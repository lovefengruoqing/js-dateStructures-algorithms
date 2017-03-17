// 构建一个Score对象
function Score(arr){
	// 对象的属性
	this.listScore = arr;
}

// 在原型链上构建对象的方法
Score.prototype = {
	addScore: function(num){
		this.listScore.push(num)
	},
	showAverage: function(){
		var averageScore = 0,temp=0
		for( item in this.listScore){
			temp += this.listScore[item]
		}
		averageScore = temp/this.listScore.length
		console.log(averageScore)
	}
}

// 创建一个Score对象的实例
var obj = new Score([])

// 用addScore方法，朝里面写入数据
obj.addScore(90)
obj.addScore(100)
obj.addScore(70)
obj.addScore(89)
obj.addScore(87.25)

// 调用showAverage方法
obj.showAverage()