/// <reference path="./utils.ts"/>

namespace UserUtils 
{
    export class User extends Parent implements userType{
        getName() {
            return this.name;
            //return "Akshay Shetkar"
        }
    }
}

let u1 = new UserUtils.User();

u1.setName("Kuldeep");
console.log(u1.getName());