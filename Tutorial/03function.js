"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("maheswar");
// Function with multiple parameters 
function signUpUser(name, age, isPaid) { }
// Arrow function and set default parameter
var signInUser = function (name, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// function addThree(num: number){
// return num+ 3
// return "Hello"
// }
// To avoid this multiple return types 
function addThree(num) {
    return num + 3;
}
var heros = ["Thor", "Spiderman", "Ironman"];
heros.map(function (hero) {
    return "Hero name ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
