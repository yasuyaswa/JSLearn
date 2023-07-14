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

var student = { yaswanth: 23, vinod: 23, umesh: 22 };
for (item in student) {
  console.log(item + ": " + student[item]);
}
mul(2, 3);
function mul(n1, n2) {
  console.log(n1 + n2);
}
//product(2,3)
var even = (n1, n2, ...n) => n1 + n2 + n;
console.log(even(3, 5, 6));
console.log('Hi, "Bangloru"');
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
var gate = "northeast";
