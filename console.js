console.assert(4>5, "wrong");
//console.clear();
console.count(1);
console.count(4);
for(var i=0; i<4; i++){
    console.count("Counting " + i);
}
console.error("you got some error");

console.group();
console.log("Hello again, this time inside a group!");
console.log("in a group!");
console.log("Hello world!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.groupEnd();
console.groupEnd();

console.info("information");

console.table([
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
  ]);

  console.table([1,2,3]);

  console.time();
  c=0;
  for(var i=0; i<100; i++){
    c=c+i;
  }
  console.timeEnd();

  function myFunction() {
    myOtherFunction();
  }
  
  function myOtherFunction() {
    console.trace("trace");
  }
  
  myFunction();
  

  console.warn("warning");