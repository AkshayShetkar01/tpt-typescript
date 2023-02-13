interface userType {
    name : string ,
    age : number ,
    city : string ,
    getName : ()=> string
}

let user3 : userType = {
    name : 'Parth',
    age : 30 ,
    city : 'Mumbai',
    getName : function() {
        return 'Parth Kale'
    }
}

console.log(user3);
console.log(user3.getName());