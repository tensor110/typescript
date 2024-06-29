const User= {
    name: "Maheswar",
    age: 20,
    isPaid: true
}
function createUser({name: string, isPaid: boolean}){}
let newUser= {name: "Lucky", isPaid: false, email: "maheswar11@gmail.com"}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "Lucky", price: 399}
}

// Type Alias 
type User= {
    name: string,
    age: number,
    isPaid: boolean
}
function createCart(user: User):User{
    return {name: "", age: 10, isPaid: false}
}
createCart({name:"", age: 10, isPaid: false})

// Readonly and optional value in object 
type User1 = {
    readonly _id: string,  // readonly value
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number    // optional value may be given
}
let myUser:User1 = {
    _id: "12456783",
    name: "Ram",
    email: "Ram@gmail.com",
    isActive: true
}

myUser.name = "Shyam"
// myUser._id = "123" //It is giving error as it is a read-only value can't be changed

// combining multiple objects 
type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}