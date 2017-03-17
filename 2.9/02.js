// 构建一组单词数组
var words = ['good', 'yellow', 'well']

// 倒序显示函数
function wordRverse(words){
	var temp = []
	for( key in words){
		for(num in words[key]){
			temp.push(words[key][num])
		}
		console.log(temp.reverse().join(''))
		temp = []
	}
}

// 推入一个单词
words.push('Jay Chou')

// 调用函数
wordRverse(words)