/*
Tasks:
a) Create a 'function declaration' which adds to numbers and output its sum.
b) Test your function at least twice with different input values.
 */
//function which adds two numbers
function add(a,b){
return a + b
}
let sub = (a,b) => {
    return a - b;
}
let x=10,y=100;
console.log(`${x}+${y}=${add(x,y)}`);
console.log(`${x}+${y}=${sub(x,y)}`);
x=53434;
y=343434;
console.log(`${x}+${y}=${add(x,y)}`);
console.log(`${x}+${y}=${sub(x,y)}`);
//function call and output on the console
//i.e. 5+6
