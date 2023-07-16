var vehicles = ["car", "bus", "van", "lorry"];
//for in
for (item in vehicles) {
  console.log(item + " " + vehicles[item]);
}

//for of
for (item of vehicles) {
  console.log(item);
}

//for in
var student = { yaswanth: 23, vinod: 23, umesh: 22 };
for (item in student) {
  console.log(item + ": " + student[item]);
}

//for each

vehicles.forEach((vehicle) => {
  console.log(vehicle);
});

//for each
vehicles.forEach((vehicle,index,array) => {
    console.log(vehicle+" " + index + " " + array);
});