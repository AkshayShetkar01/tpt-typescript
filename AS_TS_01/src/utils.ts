namespace UserUtils {
    export class Parent {
        
        name : string ;
        setName(name) {
            return this.name = name;
        }
    }

    export interface userType {
        getName();
    } 
}