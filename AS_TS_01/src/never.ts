function apiError(msg , code) : never {
    throw {message : msg , apiCode : code}
}

console.log(apiError("server side error" , 500));

// to mainatin a standard 
// to show that the function will return nothing and only error will be return 
// void does the same thing but to maintain standard