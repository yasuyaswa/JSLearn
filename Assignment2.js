//Challenge 3
console.log("Assignment 2: ");
const ex1 = 100 % 50; //0
const ex2 = 100 / 50; //2
const ex3 = ex1 < ex2; //true
const ex4 = ex3 && 300 + 5 === 305; //true
const ex5 = !ex4; //false

console.log(ex5);

//Challenge 4
const myObj = {
  pr1: "first value",
  pr2: 20,
};
const myArr = [40, 50, 2];
const result = myObj.pr2 == myArr[0] / myArr[2]; //true
console.log(result);

//Challenge 5
const obj = {
  no1: {
    price: 100,
    quantity: 5,
  },
  no2: {
    price: 150,
    quantity: 2,
  },
};

const arr = [obj.no1, obj.no2];
const r = arr[0].price * arr[0].quantity > arr[1].price * arr[1].quantity;
console.log(r);
