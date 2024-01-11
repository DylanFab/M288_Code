/*
Tasks:
a) Create a 'function expression' which converts Fahrenheit to Celsius.
The conversion formula is: celsius = (Fahrenheit - 32) * 5 : 9
b) Test your function at least twice with different input values.
 */
//function which converts Fahrenheit to Celsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}
//??
//??
//??
//function call and output on the console
//i.e. for 32°F
let temp = convertFahrenheitToCelsius(32)
console.log(temp)//??
//??
//i.e. for 68°F
console.log(convertFahrenheitToCelsius (79)) 
