//1
// function changeSize() {
//     let div = document.getElementById("myDiv");
//     div.style.width = "400px";
//     div.style.height = "300px";
//   }

//2
// function showSize() {
//     let div = document.getElementById("elem");
//     let width = div.offsetWidth;
//     let height = div.offsetHeight;
//     alert("Ширина: " + width + ", Высота: " + height);
//   }

//3
// function showFontSize() {
//     let div = document.getElementById("elem");
//     let computedStyle = window.getComputedStyle(div); // Получаем вычисленный стиль элемента
//     let fontSize = computedStyle.fontSize; // Получаем размер шрифта
//     let fontSizeValue = parseFloat(fontSize); // Преобразуем размер шрифта в число

//     alert("Размер шрифта: " + fontSizeValue);
//   }











//1
// let elem = document.querySelector('div');
// let currentSize = parseFloat(window.getComputedStyle(elem).fontSize);
// let newSize = currentSize + 2;
// elem.style.fontSize = newSize + "px";

//2
// let elem = document.querySelector('div');
// let currentFontSize = parseInt(window.getComputedStyle(elem).fontSize); 
// elem.style.fontSize = (currentFontSize + 2) + 'px';

//3
// let elem = document.querySelector('div');
// let currentFontSize = parseFloat(window.getComputedStyle(elem).fontSize); 
// elem.style.fontSize = (currentFontSize + 2) + 'em';

//4
// function increaseSize() {
//     let elem = document.getElementById('elem');
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;
//     elem.style.width = (currentWidth + 50) + 'px';
//     elem.style.height = (currentHeight + 50) + 'px';
//   }

// 5
// function increaseSize() {
//     let elem = document.getElementById("elem");
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;
    
//     let newWidth = currentWidth * 1.1;
//     let newHeight = currentHeight * 1.1;
    
//     elem.style.width = newWidth + "px";
//     elem.style.height = newHeight + "px";
//   }








//1
// function showBorderDetails() {
//     let elem = document.getElementById("elem");
//     let computedStyle = window.getComputedStyle(elem);
//     let borderThickness = computedStyle.getPropertyValue('border-top-width');
//     let borderType = computedStyle.getPropertyValue('border-top-style');
//     let borderColor = computedStyle.getPropertyValue('border-top-color');
    
//     alert("Толщина: " + borderThickness + "\nТип: " + borderType + "\nЦвет: " + borderColor);
//   }










//1
// function hideElement() {
//     let elem = document.getElementById("elem");
//     elem.style.display = "none";
//   }

//   function showElement() {
//     let elem = document.getElementById("elem");
//     elem.style.display = "block";
//   }

// 2
// function changeColor(color) {
//     let elem = document.getElementById("elem");
//     elem.style.backgroundColor = color;
//   }










// 1
// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	margin: 10px auto;
//     color: red;
//     `;









//1
// function showSize() {
//     let elem = document.getElementById("elem");
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     alert("Ширина: " + width + "px\nВысота: " + height + "px");
//   }

//2
// function increaseSize() {
//     let elem = document.getElementById("elem");
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;
//     elem.style.width = (currentWidth * 2) + "px";
//     elem.style.height = (currentHeight * 2) + "px";
//   }











// 1
// function getSize() {
//     let fontSize = window.getComputedStyle(document.getElementById('elem')).fontSize;
//     alert("Размер шрифта: " + fontSize);
//   }











// 1
// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//   let number = parseInt(paragraphs[i].innerText);
//   if (number % 2 === 0) {
//     paragraphs[i].classList.add('red');
//   } else {
//     paragraphs[i].classList.add('green');
//   }
// }










//1
// function changeColor(paragraph) {
//     if (paragraph.classList.contains('red')) {
//       paragraph.classList.remove('red');
//     } else {
//       paragraph.classList.add('red');
//     }
//   }











// 1
// function checkInputLength(input) {
//     if (input.value.length <= 9) {
//         input.classList.remove('invalid-input');
//         input.classList.add('valid-input');
//     } else {
//         input.classList.remove('valid-input');
//         input.classList.add('invalid-input');
//     }
// }
















// 1
// const numberInput = document.getElementById('numberInput');

// numberInput.addEventListener('blur', function() {
//   const inputValue = parseInt(numberInput.value);
  
//   if (!isNaN(inputValue)) {
//     if (inputValue < 10) {
//       numberInput.style.backgroundColor = 'green';
//     } else if (inputValue >= 10 && inputValue <= 20) {
//       numberInput.style.backgroundColor = 'yellow';
//     } else {
//       numberInput.style.backgroundColor = 'red';
//     }
//   }
// });
















// 1
// document.addEventListener("DOMContentLoaded", 
// function() { document.getElementById("btn").addEventListener("click", 
// function() { let element = document.getElementById("myElement"); 
// let width = element.clientWidth; let height = element.clientHeight; console.log("Width: " + width + " Height: " + height);
//  }); });


















// 1
// function showElementSize() {
//     let element = document.getElementById("myElement");
//     let width = element.offsetWidth;
//     let height = element.offsetHeight;
//     console.log("Full Width: " + width + ", Full Height: " + height);
// }















//1
// document.getElementById('myButton').addEventListener('click', function() {
//     let element = document.getElementById('myElement');
//     console.log("Ширина с прокруткой: " + element.scrollWidth + "px");
//     console.log("Высота с прокруткой: " + element.scrollHeight + "px");
//   });










// 1
// function getScrollPosition() {
//     let element = document.getElementById('myElement');
//     let scrollPosition = element.scrollTop;
//     alert('Элемент прокручен на: ' + scrollPosition + 'px');
//   }

// 2
// function checkScrollPosition() {
//     let element = document.getElementById('myElement');
//     if (element.scrollTop > 0) {
//       alert('Элемент прокручен по вертикали');
//     } else {
//       alert('Элемент не прокручен по вертикали');
//     }
//   }

// 3
// function checkFullScroll() {
//     let element = document.getElementById('myElement');
//     let fullScrollHeight = element.scrollHeight - element.clientHeight;
//     alert('Полная прокрутка элемента: ' + fullScrollHeight + 'px');
//   }

//4
//  let element = document.getElementById("myElement");
// let scrollHeight = element.scrollHeight;
// let scrollOffset = scrollHeight - element.clientHeight;
// console.log("Значение: " + scrollOffset + "px");

// 5       
// let content = document.getElementById('content');
// let scrollHeight = content.scrollHeight;
// let offsetHeight = content.offsetHeight;
// let scrollTop = content.scrollTop;

// let result = scrollHeight - (offsetHeight + scrollTop);
// console.log('Результат: ' + result);



// 1
// function scrollDown() {
//     window.scrollBy({
//       top: 100,
//       behavior: 'smooth'
//     });
//   }













//1
// document.getElementById('scrollButton').addEventListener('click', function() {
//     let element = document.getElementById('element');
//     element.scrollTop += 100;
//     element.scrollLeft += 50;
//   });

// 2
// function scrollElement() {
//     let element = document.getElementById('scrollableElement');
//     element.scrollTop += 50;
// }

// 3
// function scrollToTop() {
//     let element = document.getElementById('scrollableElement');
//     element.scrollTop = 0;
// }

// 4
// function scrollToBottom() {
//     let element = document.getElementById('scrollableElement');
//     element.scrollTop = element.scrollHeight;
//   }


// 1
// function scrollToBottom() {
//     var element = document.querySelector('.scrollable-element');
//     element.scrollTop =  element.scrollHeight;
//   }

// 2
// document.getElementById('checkButton').addEventListener('click', function() {
//     let element = document.querySelector('.element');
//     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
//       console.log('Элемент прокручен до конца');
//     } else {
//       console.log('Элемент не прокручен до конца');
//     }
//   });




// 1
// document.getElementById("myButton").addEventListener("click", function() {
//     // Получаем высоту элемента
//     let element = document.getElementById("myElement");
//     let elementHeight = element.scrollHeight;

//     // Распахиваем элемент на всю высоту
//     element.style.height = elementHeight + "px";
//   });



// function getScrollbarWidth() {
//     let outer = document.createElement("div");
//     outer.style.visibility = "hidden";
//     outer.style.width = "100px";
//     outer.style.overflow = "scroll";
//     document.body.appendChild(outer);
  
//     let inner = document.createElement("div");
//     inner.style.width = "100%";
//     outer.appendChild(inner);        
  
//     let scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
//     document.body.removeChild(outer);
  
//     alert("Ширина полосы прокрутки: " + scrollbarWidth + "px");
//   }


// function getWindowSize() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     alert("Ширина окна: " + width + "px\nВысота окна: " + height + "px");
//   }



// function checkScroll() {
//     if (document.body.scrollHeight > window.innerHeight) {
//       alert("Вертикальная прокрутка присутствует");
//     } else {
//       alert("Вертикальная прокрутка отсутствует");
//     }
//   }


// function checkScroll() {
//     if (document.body.scrollWidth > window.innerWidth) {
//       alert("Горизонтальная прокрутка присутствует");
//     } else {
//       alert("Горизонтальная прокрутка отсутствует");
//     }
//   }





// function showHeight() {
//     let height = document.documentElement.scrollHeight;
//     alert("Высота с учетом прокрученной части: " + height + "px");
//   }


// function showWidth() {
//     let width = document.documentElement.scrollWidth;
//     alert("Ширина с учетом прокрученной части: " + width + "px");
//   }

// function showHiddenHeight() {
//     let hiddenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     alert("Высота спрятанной части под прокруткой: " + hiddenHeight + "px");
//   }


// function showVerticalScroll() {
//     let scrollPosition = window.scrollY;
//     alert("Прокручено по вертикали: " + scrollPosition + "px");
//   }


// function showRemainingScroll() {
//     let scrollPosition = window.scrollY;
//     let windowHeight = window.innerHeight;
//     let fullHeight = document.body.clientHeight;
//     let remainingScroll = fullHeight - (scrollPosition + windowHeight);
//     alert("Осталось прокрутить до конца: " + remainingScroll + "px");
//   }

// function scrollToPosition() {
//     window.scroll(0, 300);
//   }

// function scrollToPosition() {
//     let windowHeight = window.innerHeight;
//     window.scroll(0, document.body.scrollHeight - windowHeight - 100);
//   }

// function scrollToTop() {
//     window.scrollTo(0, 0);
//   }

//1
// function scrollToBottom() {
//     window.scrollTo(0, document.body.scrollHeight);
//   }

//2
// function scrollToPosition() {
//     window.scrollTo(0, 300);
//   }

//3
// function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }

// 1
// function scrollToBottom() {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//     });
//   }

// 2
// function scrollUp() {
//     window.scrollBy({
//       top: -100,
//       behavior: 'smooth'
//     });
//   }

// 3
// function scrollDown() {
//     window.scrollBy({
//       top: 300,
//       behavior: 'smooth'
//     });
//   }

//4
// function scrollUp() {
//     window.scrollBy({
//       top: -300,
//       behavior: 'smooth'
//     });
//   }

//1
// function scrollToElement() {
//     let element = document.getElementById('myElement');
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }

// 1
// window.addEventListener('scroll', function() {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       document.getElementById('bottom-message').style.display = 'block';
//     }
//   });

//1
// let array1 = ["apple", "banana", "orange"];
// let array2 = ["cat", "dog", "fish"];
// let array3 = ["red", "green", "blue"];

// let map = new Map();
// map.set(array1, "fruits");
// map.set(array2, "animals");
// map.set(array3, "colors");

// let output = document.getElementById("output");
// for (let key of map.keys()) {
//   output.innerHTML += "[" + key.toString() + "] : " + map.get(key) + "<br>";
// }


// 2
// const obj1 = { id: 1, name: 'Object 1' };
// const obj2 = { id: 2, name: 'Object 2' };
// const obj3 = { id: 3, name: 'Object 3' };


// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['x', 'y', 'z'];
// const arr3 = ['1', '2', '3'];


// const mapCollection = new Map();

// mapCollection.set(obj1, arr1);
// mapCollection.set(obj2, arr2);
// mapCollection.set(obj3, arr3);


// console.log(mapCollection);


// 1
// const mapCollection = new Map();
// mapCollection.set('key1', 'value1');
// mapCollection.set('key2', 'value2');
// mapCollection.set('key3', 'value3');

// const mapKeysArray = Array.from(mapCollection.keys());

// for (const key of mapKeysArray) {
//   console.log(key);
// }

//2
// const myMap = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
//   ]);

//   const mapArray = Array.from(myMap); // Convert the map to an array

//   for (const [key, value] of mapArray) {
//     console.log(`Key: ${key}, Value: ${value}`);
//   }




// 1
// document.addEventListener("DOMContentLoaded", function() {
//     const inputMap = new Map(); 
//     const inputs = document.querySelectorAll("input");
//     inputs.forEach((input, index) => {
//       inputMap.set(input, index + 1);
//       input.addEventListener("click", function() {
//         this.value = inputMap.get(this);
//       });
//     });
//   });



//1
// let numbers = [];

// function addNumber(event, inputId) {
//     if (event.key === 'Enter') {
//         let input = document.getElementById(inputId);
//         numbers.push(Number(input.value));
//         input.value = '';
//     }
// }

// document.getElementById('input1').addEventListener('blur', function() {
//     console.log(numbers);
// });
// document.getElementById('input2').addEventListener('blur', function() {
//     console.log(numbers);
// });
// document.getElementById('input3').addEventListener('blur', function() {
//     console.log(numbers);
// })



// 1
// let mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("cherry");
// mySet.add("apple"); 
// console.log(mySet);


//1
// let arr = [1, 2, 3, 1, 3, 4];
// 		let mySet = new Set(arr);
// 		console.log(mySet);


//2
// let mySet = new Set([1, 2, 3]);
//     mySet.add(2);

//     console.log(mySet);





//1
// let mySet = new Set([1, 2, 3]);
// document.write("Количество элементов в коллекции: " + mySet.size);

// 2
// let mySet = new Set([1, 2, 3]); 
// document.write("Наличие элемента со значением 3: " + mySet.has(3) + "<br>");
// document.write("Наличие элемента со значением 4: " + mySet.has(4));

//1
// let mySet = new Set([5, 10, 15, 20]);
// let sum = 0;
// for (let num of mySet) {
//   sum += num;
// }
// document.write("Сумма элементов коллекции: " + sum);


//1
// let mySet = new Set([1, 2, 3, 4, 5]);

// let arrayFromSet1 = [...mySet];
// let arrayFromSet2 = Array.from(mySet);

// document.write("Массив полученный с помощью spread: " + arrayFromSet1 + "<br>");
// document.write("Массив полученный с помощью Array.from(): " + arrayFromSet2);

//2
// let myArray = [1, 2, 3, 4, 5];
// let setFromArray = new Set(myArray);

// document.write("Коллекция Set, полученная из массива: " + Array.from(setFromArray));



//1
// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
//   }

//   let myArray = [1, 2, 2, 3, 4, 4, 5];

//   let arrayWithoutDuplicates = removeDuplicates(myArray);

//   document.write("Массив без дубликатов: " + arrayWithoutDuplicates);






// 1
// let clickedParagraphs = [];

// function addExclamation(element) {
//   if (!clickedParagraphs.includes(element)) {
//     clickedParagraphs.push(element);
//   }
// }

// function addExclamationMarks() {
//   for (let i = 0; i < clickedParagraphs.length; i++) {
//     clickedParagraphs[i].textContent += "!";
//   }
// }




// 1
// let length = elems.length;
// elems.forEach(element => {
//     // Действия с каждым элементом
// });
// let firstElement = elems[0];



// 1 Отличия от массивов в JavaScript
// let elems = document.querySelectorAll('p');

// elems.forEach(element => {
//     console.log(element.textContent);
// });




// 1 Проверка на массив в JavaScript

// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
// ];

// for (let i = 0; i < test.length; i++) {
//     let element = test[i];
    
//     if (Array.isArray(element)) {
//         console.log("Элемент " + i + " является массивом:", element);
//     } else {
//         console.log("Элемент " + i + " не является массивом.");
//     }
// }


// Преобразование к массиву в JavaScript

// 1
// let pseudoArray = document.querySelectorAll('.some-selector');
// let realArray = Array.from(pseudoArray);

// let pseudoArray = document.querySelectorAll('.some-selector');
// let realArray = [...pseudoArray];

// let pseudoArray = document.querySelectorAll('.some-selector');
// let realArray = Array.prototype.slice.call(pseudoArray);


// 2
// const elems = document.querySelectorAll('p');
// let filteredElems = Array.from(elems).slice(1, elems.length - 1);
// console.log(filteredElems);



// Разница между типами псевдомассивов в JavaScript

//1
// // Создаем родительский элемент
// let parentElement = document.getElementById("parent");

// // Создаем новый элемент
// let newElement = document.createElement("div");
// newElement.textContent = "Новый элемент";

// // Добавляем новый элемент в родительский элемент
// parentElement.appendChild(newElement);

// // Проверяем children
// console.log(parentElement.children);

//2
// // Создаем родительский элемент
// let parentElement = document.getElementById("parent");

// // Создаем новый элемент
// let newElement = document.createElement("div");
// newElement.textContent = "Новый элемент";

// // Добавляем новый элемент в родительский элемент
// parentElement.appendChild(newElement);

// // Проверяем childNodes
// console.log(parentElement.childNodes);



// Введение в тип Symbol в JavaScript

// 1
// const symbol1 = Symbol();
// const symbol2 = Symbol("Description of symbol 2");
// const symbol3 = Symbol("Description of symbol 3");

// console.log(symbol1);
// console.log(symbol2);
// console.log(symbol3);



// Описания символа в JavaScript

// 1
// const symbol1 = Symbol("Symbol 1 - This is a symbol with a description");
// const symbol2 = Symbol("Symbol 2 - Another symbol with a description");
// const symbol3 = Symbol("Symbol 3 - Third symbol with a description");

// console.log(symbol1.toString());
// console.log(symbol2.toString());
// console.log(symbol3.toString());


// Символы ключи объектов в JavaScript

// 1
// const symbolKey = Symbol("symbolKey");
// const obj = {
//     name: "John",
//     age: 30,
//     [symbolKey]: "Symbol as key"
// };
// console.log(obj[symbolKey]);

// 2
// const symbolKey = Symbol();
// const obj = {
//     name: "Alice",
//     age: 25,
//     [symbolKey]: "Symbol as key"
// };
// console.log(obj);





// Перебор объекта с символами в JavaScript

// 1
// const symbolKey = Symbol("symbolKey");

// const obj = {
//     name: "Bob",
//     age: 30,
//     [symbolKey]: "Symbol as key"
// };

// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }



// Функция в объекте в JavaScript

// 1
// const symbolKey = Symbol("symbolKey");
// const obj = {
//     name: "Bob",
//     age: 30,
//     [symbolKey]: "Symbol as key",
//     getCurrentTime: function() {
//         const currentTime = new Date().toLocaleTimeString();
//         console.log("Current time is: " + currentTime);
//     }
// };

// obj.getCurrentTime();


// Операции с объектами в функции в JavaScript

// 1
// function getSum() {
//     return this.reduce((acc, curr) => acc + curr, 0);
//     }
    
//     Array.prototype.getSum = getSum;
//     let arr = [1, 2, 3];
//     console.log(arr.getSum());


// 2
// function getSum() {
//     return this.reduce((acc, curr) => acc + curr, 0);
//     }
//     Array.prototype.getSum = getSum;
//     let arr = [1, 2, 3];
//     console.log(arr.getSum())

// 3
// arr.push(4, 5, 6);
// console.log(arr.getSum());



// Глобальные символы в JavaScript

// 1
// let obj1 = {
//     numbers: [1, 2, 3],
//     sum: function() {
//     return this.numbers.reduce((acc, curr) => acc + curr, 0);
//     }
//     };
    
//     let obj2 = {
//     numbers: [4, 5, 6],
//     sum: function() {
//     return this.numbers.reduce((acc, curr) => acc + curr, 0);
//     }
//     };
    
//     console.log(obj1.sum());
//     console.log(obj2.sum());



// Получение имени символа в JavaScript

// 1
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let name1 = Symbol.keyFor(sym1);
// let name2 = Symbol.keyFor(sym2);

// console.log(name1);
// console.log(name2);



// Хорошо известные символы в JavaScript

// 1
// let myMap = new Map();
// myMap.set(Symbol.for('test'), 'value');

// if (myMap.has(Symbol.iterator)) {
//     console.log('Ключ Symbol.iterator присутствует в коллекции Map');
// } else {
//     console.log('Ключ Symbol.iterator отсутствует в коллекции Map');
// }

// 2
// let mySet = new Set();
// mySet.add('value');

// if (mySet.has(Symbol.iterator)) {
//     console.log('Ключ Symbol.iterator присутствует в коллекции Set');
// } else {
//     console.log('Ключ Symbol.iterator отсутствует в коллекции Set');
// }



// Разница между типами псевдомассивов в JavaScript
// 1
// let newElement = document.createElement('div');
// newElement.textContent = 'Новый элемент';

// // Получение родительского элемента
// let parentElement = document.getElementById('parent');

// // Добавление нового элемента к родительскому
// parentElement.appendChild(newElement);

// // Свойство children будет обновлено и будет включать в себя новый элемент
// console.log(parentElement.children);

//2
// const parent = document.getElementById('parent');
//   const newElement = document.createElement('p');
//   newElement.textContent = 'Child 3';

//   parent.appendChild(newElement);

//   console.log(parent.childNodes);


// Введение в тип Symbol в JavaScript

//1
// let sym1 = Symbol();
// let sym2 = Symbol();

// console.log(sym1, sym2);

// Описания символа в JavaScript
// 1
// let sym1 = Symbol('qwertuiop');
// let sym2 = Symbol('hnjjjjjjjjii');
// let sym3 = Symbol('zxcvbnm,.p');
// let sym4 = Symbol('nbvcerty');
// console.log(sym);

// Символы ключи объектов в JavaScript
// 1
// const myObject = {
//     name: 'Alice',
//     age: 30,
//     [Symbol('description')]: 'This is a secret description'
//   };
  
//   console.log(myObject[Object.getOwnPropertySymbols(myObject)[0]]);

//2
// const myObject = {
//     name: 'Alice',
//     age: 30,
//     [Symbol('description')]: 'This is a secret description'
//   };
  
//   console.log(myObject);


// Перебор объекта с символами в JavaScript

// 1
// const symbolKey = Symbol('key');
// const myObject = {
//   name: 'Bob',
//   age: 25,
//   [symbolKey]: 'This is a symbol key'
// };
// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     console.log(key + ': ' + myObject[key]);
//   }
// }


// Функция в объекте в JavaScript

// 1
// const symbolKey = Symbol('key');

// const myObject = {
//   name: 'Bob',
//   age: 25,
//   [symbolKey]: 'This is a symbol key',
//   getCurrentTime: function() {
//     const currentTime = new Date().toLocaleTimeString();
//     console.log('Current time:', currentTime);
//   }
// };

// myObject.getCurrentTime();


// Операции с объектами в функции в JavaScript

// 1
// let arr = [1, 2, 3];

// Object.defineProperty(arr, 'getSum', {
//   value: function() {
//     let sum = 0;
//     this.forEach(function(element) {
//       sum += element;
//     });
//     return sum;
//   }
// });

// console.log(arr.getSum());

// 3
// Object.defineProperty(arr, 'getSum', {
//       value: function() {
//         let sum = 0;
//         this.forEach(function(element) {
//           sum += element;
//         });
//         return sum;
//       }
//     });
//     arr.push(4, 5, 6);
// console.log(arr.getSum());



// Глобальные символы в JavaScript

// 1
// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {x: 10, y: 20, z: 30};

// Object.defineProperty(obj1, 'sum', {
//   get: function() {
//     return Object.values(this).reduce((acc, curr) => acc + curr, 0);
//   }
// });

// Object.defineProperty(obj2, 'sum', {
//   get: function() {
//     return Object.values(this).reduce((acc, curr) => acc + curr, 0);
//   }
// });

// console.log(obj1.sum);
// console.log(obj2.sum);



// Получение имени символа в JavaScript

// 1
// const name1 = Symbol.keyFor(sym1); // "test1"
// const name2 = Symbol.keyFor(sym2); // "test2"


// Хорошо известные символы в JavaScript

// 1
// let myMap = new Map();
// let hasIterator = myMap.has(Symbol.iterator);

// console.log(hasIterator);

//2
// let mySet = new Set();
// let hasIterator = mySet.has(Symbol.iterator);

// console.log(hasIterator);



// Функция итератора в JavaScript


//1
// Массивы:
// console.log(Array.prototype[Symbol.iterator]);
// Строки:
// console.log(String.prototype[Symbol.iterator]);
// Map:
// console.log(Map.prototype[Symbol.iterator]);
// Set:
// console.log(Set.prototype[Symbol.iterator]);
// Генераторы:
// function* generator() { yield 1; yield 2; yield 3; }
// const gen = generator();

// console.log(gen[Symbol.iterator]);



// Вызовы итератора в JavaScript

// 1
// const myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');

// const iterator = myMap.values();

// let nextValue = iterator.next();
// while (!nextValue.done) {
//   console.log(nextValue.value);
//   nextValue = iterator.next();
// }

// 2
// const nodeList = document.querySelectorAll('p');
// const iterator = nodeList.values();

// let nextNode = iterator.next();
// while (!nextNode.done) {
//   console.log(nextNode.value);
//   nextNode = iterator.next();
// }


// 3
// const htmlCollection = document.getElementsByClassName('example-class');
// const iterator = htmlCollection[Symbol.iterator]();

// let nextElement = iterator.next();
// while (!nextElement.done) {
//   console.log(nextElement.value);
//   nextElement = iterator.next();
// }

// Генераторы в JavaScript

// 1
// const reverseNumberIterator = {
//     next: function() {
//       if (this.current === undefined || this.current <= 0) {
//         this.current = 5;
//       }
//       return { value: this.current--, done: false };
//     },
//   };
  
//   console.log(reverseNumberIterator.next().value);
//   console.log(reverseNumberIterator.next().value);
//   console.log(reverseNumberIterator.next().value);
//   console.log(reverseNumberIterator.next().value);
//   console.log(reverseNumberIterator.next().value);
//   console.log(reverseNumberIterator.next().value);


// Циклы в генераторах в JavaScript

// 1
// const numberIterator = {
//     next: function() {
//       if (this.current === undefined || this.current < 0) {
//         this.current = 10;
//       }
//       return { value: this.current--, done: false };
//     },
//   };
  
//   console.log(numberIterator.next().value);
//   console.log(numberIterator.next().value);
//   console.log(numberIterator.next().value);

// 2
// function* numberGenerator(num) {
//     while (num >= 0) {
//       yield num--;
//     }
//   }
  
//   const iterator = numberGenerator(10);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);

// 3
// function* halvingGenerator(num) {
//     while (num >= 1) {
//       yield num;
//       num /= 2;
//     }
//   }
  
//   const iterator = halvingGenerator(10);
//   for (let value of iterator) {
//     console.log(value);
//   }

// 4
// function* powerOfTwoIterator() {
//     let power = 0;
//     while (true) {
//       yield Math.pow(2, power);
//       power++;
//     }
//   }
  
//   const iterator = powerOfTwoIterator();
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);

// 5
// function* fibonacciIterator() {
//     let a = 0, b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
  
//   const iterator = fibonacciIterator();
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);


// Итератор объекта в JavaScript

// 1
// function* func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }

// let elems = func();

// for (let elem of elems) {
// 	console.log(elem);
// }

// elems = func();
// for (let elem of elems) {
// 	console.log(elem);
// }


// Создание итерируемого объекта в JavaScript

// 1
// let obj = {a: 1, b: 2, c: 3};
// obj[Symbol.iterator] = function() {
// 	let keys = Object.keys(this);
// 	let index = 0;
// 	return {
// 		next: () => {
// 			if (index < keys.length) {
// 				let key = keys[index];
// 				let value = this[key];
// 				index++;
// 				return { value: { key, val: value }, done: false };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };

// for (let elem of obj) {
// 	console.log(elem);
// }


//Генератор через вычисляемое свойство в JavaScript

//1
// let obj = {a: 1, b: 2, c: 3};

// for (let elem of obj) {
// 	console.log(elem);
// }


//Встроенный итератор values в JavaScript

//1
// let map = new Map;

// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// map[Symbol.iterator] = function() {
// 	let keys = [...this.keys()];
// 	let index = 0;
// 	return {
// 		next: () => {
// 			if (index < keys.length) {
// 				let key = keys[index];
// 				let value = this.get(key);
// 				index++;
// 				return { value: { key, val: value }, done: false };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };

// for (let elem of map) {
// 	console.log(elem);
// }


//2
// let set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');

// set[Symbol.iterator] = function() {
// 	let values = [...this.values()];
// 	let index = 0;
// 	return {
// 		next: () => {
// 			if (index < values.length) {
// 				let value = values[index];
// 				index++;
// 				return { value, done: false };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };

// for (let elem of set) {
// 	console.log(elem);
// }



// Встроенный итератор keys в JavaScript


//1
// let map = new Map();

// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.keys();

// for (let key of iter) {
//   console.log(key);
// }

//2
// let set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');

// let iter = set.keys();

// for (let key of iter) {
//   console.log(key);
// }


// Встроенный итератор entries в JavaScript

// 1
// let map = new Map();

// map.set(0, 'a');
// map.set(1, 'b');
// map.set(2, 'c');

// let iter = map.entries();

// for (let [key, value] of iter) {
//   console.log(key);   
//   console.log(value); 
// }

//2
// let set = new Set();

// set.add('a');
// set.add('b');
// set.add('c');

// let iter = set.entries();

// for (let [key, value] of iter) {
//   console.log(key);   
//   console.log(value); 
// }

//3
// let nodeList = document.querySelectorAll('p');

// let iter = nodeList.entries();

// for (let [key, value] of iter) {
//   console.log(key);
//   console.log(value.textContent);
// }


// Три встроенных итератора в JavaScript

// 1
// При переборе коллекции Set по умолчанию используется итератор значений (values()). 


// Оператор spread и итераторы в JavaScript

// 1
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };

// let spreadObj = {...obj};

// console.log(spreadObj);



// Встроенные итераторы строк в JavaScript

// 1
// let str = '12345';
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
// }

// console.log(sum);


// Массив цифр числа в JavaScript

// 1
// let number = 12345;
// let sum = 0;
// let numStr = number.toString();

// for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
// }

// console.log(sum);



// Нумерация DOM элементов в JavaScript

// 1
// let table = document.getElementById("myTable");
// let cellNumber = 1;

// for (let i = 0; i < table.rows.length; i++) {
//     for (let j = 0; j < table.rows[i].cells.length; j++) {
//         table.rows[i].cells[j].innerText = `Ячейка ${cellNumber}`;
//         cellNumber++;
//     }
// }


// Получение данных DOM элементов в JavaScript

//1
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
// console.log(input.id + ', ' + input.value);
// });


// Введение в формат JSON в JavaScript

// 1
// let arr = [1, 2, 3, 'a', 'b', 'c'];
// let jsonString = JSON.stringify(arr);
// console.log(jsonString);

//2
// let obj = {
//     a: 1,
//     b: 2,
//     c: 'eee',
//     d: true,
//     };
    
//     let jsonString = JSON.stringify(obj);
//     console.log(jsonString); 

//3
// let obj = {
//     a: ['a', 'b', 'c'],
//     b: '111',
//     c: 'eee',
//     };
    
//     let jsonString = JSON.stringify(obj);
//     console.log(jsonString);


//Преобразование JSON в структуру данных JavaScript

// 1
// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 2
// let json = {"data1": [1, 2, 3],"data2": [4, 5, 6],"data3": [7, 8, 9] }
// let obj = JSON.parse(json);
// let sum = 0;

// for (let key in obj) {
// sum += obj[key].reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum);

//3
// let json = '["user1","user2","user3","user4","user5"]';
// let users = JSON.parse(json);

// let listHtml = '<ul>';

// users.forEach(userName => {
//     listHtml += `<li>${userName}</li>`;
// });

// listHtml += '</ul>';

// document.body.innerHTML = listHtml;

// 4
// let json = [{"name": "user1", "age": 25, "salary": 1000}, {"name": "user2", "age": 26, "salary": 2000}, {"name": "user3", "age": 27, "salary": 3000}];
// let employees = JSON.parse(json);
// let tableHtml = '<table><tr><th>Name</th><th>Age</th><th>Salary</th></tr>';

// employees.forEach(employee => {
// tableHtml += <tr><td>${employee.name}</td><td>${employee.age}</td><td>${employee.salary}</td></tr>;
// });
// tableHtml += '</table>';
// document.body.innerHTML = tableHtml;


// Преобразование структур данных JavaScript в формат JSON

//1
// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let jsonString = JSON.stringify(json);
// console.log(jsonString);

//2
// let cities = [];
// document.querySelectorAll('ul li').forEach(li => {
//     cities.push(li.textContent);
// });
// let json = JSON.stringify(cities);
// console.log(json);

//3
// let data = [];
// document.querySelectorAll('table tr').forEach((row, index) => {
//     if (index > 0) {
//         let rowData = {
//             surname: row.querySelector('td:nth-child(1)').textContent,
//             name: row.querySelector('td:nth-child(2)').textContent,
//             patronymic: row.querySelector('td:nth-child(3)').textContent
//         };
//         data.push(rowData);
//     }
// });

// let json = JSON.stringify(data);
// console.log(json);



// Изменение данных в JSON на JavaScript

//1
// let json = '["user1","user2","user3","user4","user5"]';
// let newArray = JSON.parse(json);
// newArray.push("user6");

// json = JSON.stringify(newArray);
// console.log(json);

//2
// let json = '["user1","user2","user3","user4","user5"]';
// let array = JSON.parse(json);

// array[1] = "newUser2";

// json = JSON.stringify(array);
// console.log(json);

// 3
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// let newArray = JSON.parse(json);
// newArray.push({
//     "name": "user4",
//     "age": 28,
//     "salary": 4000
// });

// json = JSON.stringify(newArray);
// console.log(json);


// Работа с данными в localStorage в JavaScript

//1
// localStorage.setItem('number1', 10);
// localStorage.setItem('number2', 20);
// localStorage.setItem('number3', 30);
// let sum = 0;

// for (let i = 1; i <= 3; i++) {
//     sum += parseInt(localStorage.getItem('number' + i));
// }

// console.log('Сумма чисел:', sum);



// Однократное сохранение в localStorage в JavaScript

// 1
// const currentTime = new Date().getTime();
// localStorage.setItem('lastVisitTime', currentTime);
// const lastVisitTime = parseInt(localStorage.getItem('lastVisitTime'));

// if (lastVisitTime) {
//     const currentTime = new Date().getTime();

//     const timeDifference = currentTime - lastVisitTime;

//     const secondsDifference = Math.round(timeDifference / 1000);
//     const minutesDifference = Math.round(secondsDifference / 60);
//     const hoursDifference = Math.round(minutesDifference / 60);

//     console.log('Прошло времени с предыдущего посещения:', hoursDifference, 'часов', minutesDifference % 60, 'минут', secondsDifference % 60, 'секунд');
// } else {
//     console.log('Это первый заход пользователя на сайт');
// }

//2
// if(localStorage.getItem('dob')) {
//     let currentDate = new Date();
    
//     let dob = new Date(localStorage.getItem('dob'));
//     if(currentDate.getDate() === dob.getDate() && currentDate.getMonth() === dob.getMonth()) {
//       alert('С днем рождения, ' + localStorage.getItem('name') + '!');
//     }
//   }
//   let userDob = prompt('Введите вашу дату рождения в формате ДД.ММ.ГГГГ');
//   localStorage.setItem('dob', userDob);
  
//   let userName = prompt('Введите ваше имя');
//   localStorage.setItem('name', userName);

//3
// const input = document.querySelector('input');

// input.addEventListener('blur', function() {
// localStorage.setItem('inputValue', input.value);
// });

// document.addEventListener('DOMContentLoaded', function() {
// const savedValue = localStorage.getItem('inputValue');
// if (savedValue) {
// input.value = savedValue;
// }
// });


// Перезапись данных в localStorage в JavaScript

// 1
// const counterElement = document.getElementById('counter');
// let counter = localStorage.getItem('pageRefreshCounter') || 0;
// counter++;
// localStorage.setItem('pageRefreshCounter', counter);
// counterElement.textContent = `Страница обновлена ${counter} раз`;



// Удаление данных в localStorage в JavaScript

// 1
// const counterElement = document.getElementById('counter');
// let counter = localStorage.getItem('pageRefreshCounter') || 0;
// counter++;
// if (counter > 10) {
// counter = 0;
// }
// localStorage.setItem('pageRefreshCounter', counter);
// counterElement.textContent = `Страница обновлена ${counter} раз`;




// Очистка хранилища в localStorage в JavaScript
// 1
// localStorage.clear();
// console.log(localStorage);



// Получение ключа по номеру в localStorage в JavaScript

// 1
// let records = [10, 20, 30, 40, 50];
// console.log(records[0]);
// console.log(records[2]);
// console.log(records[4]);


// Перебор хранилища по индексам в JavaScript

// 1
// const displayData = () => {
//     const keys = Object.keys(localStorage);
    
//     keys.forEach(key => {
//     console.log(localStorage.getItem(key)); 
//     });
//     };
//     document.querySelector('button').addEventListener('click', displayData);



// Массивы ключей и значений хранилища в JavaScript

// 1
// const displayKeys = () => {
//     const keys = Object.keys(localStorage);
    
//     keys.forEach(key => {
//     console.log(key);
//     });
//     };
    
//     document.querySelector('button').addEventListener('click', displayKeys);

// 2
// const displayValues = () => {
//     const keys = Object.keys(localStorage);
    
//     keys.forEach(key => {
//     const value = localStorage.getItem(key);
//     console.log(value);
//     });
//     };
//     document.querySelector('button').addEventListener('click', displayValues);



// Хранение структур в localStorage в JavaScript

// 1
// const saveValuesToLocalStorage = () => {
//     const inputs = document.querySelectorAll('input');
//     const valuesArray = [];
    
//     inputs.forEach(input => {
//     valuesArray.push(input.value);
//     });
    
//     localStorage.setItem('inputValues', JSON.stringify(valuesArray));
//     };
//     document.querySelector('button').addEventListener('click', saveValuesToLocalStorage);

// 2
// function saveToLocalStorage() {
//     localStorage.setItem('input1Value', document.getElementById('input1').value);
//     localStorage.setItem('input2Value', document.getElementById('input2').value);
// }

// function loadFromLocalStorage() {
//     document.getElementById('input1').value = localStorage.getItem('input1Value') || '';
//     document.getElementById('input2').value = localStorage.getItem('input2Value') || '';
// }

// window.onload = loadFromLocalStorage;

// document.getElementById('input1').addEventListener('input', saveToLocalStorage);
// document.getElementById('input2').addEventListener('input', saveToLocalStorage);



// Модификация хранимых структур в localStorage в JavaScript

// 1
// localStorage.setItem('users', JSON.stringify(users)
// let usersFromStorage = JSON.parse(localStorage.getItem('users'));

// let surnameInput = document.createElement('input');
// surnameInput.placeholder = 'Фамилия';
// let nameInput = document.createElement('input');
// nameInput.placeholder = 'Имя';
// let ageInput = document.createElement('input');
// ageInput.placeholder = 'Возраст';
// let addButton = document.createElement('button');
// addButton.textContent = 'Добавить юзера';

// document.body.appendChild(surnameInput);
// document.body.appendChild(nameInput);
// document.body.appendChild(ageInput);
// document.body.appendChild(addButton);

// addButton.addEventListener('click', function() {

// let newUser = {
// surn: surnameInput.value,
// name: nameInput.value,
// age: parseInt(ageInput.value),
// };
// usersFromStorage.push(newUser);
// localStorage.setItem('users', JSON.stringify(usersFromStorage));
// });



// Практика на localStorage в JavaScript

// 1
// const checklist = {
//     tasks: [],
//     addTask(task) {
//       this.tasks.push({ task: task, done: false });
//     },
//     markAsDone(index) {
//       if (index >= 0 && index < this.tasks.length) {
//         this.tasks[index].done = true;
//       }
//     },
//     deleteTask(index) {
//       if (index >= 0 && index < this.tasks.length) {
//         this.tasks.splice(index, 1);
//       }
//     },
//     displayTasks() {
//       this.tasks.forEach((item, index) => {
//         console.log(`${index + 1}. ${item.task} - ${item.done ? 'Выполнено' : 'Не выполнено'}`);
//       });
//     }
//   };
  
//   checklist.addTask('Купить продукты в магазине');
//   checklist.addTask('Погулять с собакой');
//   checklist.addTask('Поработать над проектом');
//   checklist.displayTasks();
//   checklist.markAsDone(0);
//   checklist.displayTasks();
//   checklist.deleteTask(1);
//   checklist.displayTasks();



// 2
// let notes = []; 
//         function saveNote() { let noteText = document.getElementById('note-text').value;
//          notes.push(noteText); let notesList = document.getElementById('notes-list'); notesList.innerHTML = '';
//           notes.forEach((note, index) => { let li = document.createElement('li'); li.innerHTML = `<a href="#" onclick="openNote(${index})">Запись ${index + 1}</a>`;
//            notesList.appendChild(li); }); document.getElementById('note-text').value = ''; } 
//            function openNote(index) { document.getElementById('note-text').value = notes[index]; } 


//3
// const textarea = document.querySelector('#textarea');
// const addButton = document.querySelector('#add-button');
// const stickersContainer = document.querySelector('#stickers-container');

// addButton.addEventListener('click', () => {
//     const text = textarea.value;
    
//     if (text) {
//         const sticker = document.createElement('div');
//         sticker.classList.add('sticker');
//         sticker.textContent = text;
        
//         sticker.addEventListener('click', () => {
//             const newText = prompt('Edit your text:', sticker.textContent);
//             if (newText !== null) {
//                 sticker.textContent = newText;
//             }
//         });
        
//         stickersContainer.appendChild(sticker);
//         textarea.value = '';
//     } else {
//         alert('Please enter some text!');
//     }
// });

















































































































































































