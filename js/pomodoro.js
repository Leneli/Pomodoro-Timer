var doc = document,
	pomodoro = doc.getElementsByClassName('pomodoro'), //array, div.pomodoro
	minute = doc.getElementById('minute'),
	second = doc.getElementById('second'),
	timeWork = 1500000, //25m
	timeCoffee = 300000, //5m
	active = 'active', //таймер включен, время работы
	coffee = 'coffee', //таймер включен, время на кофе
	i = 0; //счетчик кликов по таймеру

//Добавление/удаление классов
function addCoffe() {
	pomodoro[0].classList.add(coffee);
}

function removeCoffe() {
	pomodoro[0].classList.remove(coffee);
}

function addActive() {
	pomodoro[0].classList.add(active);
}

function removeActive() {
	pomodoro[0].classList.remove(active);
}


//Вывод времени (1 min = 60 000 ms) ????????
function addTime(t) {
	var t0, t1, t2;
	
	for(t; t > 0; t - 1000) {
		t0 = t / 60000;
		t0 = t0.toFixed(2).toString().split('.');
		t1 = parseInt(t0[0], 10); //минуты
		t2 = parseFloat(t0[1]*0.6, 10).toFixed(); //секунды
	//	
		console.log(t);
		console.log(t0);
		console.log(t1);
		console.log(t2);
	//

		if(t1 >= 10) {
			minute.innerHTML = t1;
		} else {
			minute.innerHTML = '0' + t1;
		}

		if(t2 >= 10) {
			second.innerHTML = t2;
		} else {
			second.innerHTML = '0' + t2;
		}
	}
	
	

	
	console.log(t);
	
	//setTimeout(addTime(t), 1000);
}


//Таймер
pomodoro[0].onclick = function() {
	//addTime(timeWork);
	
	++i;
	if (i%2 !== 0) { //по первому клику - таймер [пере]запущен
		addActive();
		
		addTime(10000);
		
		/*if(timeWork === 0) {
			removeActive();
			addCoffe();
		}
		addTime(timeCoffee);
		
		if(timeCoffee === 0) {
			removeCoffe;
		}*/
	} 
	else {			 //по второму клику - таймер отключен
		removeCoffe();
		removeActive();
	}
	
}







