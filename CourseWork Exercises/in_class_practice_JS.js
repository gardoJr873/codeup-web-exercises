"use strict";

//ARRAYS

// let fruits = ["peach", "apple", "pear", "banana"];
// console.log(fruits)

// console.log([0]);


// fruits[0] = "pineapple";
// console.log(fruits)

let cars = ["Nissan 300ZX", "Toyota Supra", "Mercedes-Benz AMG63", "Ford Shelby", "BMW M3",];

// console.log(cars[0]);

//for i Loops
//     show how to stop iteration

// cars.forEach(function (cars) {
//     console.log("My favorite cars are "+ cars);
// });

function printCars(cars, index) {
    if(cars === "190E") {
        return;
    }
    console.log(`${index + 1}, ${cars}`);
} printCars()

