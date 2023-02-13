let s1 = Symbol('Akshay');
let s2 = Symbol(10);
let s3 = Symbol('Akshay');

console.log(s1);

console.log(s1 === s3);

console.log(s1.toString());

let data = {
    [s2] : 'some data'
}

console.log(data[s2]);

let demoF1 = Symbol();

class Demo {
    [demoF1] () {
        return "some data from demo ";
    }
}

let d1 = new Demo();
console.log(d1[demoF1]());


 

