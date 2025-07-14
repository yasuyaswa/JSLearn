var input = [7,3,7,2,5,1,8,9,9];
var CharCount ={};
for(let c of input){
    if(CharCount[c]){
        CharCount[c]++;
    }else{
        CharCount[c]=1;
    }
}

for(let item in CharCount){
    console.log(item);
}