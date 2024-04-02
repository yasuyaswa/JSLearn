//Challenge 1
console.log("Assignment 1: ");
var myBoolean = true;
var myString= 'hello world';
const firstNumber= 20;
let secondNumber = 40;
secondNumber = 80;
var myArray = ['myBoolean', 'myString']

var myObject = {firstProperty: myArray, sumProperty: firstNumber+secondNumber};
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

//Challenge 2
someNumber = 50;
console.log(someNumber);

const v1= 20;
const v2= '40';
console.log(v1+v2);//string concatenation
console.log(v1-v2);

const objVar= {
    pr1: "property 1",
    pr2: "property 2",
    pr3: [10,2,4]
};
console.log(objVar.pr3[2]);

console.log(2^3); //not work as power
console.log(2**3); //it will work as power

let b= 2;

console.log(++b);
console.log(b++);
