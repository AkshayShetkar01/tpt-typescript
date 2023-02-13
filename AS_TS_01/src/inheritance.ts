 export {}
 class Parent {

     name : string;
     setName (name :string ) : void{
        this.name = name
     }
 }

 class Child extends Parent{
     getName() : string {
         return this.name;
     } 
 }

 let c1 = new Child();
 c1.setName("Akshay")

 console.log(c1.getName());