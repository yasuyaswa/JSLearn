//Default parameter
function increment(n1,n2=1){
    return n1+n2
}
console.log(increment(5,6));
console.log(increment(5));

//Rest parameter

function sum(n1,n2,...args){
    let total=n1+n2;
    for(items of args){
        total+=items;
    }
    return total;
}
console.log(sum(1,2,3,4));

function sum1(...args){
    let total=0;
    for(items of args){
        total+=items;
    }
    return total;
}
console.log(sum1(1,2,3,4));