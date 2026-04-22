var prompt = require('prompt-sync')();
var guestList = ["Binu", "Chinu", "Raaka", "Sagi", "Sibu"];
var guestName = prompt('Please say your name: ')
if(guestList.includes(guestName)){
    console.log(`welcome to the party, ${guestName} !`);
}else{
    console.log("sorry, you're not on the guest list")
}