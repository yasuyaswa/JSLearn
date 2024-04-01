var person = [
  {
    name: "Yaswanth",
    gender: "Male",
    age: 23,
    salary: 50000,
  },
  {
    name: "harita",
    gender: "Female",
    age: 22,
    salary: 28000,
  },
  {
    name: "vinith",
    gender: "Male",
    age: 23,
    salary: 28000,
  },
];

console.log("Person 1 Name: "+ person[0].name);
// delete person.salary;

process.stdout.write("person: ");
console.log(person);
let employee = { name: "kiran", salary: 23434}
let person5 = Object.create(employee);
console.log(person5);
person5.name ="John";
person5.salary =70000
console.log(person5);
 var goal = {
  name : "Jonnnnn",
  age : 28
 }

 var p = Object.create(goal);
 console.log(p);

let person6 = Object.create(goal,{
  name: {
    value: "Ravi"
  }
});

console.log(person6);
console.log('print');
function person1(name, gender, age, salary) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.salary = salary;
}

var p1 = new person1("vinay", "male", 23, 28000);
var p2 = new person1("vinay", "female", 22, 34379);

p1.id=4624
console.log(p1);
console.log(p2);

// function ObjCheck(CheckProperty) {
//   if (person.hasOwnProperty(CheckProperty)) {
//     return person[CheckProperty];
//   } else {
//     return "not found";
//   }
// }

// console.log(ObjCheck("name"));
// console.log(ObjCheck("id"));

var vehicles = {
  car: {
    model: {
      wheels: 2,
      "color of vehicle": "red",
    },
  },
  truck: "Ford",
  bus: "Chevrolet",
};

console.log(vehicles.car.model.wheels);
console.log(vehicles.car.model["color of vehicle"]);

var plants = [
  { type: "flowers", list: ["rose", "sunflower", "jasmine", "lotus"] },
  { type: "fruits", list: ["apple", "banana", "mango", "grape"] },
];

console.log(plants[1].list[0]);
