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

type User= {
    name: string,
    age: number,
    isPaid: boolean
}
function createCart(user: User):User{
    return {name: "", age: 10, isPaid: false}
}
createCart({name:"", age: 10, isPaid: false})

export {}