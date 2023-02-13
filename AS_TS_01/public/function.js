"use strict";
function Cals() {
    return 10 + 10;
}
console.log(Cals());
// Doubt
function Calc1(a) {
    console.log(typeof (a));
    return a;
}
console.log(Calc1("100"));
// WITH DEFINED TYPES
function Calc2(a, b) {
    return a + b;
}
console.log(Calc2(100, 50));
// IF ONE IS NOT PASSED
function Calc3(a, b) {
    return b ? a + b : a;
}
console.log(Calc3(100));
