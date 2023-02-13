let data : "akshay" | 10 ;

// only these two can be assigned 
data = "akshay"
data = 10

// not assignable
// data = "vinay"
// data = 30

function combine (a : number | string , b : number | string , type: "as-number" | "as-string") {
    
    if(type === "as-number") {
        return (+a) + (+b)
    } else {
        return a.toString() + b.toString() ;
    }
    
}

console.log(combine(10,20,"as-number"));

console.log(combine("Akshay " , "Shetkar" , "as-string"));