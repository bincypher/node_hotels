let performOperation = (a,b, callbackfn) => {
    return callbackfn(a,b);
}

let add = (a,b)=>{
    return a+b;
}

let subtract = (a,b) =>{
    return a>b?a-b:b-a;
}

let multiply = (a,b) =>{
    return a*b;
}

let divide = (a,b) =>{
    return a/b;
}

console.log(performOperation(2,4,add));
console.log(performOperation(2,4,subtract));
console.log(performOperation(2,4,multiply));
console.log(performOperation(2,4,divide));