// const user: (string | number)[] = [1, "hc"]
// For serially input of a particular type value we use tuples 
let tUser: [string, number, boolean]
tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]
const newUser: User = [112, "example@google.com"]
newUser[1] = "hc.com"

export {}