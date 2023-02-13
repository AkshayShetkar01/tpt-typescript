"use strict";
class App {
    constructor(name) {
        console.log("constructor called");
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
// let a1 = new App();
// a1.getName();
let a2 = new App('Shubham');
a2.getName();
