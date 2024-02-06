"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Maheswar",
    age: 20,
    isPaid: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Lucky", isPaid: false, email: "maheswar11@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "Lucky", price: 399 };
}
function createCart(user) {
    return { name: "", age: 10, isPaid: false };
}
createCart({ name: "", age: 10, isPaid: false });
