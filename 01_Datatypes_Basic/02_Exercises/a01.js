/*
Tasks: Declare variables and constants correctly
Declare and print variables, constants correctly based on the given comments below.
*/
/* -------------------------------------------- */
'use strict'
//Assign to variable 'Stadt' a French town
let Stadt = 'Paris';
//Assign to constant 'Land' the corresponding Land
const Land = 'France';
//print 'Land' and 'Stadt' to the console
console.log(Stadt);
console.log(Land);

//concatenate 'Land' and 'Stadt' and assign it to variable 'Ort'
let Ort = Stadt + ', ' + Land;
//print 'Ort' to the console
console.log(Ort);

//Reassign a new French town to variable Stadt
Stadt = "Bern";
//concatenate 'Land' and 'Stadt' and reassign it to variable 'Ort'
Ort = Stadt + ', ' + Land;
//print 'Ort' to the console
console.log(Ort);

//Change the value of Land. Guess what is going to happen.
Stadt = "Roma";
//What is the workaround in order to have a second country (Land)?
Stadt2 = "Roma";


