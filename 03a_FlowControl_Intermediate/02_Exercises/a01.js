/*
Task: Traffic light with argument color
A. Re-wright traffic light example with color as an argument.
B. If no argument is provided then traffic light is out of order.

Test:
$ node a01.js
Traffic light is undefined
OUT OF ORDER

$ node a01.js red
Traffic light is red
DON'T WALK!

$ node a01.js orange
Traffic light is orange
ATTENTION

$ node a01.js green
Traffic light is green
WALK

*/
'use strict';
//Read (parse) argument
let args = process.argv.slice(2);
let color = args[0];
console.log(`Traffic light is ${color}`);

//Check with if-then-else
if (color === undefined){
console.log(`OUT OF ORDER`);
}
else {
    if (color === 'red'){
        console.log(`DON'T WALK!`);
    }
    else if (color === 'orange'){
        console.log(`ATTENTION`);
    }
    else if (color === green)
    {
    console.log(`WALK`);    
    }
}