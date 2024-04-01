//named function
function add(n1, n2) {
  return n1 + n2;
}
console.log(add(2, 3));

//anonymous function
var product = function (n1, n2) {
  var r = n1 * n2;
  console.log(r);
};
product(2, 3);

//IIFE function
var quotient = function division(n1, n2) {
  return n1 / n2;
};
console.log(quotient(10, 5));

//Arrow function
var diff = (n1, n2) => n1 - n2;
console.log(diff(5, 4));

