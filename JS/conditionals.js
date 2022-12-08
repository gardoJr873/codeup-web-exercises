"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    let colorChoice = prompt("What is your favorite color", " ")

        function analyzeColor() {

        let colors = ('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet');

        if (colorChoice === "red") {
            return "You chose red like the color of my Panigale 899!"
        } else if (colorChoice === "orange") {
            return "You chose orange like the color of an orange."
        } else if (colorChoice === "yellow") {
            return "You chose yellow which reminds me of the color of the sun!"
        } else if (colorChoice === "green") {
            return "You chose the color green which is associated with earth"
        } else if (colorChoice === "blue") {
            return "Blue, nice! The color of the sea!"
        } else if (colorChoice === "indigo") {
            return "You chose indigo, what is indigo?"
        } else if (colorChoice === "violet") {
            return "That's the color you named your cat after"
        } else {
            return "That's not a color you!"
        }
    }
    alert(analyzeColor())


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

        function analyzeColor() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        return randomColor;
    }
    analyzeColor()

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

    let colorChoice = prompt("What is your favorite color", " ")

    switch(colorChoice) {
        case "red":
            alert("You chose red like the color of my Panigale 899!");
            break;
        case "orange":
            alert("You chose orange like the color of an orange.");
            break;
        case "yellow":
            alert("You chose yellow which reminds me of the color of the sun!");
            break;
        case "green":
            alert("You chose the color green which is associated with earth");
            break;
        case "blue":
            alert("Blue, nice! The color of the sea!");
            break;
        case "indigo":
            alert("You chose indigo, what is indigo?");
            break;
        case "violet":
            alert("That's the color you named your cat after");
            break;
        default:
            alert(colorChoice + " isn't my favorite, but to each their own!");
            break;
    }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

    let colorChoice = prompt("Write in a color of your choice!", "")

    function analyzeColor() {
            return "You chose the color " + colorChoice;
        }
        alert(analyzeColor())

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

alert("Yay! You've been entered into a once in a lifetime promotion experience here at Walmart!")
    function walmartPromo() {

        let customerNum = parseInt(prompt("Please enter your amount for today's purchases ", " "))
        let randomWaliNum = Math.floor(Math.random() * (5 - 1) + 1);

            // if (randomWaliNum === 1) {

                let discount1 = (randomWaliNum/ 100) * customerNum;
                let firstDraw = alert("Your receipt amount was " `${customerNum}` + ", your lucky number is " `${randomWaliNum}`)
                    alert("You new lucky number will be applied to your amount")
                        alert("Nice! your new total is now" + discount1 - customerNum)
            // } else
            //     if(randomWaliNum === 2) {
            //
            //         let discount2 = (randomWaliNum - (25/ 100)) * customerNum;
            //         alert("Your receipt amount was " `${customerNum}` + ", your lucky number is " `${randomWaliNum}`)
            //             alert("You new lucky number will be applied to your amount")
            //                 alert("Nice! your new total is now" + discount2 - customerNum)
            //     } else
            //         if(randomWaliNum === 3) {
            //
            //             let discount3 = (randomWaliNum - (35/ 100)) * customerNum;
            //             alert("Your receipt amount was " `${customerNum}` + ", your lucky number is " `${randomWaliNum}`)
            //                 alert("You new lucky number will be applied to your amount")
            //                     alert("Nice! your new total is now" + discount3 - customerNum)
            //         }

    } walmartPromo()

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

function calculateTotal() {
        let totalBill = prompt("Please enter your total bill price", " ")
        let  luckyNumber = Math.floor(Math.random() * 6);
        let discount = ((luckyNumber/ 100) * totalBill).toFixed(2);
        let adjustedPrice = totalBill - discount;

        alert("Your lucky number was " + luckyNumber +"!")
            alert("Your total price was $" + totalBill)
                alert("Congrats, you new total is $" + adjustedPrice)
    }
    calculateTotal()



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

confirm("Would like to enter a number? ")
    let userNumChoice = parseInt(prompt("Please plug in your number choice! ", " "))
        if (userNumChoice % 2 === 0) {
            alert(`${userNumChoice}` + " is even")
        } else {
            alert(`${userNumChoice}` + " is odd")
        }
        if (userNumChoice)
            {
            let plus100 = userNumChoice + 100;
                alert(`${userNumChoice}` + " + 100 = " + plus100)
            } if (userNumChoice >= 0 ) {
                    alert(`${userNumChoice}` + " is positive")
                } else {
                    alert(`${userNumChoice}` + " is negative")
}