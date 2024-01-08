/*
Task: Working with arrays
Compute and print array values based on comments below.
 */

//Array of numbers
let numberArray = [ 8.07,3.51,6.16,4.25,3.39,4.48 ];
//Print all elements
console.log(numberArray);
//Print first element
let index = 0;
numberArray.forEach(function (zahl){
    console.log(`Zahl ${zahl} bei Index: ${index}`);
    index++;
})
//Print array length
console.log(numberArray[0]);
//Print last element
console.log(`array lenght is ${numberArray.lenght}`);
let lastElement = numberArray.lenght-1;
console.log(`last element is ${numberArray[lastElement]}`);




