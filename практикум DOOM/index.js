// 1

// 2
// function n2(){
// 	let	inp = document.getElementsByClassName("num");
// 	let p2 = document.getElementById("result");
// 	let sum = 0;
// 	for(let i=0; i<inp.length; i++){
// 		sum = sum + Number(inp[i].value);	
// 	}
// 	p2.innerHTML = 'Result = '+sum;
// }

// 3
// function n3(){
// 	let	inp = document.getElementById("num4");
// 	let p = document.getElementById("res4");
// 	let arr = inp.value.split(',');
// 	let sum = 0;
// 	for(let i=0; i<arr.length; i++){
// 		sum = sum + Number(arr[i]);
// 	}
// 	p.innerHTML = 'Srednee arifm number = '+sum/i;
// }

// 4
// let input = document.querySelector('.num');
// let paragraph = document.querySelector('.paragraph');

// input.addEventListener('blur', func);

// function func() {
//     let sum = 0;
//     let str = input.ariaValueMax;
//     let arr = str.split('')


// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }

// paragraph.innerHTML = sum/arr.length;
// }


5
let elem = document.getElementById('input');
elem.addEventListener('focus', func);
elem.addEventListener('blur', func2);

function func() {
    elem.placeholder = '';
}

function func2(){
    let elem = document.getElementById('input');
    let elems = document.getElementsByClassName('name');
    if (elem.value !==0) {
        let str = elemvalue;
        let arr = str.split('');
        for (let i = 0; i < arr.length; i++) {
            elems[i].value = arr[i]
        }
    }
    if (elem.value == 0) {
        elem.placeholder = "ФИО";
        for (let i = 0; i < elems.length; i++) {
            elems[i].value = '';
        }
    }
}








// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23