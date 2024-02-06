function addTwo(num: number){
    return num+ 2
}
addTwo(5)


function getUpper(val :string){
    return val.toUpperCase()
}
getUpper("maheswar")

// Function with multiple parameters 
function signUpUser(name: string, age: number, isPaid: boolean){}

// Arrow function and set default parameter
let signInUser = (name: string, age: number, isPaid: boolean= false) =>{}

// function addThree(num: number){
    // return num+ 3
    // return "Hello"
// }
// To avoid this multiple return types 
function addThree(num: number):number{
    return num+ 3
}

const heros = ["Thor", "Spiderman", "Ironman"]
heros.map((hero):string =>{
    return `Hero name ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
export{}