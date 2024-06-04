"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = 'Welcome Back';
console.log(message);
let x = 10;
const y = 20;
x = 20;
let sum;
const title = 'Learn TypeScript';
let isBeginner = true;
let total = 0;
let name = 'TypeScript';
let sentence = `My name is Hello
 I am a beginner in ${name}`;
console.log(sentence);
let n = null;
let u = undefined;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let person1 = ['typescript', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
let randomValue = 10;
randomValue = true;
randomValue = 'Hello';
let myVariable = 10;
let multiType;
multiType = 10;
multiType = true;
function add(num1, num2 = 0) {
    return num1 + num2;
}
add(1, 2);
add(3);
function fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'John',
};
fullName(p);
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Goog Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee('TypeScript');
console.log(emp1.employeeName);
emp1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegatework() {
        console.log(`Manager delegating tasks`);
    }
}
let m1 = new Manager('JavaScript');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);
//# sourceMappingURL=main.js.map