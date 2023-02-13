"use strict";
/// <reference path="./utils.ts"/>
var UserUtils;
(function (UserUtils) {
    class User extends UserUtils.Parent {
        getName() {
            return this.name;
            //return "Akshay Shetkar"
        }
    }
    UserUtils.User = User;
})(UserUtils || (UserUtils = {}));
let u1 = new UserUtils.User();
u1.setName("Kuldeep");
console.log(u1.getName());
