function mainFun(num, bool, callback){
    let result;
    if(bool){
        result= callback(num);
    }
    console.log(result);
}

mainFun(5, true, function (num){
    return num+1;
});

mainFun(10, true, (num)=> {
    return num/2;
});

mainFun(10, false, (num)=> num/2);

var arr= [1,2,3,4,5];
function myCallback(item){
    return item*10;
}

var k= arr.map(myCallback);
console.log(k);