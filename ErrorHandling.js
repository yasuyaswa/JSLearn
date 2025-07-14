try{
    console.log(g);
}catch(error){
    console.log(error.message);
    console.log(error instanceof ReferenceError);
}

try{
    let n= 10;
    console.log(n.ToUpper());
}catch(error){
    console.log(error.message);
    console.log(error instanceof TypeError);
}

try{
    let result = parseInt('Hello');
    console.log('Parsed result:', result);
}catch(error){
    console.log(error.message);
    console.log(error instanceof SyntaxError);
}