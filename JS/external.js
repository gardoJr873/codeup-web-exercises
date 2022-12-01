
"use strict";
let y = "Hello from external JavaScript";
console.log(y);

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

