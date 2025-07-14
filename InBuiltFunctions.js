const str= 'bus pass';
console.log(str.replace('b', 'y'));
console.log(str);

console.log(str.toUpperCase());
let s= str.split(" ");
console.log(s);
console.log(s.indexOf('pass'));

var v= [1,4,8,2,7,9];
var k= v.map((item)=> {
    return item**2;
});
console.log(k);
console.log(Array.isArray(v));

var g= v.filter(n=>n%2==0);
console.log(g);

var str2= 'Yaswan#53';
console.log(/[A-Za-z0-9]/.test(str2));

var d= 'Hi everyone, my name is dog. I am from dog family. Dog is faithful animal';
var m= d.replaceAll('dog', 'pet');
console.log(m);

v.splice(2,1,5);//splice(index, delete element count, replace item)
console.log(v);