// Калькуляторы фигур
//
// 1
// document.querySelector('.create-btn').addEventListener('click', function(){
//     const val = document.querySelector('.side').value || 0;
//  document.querySelector('.result').innerHTML = 'Периметр: ' + val * 4 + '<br />' + 'Площадь: ' + val * val;
// });

// 2
// document.querySelector('.create-btn').addEventListener('click', function(){
//     const val = document.querySelector('.side').value || 0;
//  document.querySelector('.result').innerHTML = 'Периметр: ' + val * 3 + '<br />' + 'Площадь: ' + (val * val) / 2;
// });


// 3
// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// let c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));

// 4
// let width = document.querySelector("#width");
//     let length = document.querySelector("#length");
//     let height = document.querySelector("#height");
//     let area = document.querySelector("#area");
//     go.addEventListener('click', function() {
//         let halfPerimetr = (+width.value + +length.value + +height.value) / 2;
//         area.value = Math.sqrt(halfPerimetr * (halfPerimetr - width.value) * (halfPerimetr - length.value) * (halfPerimetr - height.value));})


//Математические калькуляторы на JavaScript
//1
// function solveQuadratic() {
//     let a = parseFloat(document.getElementById('a').value);
//     let b = parseFloat(document.getElementById('b').value);
//     let c = parseFloat(document.getElementById('c').value);

//     let discriminant = b * b - 4 * a * c;

//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         document.getElementById('result').innerText = 'Корни уравнения: ' + root1 + ' и ' + root2;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         document.getElementById('result').innerText = 'Уравнение имеет единственный корень: ' + root;
//     } else {
//         document.getElementById('result').innerText = 'Уравнение не имеет действительных корней';
//     }
// }

// 2
// let num1 = parseFloat(prompt("Введите первое число:"));
// let num2 = parseFloat(prompt("Введите второе число:"));
// let num3 = parseFloat(prompt("Введите третье число:"));

// // Проверка условия тройки Пифагора
// if (Math.pow(num1, 2) === Math.pow(num2, 2) + Math.pow(num3, 2) ||
//     Math.pow(num2, 2) === Math.pow(num1, 2) + Math.pow(num3, 2) ||
//     Math.pow(num3, 2) === Math.pow(num1, 2) + Math.pow(num2, 2)) {
//     console.log("Введенные числа являются тройкой Пифагора.");
// } else {
//     console.log("Введенные числа не являются тройкой Пифагора.");
// }

// 3
// function findDivisors() {
//     let number = parseInt(document.getElementById("numberInput").value);
//     let divisors = [];

//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             divisors.push(i);
//         }
//     }

//     document.getElementById("result").textContent = "Делители: " + divisors.join(", ");
// }

// 4
// function findCommonDivisors() {
//     let number1 = parseInt(document.getElementById("number1Input").value);
//     let number2 = parseInt(document.getElementById("number2Input").value);
//     let divisors = [];

//     for (let i = 1; i <= Math.min(number1, number2); i++) {
//         if (number1 % i === 0 && number2 % i === 0) {
//             divisors.push(i);
//         }
//     }

//     document.getElementById("result").textContent = "Общие делители: " + divisors.join(", ");
// }

// 5
// function findGreatestCommonDivisor() {
//     let number1 = parseInt(document.getElementById("number1Input").value);
//     let number2 = parseInt(document.getElementById("number2Input").value);

//     // Находим наибольший общий делитель с помощью алгоритма Евклида
//     while (number2 !== 0) {
//         let temp = number2;
//         number2 = number1 % number2;
//         number1 = temp;
//     }

//     document.getElementById("result").textContent = "Наибольший общий делитель: " + number1;
// }

// 6
// function findLeastCommonMultiple() {
//     let number1 = parseInt(document.getElementById("number1Input").value);
//     let number2 = parseInt(document.getElementById("number2Input").value);

//     let leastCommonMultiple = (number1 * number2) / findGreatestCommonDivisor(number1, number2);

//     document.getElementById("result").textContent = "Наименьшее число, делящееся на оба числа: " + leastCommonMultiple;
// }

// function findGreatestCommonDivisor(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }


// 7
// let secretNumber = Math.floor(Math.random() * 100) + 1; // Загадываем число от 1 до 100

// function checkGuess() {
//     var guess = parseInt(document.getElementById("guessInput").value);

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         document.getElementById("result").textContent = "Введите число от 1 до 100!";
//     } else if (guess < secretNumber) {
//         document.getElementById("result").textContent = "Введите число побольше!";
//     } else if (guess > secretNumber) {
//         document.getElementById("result").textContent = "Введите число поменьше!";
//     } else {
//         document.getElementById("result").textContent = "Вы угадали число!";
//     }
// }


// игра угадай ячейку
// let sign = 'X'; 
// let game_mod = true; 

// const cells = Array.from(document.getElementsByClassName('cell'));

// const set_title_move = (num, result) => {
//   const title = document.getElementById('title');
//   title.innerHTML = `Вы выбрали: ${num}. ${result}`;
//   title.style.color = 'blue';
// }


// const move = (ind) => {
//   cells[ind].style.color = (sign === 'X') ? 'red' : 'green';
// }

// const secret = Math.ceil(Math.random() * 100);

// const check_winner = (num) => {
//   const diff = (secret < num) - (secret > num);

//   switch (diff) {
//     case -1:
//       return 'Недолёт.';
//     case 1:
//       return 'Перелёт.';
//     case 0:
//       return 'Угадал!';
//     default:
//       return `Что-то не так: секрет ${secret}.`;
//   }
// }

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', () => {
//     move(i);
//     const result = check_winner(i + 1);
//     set_title_move(i + 1, result);
//   });
// }

// let i = 0;

// let id = setInterval(function() {
// 	i++;
	
// 	if (i == 100) {
// 		clearInterval(id);
// 	} else {
// 		console.log(i);
// 	}
// }, 1000);

// let countdown = 60;
// const countdownElement = document.getElementById("countdown");
// const timerInterval = setInterval(() => {
//     countdown--;
//     countdownElement.textContent = countdown;

//     if (countdown <= 0) {
//         clearInterval(timerInterval);
//         alert("Время вышло! Вы проиграли.");
//     }
// }, 1000);


// экраная клавиатура
// let capsLock = false;
//         let inputText = document.getElementById("inputText");
//         let keys = document.getElementsByClassName("key");
        
//         for (let i = 0; i < keys.length; i++) {
//             keys[i].addEventListener("click", function() {
//                 let letter = this.textContent;
//                 if (capsLock) {
//                     letter = letter.toUpperCase();
//                 }
//                 inputText.value += letter;
//             });
//         }
        
//         document.addEventListener("keydown", function(event) {
//             if (event.keyCode === 20) {
//               capsLock = !capsLock;
//             }
//         });

// календарь
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();

// function generateCalendar(month, year) {
//     let calendar = document.getElementById('calendar');
//     let headerMonth = document.getElementById('month');
//     let headerYear = document.getElementById('year');
//     let prevMonthLink = document.getElementById('prev-month');
//     let nextMonthLink = document.getElementById('next-month');

//     headerMonth.textContent = getMonthName(month);
//     headerYear.textContent = year;

//     calendar.innerHTML = '';

//     for (let day = 1; day <= getDaysInMonth(month, year); day++) {
//         var li = document.createElement('li');


//         if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
//             li.classList.add('highlighted');
//         }

//         li.textContent = day;
//         calendar.appendChild(li);
//     }

//     prevMonthLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (month === 0) {
//             generateCalendar(11, year - 1);
//         } else {
//             generateCalendar(month - 1, year);
//         }
//     });
//     nextMonthLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         if (month === 11) {
//             generateCalendar(0, year + 1);
//         } else {
//             generateCalendar(month + 1, year);
//         }
//     });
// }
// function getMonthName(month) {
//     let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
//     return monthNames[month];
// }
// function getDaysInMonth(month, year) {
//     return new Date(year, month + 1, 0).getDate();
// }

// generateCalendar(currentMonth, currentYear);




// Поиск тегов на JavaScript

// const tagDescriptions = {
//     'div': 'Элемент делит документ на разделы.',
//     'p': 'Параграф текста.',
//     'a': 'Гиперссылка.',
//   };

//   function findTagDescription() {
//     const tagInput = document.getElementById('tagInput');
//     const tagDescriptionDiv = document.getElementById('tagDescription');

//     const tagName = tagInput.value.toLowerCase();

//     if (tagDescriptions.hasOwnProperty(tagName)) {
//       tagDescriptionDiv.innerText = tagDescriptions[tagName];
//     } else {
//       tagDescriptionDiv.innerText = 'Описание не найдено';
//     }
//   }

//   const tagInput = document.getElementById('tagInput');
//   tagInput.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//       findTagDescription();
//     }
//   });


// Поиск исторических событий на Java Script
// function getEvents() {

//     let year = document.getElementById('yearInput').value;

//     let tableBody = document.querySelector('#eventsTable tbody');
//     tableBody.innerHTML = '';

//     let eventData = [
//       { date: '01.01.' + year, title: 'Новый год', description: 'Празднование Нового года.' },
//       { date: '07.11.' + year, title: 'Российская революция', description: 'Октябрьское вооруженное восстание в России.' },

//     ];

//     eventData.forEach(function(event) {
//       let row = tableBody.insertRow();
//       let cell1 = row.insertCell(0);
//       let cell2 = row.insertCell(1);
//       let cell3 = row.insertCell(2);
//       cell1.innerHTML = event.date;
//       cell2.innerHTML = event.title;
//       cell3.innerHTML = event.description;
//     });
//   }


// гороскоп

// function getHoroscope() {
//     const birthdate = document.getElementById('birthdate').value;
//     const selectedDay = document.querySelector('input[name="day"]:checked').value;

//     const horoscopeResult = document.getElementById('horoscopeResult');
//     horoscopeResult.innerHTML = `<p>Гороскоп для ${birthdate} на ${selectedDay}:</p><p>Ваши предсказания здесь...</p>`;
//   }



// 
//автодополнение
//const countries = ['text', 'text', 'text', 'text']

// const input = document.getElementById('country-input');
// const list = document.getElementById('country-list');

// input.addEventListener('input', function() {

//   while (list.firstChild) {
//     list.removeChild(list.firstChild);
//   }
  
//   
//   const filteredCountries = countries.filter(function(country) {
//     return country.toLowerCase().startsWith(input.value.toLowerCase());
//   });
  
//   
//   filteredCountries.forEach(function(country) {
//     const li = document.createElement('li');
//     li.textContent = country;
//     list.appendChild(li);
//   });
// });

// спойлеры
// document.querySelector('.toggle').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.spoiler').classList.toggle('active');
// });


// вкладки
// document.querySelectorAll('.tab-link').forEach((link, index) => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();

//     // Убираем активный класс у всех ссылок
//     document.querySelectorAll('.tab-link').forEach(link => {
//       link.classList.remove('active');
//     });

//     // Убираем активный класс у всех вкладок
//     document.querySelectorAll('.tab-content').forEach(content => {
//       content.classList.remove('active');
//     });

//     // Активируем текущую ссылку
//     this.classList.add('active');

//     // Активируем соответствующую вкладку
//     document.querySelectorAll('.tab-content')[index].classList.add('active');
//   });
// });

//аккордеон
// document.addEventListener('DOMContentLoaded', function() {
//   let accordionItems = document.querySelectorAll('.accordion-item');

//   accordionItems.forEach(function(item) {
//     item.querySelector('.accordion-link').addEventListener('click', function(e) {
//       e.preventDefault();
//       let content = this.nextElementSibling;
//       if (content.style.display === 'block') {
//         content.style.display = 'none';
//       } else {
//         accordionItems.forEach(function(item) {
//           item.querySelector('.accordion-content').style.display = 'none';
//         });
//         content.style.display = 'block';
//       }
//     });
//   });
// });


// Игра в города
// let cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Нижний Новгород", "Казань", "Челябинск", "Омск", "Самара", "Ростов-на-Дону", "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград", "Краснодар", "Саратов", "Тюмень"];

// let usedCities = [];

// function nextCity() {
//     let input = document.getElementById("inputCity").value;
//     if (input === "") {
//         alert("Введите город!");
//     } else {
//         let lastLetter = input[input.length - 1];
//         if (usedCities.includes(input) || !cities.includes(input) || (usedCities.length > 0 && usedCities[usedCities.length - 1][usedCities[usedCities.length - 1].length - 1] !== lastLetter)) {
//             alert("Некорректный город!");
//         } else {
//             usedCities.push(input);
//             document.getElementById("output").innerHTML = "Ваш город: " + input;
//             let nextCity = "";
//             for (let i = 0; i < cities.length; i++) {
//                 if (!usedCities.includes(cities[i]) && cities[i][0].toUpperCase() === lastLetter.toUpperCase()) {
//                     nextCity = cities[i];
//                     break;
//                 }
//             }
//             if (nextCity === "") {
//                 alert("Вы победили!");
//             } else {
//                 usedCities.push(nextCity);
//                 document.getElementById("output").innerHTML += "<br>Мой город: " + nextCity;
//             }
//         }
//     }
//     document.getElementById("inputCity").value = "";
//     document.getElementById("inputCity").focus();
// }



// чеклист

// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });
// }

// калькулятор продуктов

// function calculateTotal() {
//   let product1 = parseInt(document.getElementById('product1').value);
//   let product2 = parseInt(document.getElementById('product2').value);
//   let product3 = parseInt(document.getElementById('product3').value);

//   let totalPrice = product1 + product2 + product3;

//   document.getElementById('totalPrice').innerText = totalPrice;
// }

// cлайдер текста

// const textContainer = document.querySelector('.text-container');
//     const texts = document.querySelectorAll('.text');
//     let index = 0;

//     function slideText() {
//       index = (index + 1) % texts.length;
//       const offset = -index * texts[0].offsetWidth;
//       textContainer.style.transform = `translateX(${offset}px)`;
//     }

//     setInterval(slideText, 2000);

// слайдер картинок
// let slideIndex = 1;
// showSlide(slideIndex);

// function plusSlide(n) {
//   showSlide(slideIndex += n);
// }

// function showSlide(n) {
//   let slides = document.getElementsByClassName("slide");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";

// Kpecтики-нолики

// const X_CLASS = 'x';
// const O_CLASS = 'o';
// const cellElements = document.querySelectorAll('[data-cell]');
// let circleTurn;

// startGame();

// function startGame() {
//   circleTurn = false;
//   cellElements.forEach(cell => {
//     cell.addEventListener('click', handleClick, { once: true });
//   });
// }

// function handleClick(e) {
//   const cell = e.target;
//   const currentClass = circleTurn ? O_CLASS : X_CLASS;

//   placeMark(cell, currentClass);
// }

// function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass);
// }

// function swapTurns() {
//   circleTurn = !circleTurn;
// }

// function setBoardHoverClass() {
//   board.classList.remove(X_CLASS);
//   board.classList.remove(O_CLASS);
//   if (circleTurn) {
//     board.classList.add(O_CLASS);
//   } else {
//     board.classList.add(X_CLASS);
//   }
// }

// смена цветов
// const squares = document.querySelectorAll('.square');

// let currentSquare = 0;
// let score = 0;

// const getRandomColor = () => {
// 	const letters = '0123456789ABCDEF';
// 	let color = '#';
// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// };

// const handleClick = (event) => {
// 	if (event.target.classList.contains('active')) {
// 		score++;
// 	} else {
// 		score--;
// 	}

// 	document.querySelector('.score span').textContent = score;

// 	squares[currentSquare].classList.remove('active');

// 	do {
// 		currentSquare = Math.floor(Math.random() * squares.length);
// 	} while (currentSquare === squares[currentSquare]);

// 	squares[currentSquare].style.backgroundColor = getRandomColor();
// 	squares[currentSquare].classList.add('active');
// };

// squares[currentSquare].style.backgroundColor = getRandomColor();
// squares[currentSquare].classList.add('active');

// squares.forEach(square => {
// 	square.addEventListener('click', handleClick);
// });





















































