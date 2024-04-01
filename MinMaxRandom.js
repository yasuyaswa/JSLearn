function RandomRange(start, end){
    var random = Math.random(); //random is [0,1) means random >= 0 & <1
    var result = random * (end - start + 1);
    console.log(random, result);
    return Math.floor( result ) + start;
}

console.log(RandomRange(10,100));