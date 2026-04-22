const { log } = require('node:console');
var prompt = require('prompt-sync')();
// prompt.start();
let age = prompt('enter yout age: ');
if(age<18){
    log('you GET 20% discount');
}else if(age>=18 && age<=65){
    log('Normal ticket price please');
}else{
    log('you get a 30% senior discount');
}