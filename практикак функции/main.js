//// 1
function sumOfArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += Array.isArray([i]) + arr[i];
        }
    return sum;
}
//// 2
function getSimpleDivisors(num){
    for(let j=1; j<num; j++){
        if(num % j == 0 && isSimple(j)){
            console.log(j);
        }
    }
}
//// 3
function symString(string)  {
    const symbols = []

    for (let i = 0; i < string.length; i++) {
        symbols.push(string.chart(i))
    }
    return sum;
}
//// 4
function turnoverrString(string) {
    return string.spilt('').reverse().join('')
}
const originalString ="Good buy Worlod"
const turnoverrString = turnoverrString(originalString);
console.log(turnoverrString)

//// 5
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("пока мир") );


//// 6
let string = 'I am  the code';
for (let i = 0; i < string.length; i++){
    console.log()
}
//// 7
function arrayNum(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array;
  }
  
  console.log(arrayNum(7));
  
//// 8
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for(let i = 0; i < str.length; i++) sum += Number(str[i]);
    return sum;
}
//// 9
let year = 2000;
if (year%400 ===0 ){
   console.log(year + "високосный");
  return;
}

 if  (year % 100 === 0 ) {
    console.log(year + "невисокосный");
   return;
} 
if (year %4 ===0){
  console.log(year + "високосный");
return;
}
else {
    console.log(year + "невисокосный");
}
//// 10
function getSecondsToTomorrow(){
    let d = new Date();
    let s = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    d.setHours(23, 59, 59, 59);
    let v = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
     let e = v  - s;
     return e;
  }
  console.log(getSecondsToTomorrow())
//// 11 
function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
 }
//// 12
