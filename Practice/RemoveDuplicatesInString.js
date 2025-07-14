const input = "yaswanth";
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