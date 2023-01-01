"use strict";

"use strict";
(function() {
    let evenElements = document.getElementsByTagName('even');

    console.log(evenElements[0]);

    for (let i = 0; i < evenElements.length; i++) {
        console.log(evenElements[i]);
    }

    let listItems = document.getElementsByTagName('li');

    console.log(listItems[0]);

    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i]);
    }
}) ();