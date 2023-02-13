"use strict";
let data;
// only these two can be assigned 
data = "akshay";
data = 10;
// not assignable
// data = "vinay"
// data = 30
function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20, "as-number"));
console.log(combine("Akshay ", "Shetkar", "as-string"));
