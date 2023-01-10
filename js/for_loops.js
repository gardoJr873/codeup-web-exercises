"use strict";


//Loops Exercise 2 Multiplication for loop function DONE

let n = 7;
for (let i = 1; i <= 10; ++i)
    console.log(n + " * " + i + " = " + n * i);

//Loops Exercise 3 Generate 10 random numbers between 20 and 200 DONE

for (let i = 0; i < 10; i++) {

    let max = 200;
    let min = 20
    let i = Math.ceil(Math.random() * (max-min) + min);

    if (i % 2 === 0) {
        console.log(i + " is an even number")
    } else
        if (i !== 0) {
            console.log(i + " is an odd number");
        }
}

//Loops Exercise 4 Left triangle number output

let y = 9;
let string = "";

for(let i = 1; i <= y; i++) {
    for(let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

//Loops Exercise 5 Single column reverse multiples of 5

for (let i = 0, j = 20 ; i < 20; i++, j--) {
    let r = j * 5;
    console.log(r);
}



