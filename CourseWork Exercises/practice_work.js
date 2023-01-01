// function sumOfTwoNumbers(x, d) {
//     return x + d;
// }
// console.log(sumOfTwoNumbers(5, 5))



// function minutesAndHours(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     return {hours, minutes};
// }
// console.log(minutesAndHours(5600))


function sumOfThreeNumbers(e, t, y) {
    return e + t + y;
}
console.log(sumOfThreeNumbers(24, 45, 65));

function sumOfFourNumbers(q, w, e, r) {
    return q + w + e + r;
}
console.log(sumOfFourNumbers(34, 87, 47, 34));


// function hourAndMinute(totalMinutes) {
//     const hour = Math.floor(totalMinutes/60);
//     const minute = totalMinutes % 60;
//
//     return `${padToTwoDigits(hour)}:${padToTwoDigits(minute)}`;
// }
// function padToTwoDigits(num) {
//     return num.toString().padStart(2, '0');
// }
// console.log(hourAndMinute(5644));

// function toHoursAndMinutes(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
// }

function hoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
}
console.log(hoursAndMinutes(500));

