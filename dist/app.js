"use strict";
let id = 5;
let company = 'this is a string';
let isPublished = true;
let age;
age = 21;
let arr = [];
arr.push(5);
const user = { id: 1, name: "sayed" };
const userOne = {
    id: 8,
    name: 'favas'
};
let a = 'a';
a = 6;
let person = ['a', 5, true];
let employee;
employee = [
    [5, "ippu"],
    [5, "ippu"],
    [5, "ippu"],
];
let uid = 5;
uid = 'b';
var directionOne;
(function (directionOne) {
    directionOne[directionOne["up"] = 5] = "up";
    directionOne[directionOne["down"] = 6] = "down";
})(directionOne || (directionOne = {}));
console.log(directionOne.up, directionOne.down);
var directionTwo;
(function (directionTwo) {
    directionTwo["up"] = "UP";
    directionTwo["down"] = "DOWN";
})(directionTwo || (directionTwo = {}));
let oid = 1;
let oidNum = oid;
console.log(oidNum);
let oidOne = 1;
let oidNumOne = oidOne;
let add = (a, b) => {
    return a + b;
};
console.log(add(1, 5));
let log = (messgae) => {
    console.log(messgae);
};
const userTwo = {
    id: 9,
    name: 'yaseen'
};
const addNum = (a, b) => {
    return a + b;
};
console.log(addNum(8, 5));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const favas = new Person(8, 'favas');
console.log(favas.register());
class Employ extends Person {
    constructor(id, name, position) {
        super(id, name),
            this.position = position;
    }
}
const favasEmployee = new Employ(8, 'favas', 'Developer');
favasEmployee.register();
