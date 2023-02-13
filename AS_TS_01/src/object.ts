// OBJECT TYPE

interface userType {
    name : string ,
    age : number ,
    city : string 
}

let user : userType = {
    name : 'Ajay',
    age : 30 ,
    city : 'Pune'
}

let user2 : any = {
    name : 'shubham',
    age : 30 ,
    city : 'Goa'
}

console.log(user);

// NOT ALLOWED
//user.name = 10;

// ADDING NEW PROPERTY IS ALSO NOT ALLOWED
//user.email = 'aksh@xyz.com';


// ALLOWED
user.name = 'Viraj';

console.log(user);




