"use strict";

/**
 * Edgardo Ortiz Jr
 *
 * JavaScript with HTML Exercise 3 Working With Data Types, Operators, and Variables
 *
 *
 */

let y = "Hello from external JavaScript";
console.log(y);


//JavaScript with HTML Exercise 1 Working With Data Types, Operators, and Variables

    alert("Yay! Thanks for returning your rentals!!");

    function rentalCostTotal() {

        const dailyRate = 3.00;

        let merMaid = 'The Little Mermaid';
        let broBear = 'Brother Bear';
        let herc = 'Hercules';

        const rentalFee1 = Number(prompt("How many days was " + merMaid + " rented for?"  , ""));
            let combinedRentalFee1 = rentalFee1 * dailyRate;

        confirm("Ok, total for The Little Mermaid is  $" + combinedRentalFee1);

        const rentalFee2 = Number(prompt("How many days was " + broBear + " rented for?"  , ""));
            let combinedRentalFee2 = rentalFee2 * dailyRate;

        confirm("Ok, total for Hercules is  $" + combinedRentalFee2);

        const rentalFee3 = Number(prompt("How many days was " + herc + " rented for?"  , ""));
            let combinedRentalFee3 = rentalFee3 * dailyRate;

        confirm("And the total for The Little Mermaid is  $" + combinedRentalFee3);

        alert("Your final total is $" +Number(combinedRentalFee1 + combinedRentalFee2 + combinedRentalFee3))
    }
    console.log(rentalCostTotal())

//JavaScript with HTML Exercise 2 Working With Data Types, Operators, and Variables

    alert("Yo! Pay time!! We need to get your hours worked for this week!!");
    function bigGAF() {

        let hourlyRateGooG = 400;
            const hoursWorked = Number(prompt("How many hours did you put in for Google this week?"  , ""));
                let googPayment = hourlyRateGooG * hoursWorked;

        confirm("Ok great, you should be receiving  $" + googPayment);

        let hourlyRateAmaz = 380;
            const hoursWorked2 = Number(prompt("Ok and for Amazon?"  , ""));
                let amazPayment = hourlyRateAmaz * hoursWorked2;

        confirm("Ok, you should be getting  $" + amazPayment + " from Amazon.");

        let hourlyRateFacBook = 350;
            const hoursWorked3 = Number(prompt("What about Facebook?"  , ""));
                let facBookPayment = hourlyRateFacBook * hoursWorked3;

        confirm("Ok, expect  $" + facBookPayment + " from Facebook.");

        alert("Nice! You should expect this Friday to see $" +Number(googPayment + amazPayment + facBookPayment) + " deposited in your bank account!")
    }
    console.log(bigGAF())