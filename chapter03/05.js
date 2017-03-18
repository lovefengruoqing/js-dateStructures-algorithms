//添加check-in函数，实现归还影片功能
function check-in(movie, list, customerList){
	if(customerList.contains(movie)){
		customerList.remove(movie)
		list.append(movie)
	}else{
		throw "这部影片暂未租出"
	}
}