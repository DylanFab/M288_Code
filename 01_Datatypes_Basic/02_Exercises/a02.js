/*
Tasks: Convert values from Fahrenheit (USA) to Celcius and Kelvin
Celsius = Fahrenheit minus 32, then multiply by 5 and divide by 9
Kelvin = Fahrenheit minus 32, then multiply by 5 and divide by 9 + 273.15
*/
//Assign to variable 'fahrenheit' a number (integer)
let fahrenheit = 0;
//Convert and print to Celsius
let celsius = (fahrenheit - 32) * 5 / 8;
console.log(`${fahrenheit}°F entspricht ${celsius}°C`)
//Convert and print to Kelvin
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log(`${fahrenheit}°F entspricht ${kelvin}°K`)

