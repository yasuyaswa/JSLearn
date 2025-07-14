var x = 10;
var s = "yaswanth";
s[0] = "j";
console.log(s[s.length - 1]);
var b = 2; // we can redeclare var
let k = 4;
let n = "4";
console.log(k === n);
console.log(s + b);
console.log(++b);
console.log(b++);
var y = "Good";
var z = "Yaswanth";
console.log(y + " Morning, " + z);
console.log(`${y} Morning, ${z}`);
//let k = 2 but can't redeclare let and cons


mul(2, 3);
function mul(n1, n2) {
  console.log(n1 * n2);
}
//product(2,3)
var details = (name, ...n) => console.log(name + " "+ n);
details('Yaswanth', 24, 'Capgemini', '.NET Core');
console.log('Hi, "Bangalore"');
console.log(`'I joined in "Capgemini"'`);
var g = "first line\n\t\\seco\bnd line\nthird line";
console.log(g);
function mango() {
  p = 22;
  console.log(p);
}
mango();
console.log(p);
var q = "10";
var i = 10;
console.log(q == i);
console.log(q === i);

var jk = 12;
console.log("🚀 ~ file: lesson1.js:68 ~ jk:", jk);

var arr1= [1,2,3,4,5];
var arr2= [1,2,3,4,5];
console.log(arr1==arr2);//false
console.log(arr1==arr2);//false
console.log(arr1.toString() == arr2.toString());//true

const a=20 ===20? 'Correct': 'Wrong'; //ternary operator

function basicOperation(o, a, b){
  return eval(a+o+b);
}
console.log(basicOperation('+',9,3));//12
console.log(basicOperation('*',9,3));//27

const str1 = new String('Hi Yaswanth');
const str2 = 'Hi Yaswanth';

console.log(typeof(str1));//object
console.log(str1===str2);//false
console.log(str1==str2);//true

let date= new Date();
console.log(date);