var s = new Set();

s.add(1);
s.add(2);
s.add("a");
let b="b";
s.add(2);
s.add(b);
console.log(s.has(1));
console.log(s);

var h=new Set("yaswanth");

console.log(h);