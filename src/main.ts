// TypeScript
//1. JavaScript with Type Checking

//Use Debugging Example : [ let age: number = 24;
// if (age < 30)
//     age += 1;
// console.log(age); ]

export {}
let message = 'Welcome Back';
console.log(message);

//Variables Declarations

let x = 10;
const y = 20;

x = 20;
// let x = 20; - Cannot redeclare block-scoped variable 'x'

let sum;
// const title; - 'const' declarations must be initialized.
const title = 'Learn TypeScript';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'TypeScript';

//TODO: name = true; - Static Type Checking
//TODO: total.(show number methods) & name.(show string methods) - Intelligence IDEA

let sentence: string = `My name is Hello
 I am a beginner in ${name}`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1,2,3];
// generic array type
let list2: Array<number> = [1,2,3];

// Tuple
let person1: [string, number] = ['typescript', 22];

// Enum
// const Red = 1;
// const Green = 2;
// const Blue = 3;

//PascalCase
enum Color {Red=5, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// Any
let randomValue: any = 10;
randomValue = true;
randomValue = 'Hello';

// unknown
let myVariable: unknown = 10;

// Type assertions
// (myVariable as string).toUpperCase();

// Union Type
let multiType: number | boolean;
multiType = 10;
multiType = true;

// Function
function add(num1: number, num2?: number): number {
    return num1 + (num2 || 0);
}
add(1, 2);
add(3);

function add1(num1: number, num2=0): number {
    return num1 + num2 ;
}
add1(1, 2);
add1(3);

// ** void --> Not Return a value

// Interfaces
interface Person {
    firstName: string;
    lastName?: string;  // ?-sign property
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'John',
    // lastName: 'Doe'
}

fullName(p);

// Class

class Employee {
    employeeName: string;

    constructor(name:string) {
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
    constructor(managerName: string){
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

// Access Modifiers
// 1.Public Methods
// 2.Private Methods - Property 'employeeName' is private and only accessible within class 'Employee'.
// 3.protected
