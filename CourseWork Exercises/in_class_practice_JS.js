// "use strict"
//
// const food = "pizza";
//
// switch (food) {
//     case "sushi":
//         console.log("Sushi is originally from Japan.");
//         break;
//     case "pizza":
//         console.log("Pizza is originally from Italy.");
//         break;
//     default:
//         console.log("I have never heard of that dish.");
//         break;
// }
//
//     const icecream = "Booger";
//
//     switch (icecream) {
//         case "vanilla":
//             console.log("Hhhmmmm, that flavor sounds delicious right now");
//                 break;
//         case "chocolate":
//             console.log("OOOhhhh that flavor sounds better");
//             break;
//         default:
//             console.log("That's not a flavor");
//             break;
//     }
//
//     const number = prompt("Enter a number: ");
//
//     // ternary operator
//     const result = (number % 2  == 0) ? "even" : "odd";
//
//     // display the result
//     console.log(`Here is an odd number ${result}.`);

// (function() {
//     "use strict";
//
//     // create a circle object
//     let circle = {
//         radius: 3,
//
//         getArea: function () {
//             // TODO: complete this method
//             // hint: area = pi * radius^2
//
//             const area = Math.PI * this.radius ** 2;
//
//             return area; // TODO: return the proper value
//         },
//
//         logInfo: function (doRounding) {
//             // TODO: complete this method.
//
//             //added
//             let area = this.getArea();
//
//             // If doRounding is true, round the result to the nearest integer.
//             // Otherwise, output the complete value
//
//             //added
//             if(doRounding === true) {
//                 area = Math.round(area);
//             }
//             console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
//         }
//     };
//
//     // log info about the circle
//     console.log("Raw circle information");
//
//     //added
//     console.log(circle.getArea());
//
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
//
//     console.log("=======================================================");
//     // TODO: Change the radius of the circle to 5.
//
//     // log info about the circle
//
//     //added
//     circle.radius = 5;
//
//     console.log("Raw circle information");
//
//     //added
//     console.log(circle.getArea());
//
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
// })();

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// program to print the value of i
for (let i = 1; i <= 50; i++) {
    // break condition
    if (i !== 3 % 0) {
        break;
    } else if (i === 3 % 0) {
        console.log("Here is an odd number: " + i)
    }

}

// program to print the value of i

// let userNumber = parseInt(prompt("Plug in an odd number between 1 and 50 ", " "))
for (let i = 1; i <= 5; i++) {
    // break condition
    if (i !== 2 % 0) {
        console.log("This is an odd number " + i);
        break;
    }
    console.log("This is an odd number " + i);
}


// let userNumber = parseInt(prompt("Plug in an odd number between 1 and 50 ", " "))
//
// while (userNumber > 1 || userNumber < 50 || userNumber % 2 !== 0 || userNumber % 2 === 0) {
//     let userNumber = parseInt(prompt("Plug in an odd number between 1 and 50 ", " "))
//         for (let i = 1; i < 50; i++) {
//             if(userNumber % 2 !== 0) {
//                 userNumber = parseInt(prompt("Plug in an odd number between 1 and 50 ", " "))
//                     alert('This is an odd number: ' + userNumber);
//
//             } else
//             if (userNumber % 2 === 0) {
//                  userNumber = parseInt(prompt("Plug in an odd number between 1 and 50 ", " "))
//                     alert('Yikes! Skipping number: ' + userNumber)
//                 break;
//             }
//         }
// }




///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////