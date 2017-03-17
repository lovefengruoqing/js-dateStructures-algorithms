// 构建一个Temps对象
function Temps() {
	this.dataStore = [];
	this.add = add;
	this.averageWeek = averageWeek;
	this.averageMonth = averageMonth;
}

// 原型上构建方法
Temps.prototype = {
	add:function(week,day) {
		this.dataStore.push({
			week: week,
			day: day
		})
	},
	averageWeek:function(week) {
		var total = 0, data = this.dataStore,count = 0
		for ( num in data ) {
			if(data[num].week === week){
				total += data[num].day
				count++
			}
		}
		console.log((total / count).toFixed(2))
	},
	averageMonth:function () {
		var total = 0, data = this.dataStore
		for ( num in data ) {
			total += data[num].day
		}
		console.log((total / data.length).toFixed(2))
	}
}

// 构件对象的实例
var temps = new Temps();

// 添加数据
temps.add(1,52);
temps.add(1,55);
temps.add(1,61);
temps.add(1,65);
temps.add(1,55);
temps.add(1,50);
temps.add(1,52);
temps.add(2,49);
temps.add(2,48);
temps.add(2,45);
temps.add(2,58);
temps.add(2,60);
temps.add(2,62);
temps.add(2,52);
temps.add(3,45);

// 得到想要的数据
temps.averageWeek(1)
temps.averageWeek(2)
temps.averageWeek(3)
temps.averageMonth()