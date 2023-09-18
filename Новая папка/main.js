/// 1
for (let i = 1; i >= 100; i++) {
	{
        console.log(i);
    }
}
/// 2

for (let i = 100; i >= 1; i--) {
	{
        console.log(i);
    }
}

/// 3

for (let a = 1; a <= 100; i++) {
    if(a % 2 == 0) 
    console.log(a);

}

/// 4 

let arr = [];

for(i =1; i <= 10;i++) {
  arr[i] = 'x';
}

/// 5

let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr);

/// 6



/// 7

/// 8
 
let arr = [1, 2, 3, 4, 5];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res)

/// 9

/// 10

/// 11

/// 12

/// 13



/// 14

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

/// 15

var arr = [1, 2, 3, 4, 5];
 
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

/// 16

let arr = [1, 2, 3, 4, 4, 6, 7];
 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        console.log(arr[i]);
    } 
}

/// 17


/// 18

let arr = [70, 1, 30, 50, 235, 100];

for (let i = 0; i <= arr.length-1; i++) {

document.write(arr[i] + '<br>');

}

/// 19

let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write(arr[i] + '<b>' + ' ');
    } else {
        document.write(arr[i] + ' ');
    }
 
}

/// 20



/// 21

/// 22

/// 23

/// 24

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0,
    sum_elem = 0;
let res = 0;
for (let key in obj) {
  key = +key;
  sum += key;
  sum_elem +=obj[key];
  res = sum / sum_elem;
}
 
console.log(res) 

/// 25


///26



/// 27

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i <= arr.length; i++) {
    obj[i + 1] += arr;
}
console.log(obj);

/// 28

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[i] = arr[i];
  obj[obj[i]] = i + 1;

}
console.log(obj)