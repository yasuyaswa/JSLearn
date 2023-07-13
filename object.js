var person = {
  name: "Yaswanth",
  gender: "Male",
  age: 23,
  salary: 50000,
};
console.log(person.name);
console.log(person["gender"]);
delete person.salary;
console.log(person);

function ObjCheck(CheckProperty) {
  if (person.hasOwnProperty(CheckProperty)) {
    return person[CheckProperty];
  } else {
    return "not found";
  }
}

console.log(ObjCheck("name"));
console.log(ObjCheck("id"));

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
  { type: "flowers", list: ["rose", "sunflower", "jasminee", "lotus"] },
  { type: "fruits", list: ["apple", "banana", "mango", "grape"] },
];

console.log(plants[1].list[0]);
