// Union of two types 
var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id = id + 2;
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
// Union of particular values 
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"  // It will throw error as crew is not defined in values
