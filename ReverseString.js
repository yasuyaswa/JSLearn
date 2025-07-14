Reverse string
var str3 = "yaswanth";
let CharArr = [];
for(let i=str3.length-1; i>=0; i--){
    CharArr.push(str3[i]);
}
console.log(CharArr);
console.log(CharArr.join(''));
