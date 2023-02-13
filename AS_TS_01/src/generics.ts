export

function user<T>(data :T) : T {
    return data;
}

//console.log(user({ name : 'akshay' , age : 30}));
console.log(user('Akshay'));