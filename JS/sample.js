
var a;
var b;
function foo() {
    a = 1;
    b = 1;
}

function bar() {
    foo();
    return a + b;
}

console.log(foo());
console.log(bar());