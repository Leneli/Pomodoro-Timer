var pomodoro = document.getElementsByClassName('pomodoro'),
	minute = document.getElementById('minute'),
	second = document.getElementById('second'),
	popup = document.getElementById('popup'),
	message = document.getElementById('message'),
	ok = document.getElementById('ok'),
	timeWork = 1500000, //25m
	timeCoffee = 300000, //5m
	active = 'active', //таймер включен, время работать
	coffee = 'coffee', //таймер включен, время на кофе
	i = 0, //счетчик кликов по таймеру
	intervalID; 


//Таймер
pomodoro[0].onclick = function() {	
	++i;
	
	if (i%2 !== 0) { //по первому клику - таймер [пере]запущен
		pomodoro[0].classList.add('active');
		startTimer(5000);
		
		message.innerHTML = 'Coffee break!';
		ok.onclick = function() {
			pomodoro[0].classList.remove('active');
			pomodoro[0].classList.add('coffee');
			popup.classList.remove('block');
			
			message.innerHTML = "It's time to work!";
			startTimer(3000);
			ok.onclick = function() {
				pomodoro[0].classList.remove('active');
				pomodoro[0].classList.remove('coffee');
				printTime(timeWork);
				popup.classList.remove('block');
				
				i = 0; //обнуление счетчика кликов
			};
		};
	} 
	
	else {			 //по второму клику - таймер отключен
		pomodoro[0].classList.remove('active');
		pomodoro[0].classList.remove('coffee');
		clearInterval(intervalID);
		printTime(timeWork);
	}
};









//**************************** ГОТОВЫЕ РАБОТАЮЩИЕ ФУНКЦИИ

function startTimer (t) { //отсчет времени
	printTime(t);
	
	intervalID = setInterval(function() {
		t -= 1000;
		printTime(t);

		if(t < 1000) {
			clearInterval(intervalID);
			popup.classList.add('block');
		};
		
	}, 1000);
};


//Вывод времени на экран
function printTime(t) {
	var min, sec;
	
	t /=1000;
	
	if(t < 60) {
		min = 0;
		sec = t;
	} else {
		min = Math.floor(t/60);
		sec = t - (min*60);
	}
	
	if(min < 10) {
		minute.innerHTML = '0' + min;
	} else {
		minute.innerHTML = min;
	}
	
	if(sec < 10) {
		second.innerHTML = '0' + sec;
	} else {
		second.innerHTML = sec;
	}
};