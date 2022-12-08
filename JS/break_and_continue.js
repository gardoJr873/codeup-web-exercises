"use strict"


let userNumber = prompt("Plug in an odd number between 1 and 50 ", " ")

while (userNumber !== null || userNumber !== " ") {

        if(userNumber % 2 !== 0) {
            alert('This is an odd number: ' + userNumber);
                userNumber = prompt("Plug in an odd number between 1 and 50 ", " ")

        }  if (userNumber % 2 === 0) {
                    alert('Yikes! Skipping number: ' + userNumber)
                        userNumber = prompt("Plug in an odd number between 1 and 50 ", " ")
                } else
                    if (userNumber !== NaN) {
                            alert("Hey that's not a number!")
                                break;
    }
}