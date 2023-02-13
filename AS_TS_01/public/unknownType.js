"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ANY
let data;
data = 20;
//data = 'Akshay';
let item;
item = data;
console.log(typeof (item)); // number
console.log(item); // 20 or akshay as per latest
// UNKNOWN
let data2;
data2 = 30;
data2 = 'Aniket';
let item2;
// this is not assignable because of unknown type
// item2 = data2 ;
if (typeof data2 === 'string') {
    item2 = data2;
}
console.log(data2);
