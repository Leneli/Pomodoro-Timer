var doc = document,
	pomodoro = doc.getElementsByClassName('pomodoro'), //array, div.pomodoro
	timeWork = 1500000, //25m
	timeCoffee = 300000, //5m
	active = 'active', //таймер включен, время работы
	coffee = 'coffee', //таймер включен, время на кофе
	i = 0;

pomodoro[0].onclick = function() {
	++i;
	if (i%2 !== 0) {
		pomodoro[0].classList.add(coffee);
	} 
	else {
		pomodoro[0].classList.remove(coffee);
	}
	
}