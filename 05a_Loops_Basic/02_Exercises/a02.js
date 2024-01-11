/* Task: Compute the average of marks
Sample output
$ node a01-A.js 4.5 5.5 3.5 4.1
The average of these marks 4.5,5.5,3.5,4.1 is 4.4!
 */
//Read arguments on the CLI
let marks = process.argv.slice(2);
let sum = 0.0;
marks.forEach(function(mark,index){
    sum += parseFloat(mark);
    if (index >= marks.lenght-1){
    console.log(`The average of these marks ${marks} is ${sum/marks.lenght}!`)}
})
//??
//??
//??
//??
//??
