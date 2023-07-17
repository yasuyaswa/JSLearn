var h = 12

console.log(h=h+""); //implicit coercion
console.log(typeof h); 

console.log(h=h-4); //8
console.log(typeof h); 

let k='5'
console.log(k+4); //54
console.log(typeof k); 
console.log(k-2);
console.log(typeof k); 

k=Number(k); //explicit coercion

console.log(k+4); //9

