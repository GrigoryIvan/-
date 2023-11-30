let sign = 'X'; 
let game_mod = true; 

const cells = Array.from(document.getElementsByClassName('cell'));

const set_title_move = (num, result) => {
  const title = document.getElementById('title');
  title.innerHTML = `Вы выбрали: ${num}. ${result}`;
  title.style.color = 'blue';
}


const move = (ind) => {
  cells[ind].style.color = (sign === 'X') ? 'red' : 'green';
}

const secret = Math.ceil(Math.random() * 100);

const check_winner = (num) => {
  const diff = (secret < num) - (secret > num);

  switch (diff) {
    case -1:
      return 'Недолёт.';
    case 1:
      return 'Перелёт.';
    case 0:
      return 'Угадал!';
    default:
      return `Что-то не так: секрет ${secret}.`;
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    move(i);
    const result = check_winner(i + 1);
    set_title_move(i + 1, result);
  });
}

let i = 0;

let id = setInterval(function() {
	i++;
	
	if (i == 100) {
		clearInterval(id);
	} else {
		console.log(i);
	}
}, 1000);

let countdown = 60;
const countdownElement = document.getElementById("countdown");
const timerInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timerInterval);
        alert("Время вышло! Вы проиграли.");
    }
}, 1000);

