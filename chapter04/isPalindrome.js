var Stack = require('./Stack.js').Stack

function isPalindrome(word){
	var stack = new Stack()
	//正则表达式，^代表排除的意思
	word = word.replace(/[^0-9a-zA-Z]/ig,'')
	for(index in word){
		stack.push(word[index])
	}
	var newWord = ''
	while(stack.length() > 0){
		newWord += stack.pop()
	}
	console.log('The old word is:',word)
	console.log('The new word is:',newWord)
	if (word === newWord) {
		console.log("The word",word,"is palindrome!")
	}else{
		console.log("Sorry the word is not palindrome...")
	}
}

isPalindrome("343242.fsfsalff.j jkjljk  fdsf")
isPalindrome("hello")
isPalindrome("racecar")