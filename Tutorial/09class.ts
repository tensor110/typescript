// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

// Another way 
class User {
    // private _courseCount = 1
    // private and protected variables are not accessible outsde the class but protect variables are accessible in extended class 
    protected _courseCount = 1
    
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
    // method (It can be public, private and protected)
    private deleteToken(){
        console.log("Token deleted");
    }

    // getter 
    get getAppleEmail(): string{
        return `apple${this.email}`
    }
    get courseCount(): number {
        return this._courseCount
    }

    // setter 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com","hitesh")

export {}