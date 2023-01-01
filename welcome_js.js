"use strict";

let section = document.getElementById('section');
let element = <h2></h2>
function fadeOutOnScroll(element) {
    if (!element) {

    }
}
let distanceToTop = window.screenY + element.getBoundingClientRect().top;
let elementHeight = element.offsetHeight;
let scrollTop = section.scrollTop;

let opacity = 1;

if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
}

if(opacity >= 0) {
    element.style.opacity = opacity;
} else {

} function scrollHandler() {
    fadeOutOnScroll(section);
}
window.addEventListener('scroll', scrollHandler);