class App {
    //name = 'Akshay Shetkar'
    name : string;
    constructor(name : string) {
        console.log("constructor called");
        this.name = name;
    }

    getName() : void {
        console.log(this.name);
    }

}

// let a1 = new App();

// a1.getName();

let a2 = new App('Shubham');

a2.getName();


