export{}
// ANY

let data : any ;

data = 20;
//data = 'Akshay';

let item : string ;

item = data;

console.log(typeof(item)); // number
console.log(item); // 20 or akshay as per latest


// UNKNOWN

let data2 : unknown ;

data2 = 30 ;
data2 = 'Aniket'

let item2 : string ;

// this is not assignable because of unknown type
// item2 = data2 ;

if (typeof data2 === 'string') {
    item2 = data2 ;
}

console.log(data2);




