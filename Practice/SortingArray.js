let input = "yaswanth";
let CharArr = [];
for(let i=0; i<input.length; i++){
    CharArr.push(input[i]);
}

for(let i=0; i<input.length; i++){
    for(let j=0; j<input.length-i-1; j++){
        if(CharArr[j]>CharArr[j+1]){
            let temp =CharArr[j];
            CharArr[j]=CharArr[j+1];
            CharArr[j+1]= temp;
        }
    }
}
for(let item of CharArr){
    console.log(item);
}