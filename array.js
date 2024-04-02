var vehicles = ["car", "bus", "van", "lorry"];
var json = JSON.stringify(vehicles);
console.log(json);
vehicles.push("bike");
vehicles.push("jeep")
vehicles.pop();
vehicles.unshift("bike");
vehicles.shift();
console.log(vehicles.slice(1, 3));
console.log("Reverse");
console.log(vehicles.reverse());

for (item in vehicles) {
  console.log(vehicles[item]);
}
for (item of vehicles) {
  console.log(item);
}

var arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
  [8, 9],
];
var result = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    result += arr[i][j];
  }
}
console.log(result);
