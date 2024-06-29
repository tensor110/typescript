// Union of two types 
let score: number | string = 33
score = 44
score = "55"

// Union of two objects 
type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}
let hitesh: User | Admin = {name: "hitesh", id: 334}
hitesh = {username: "hc", id: 334}

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
    if (typeof id === "number") {
        id = id + 2
    }
}

//array 
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// Union of particular values 
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"  // It will throw error as crew is not defined in values