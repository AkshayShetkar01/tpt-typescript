let role : [string , string , number , number , boolean?] = ['admin' , 'manager' , 1, 3]
role.push(true)
role[1] = "user";
console.log(role);

// by using tuple we can limit the number of elements and define type for each element 
// it's like type destructuring

