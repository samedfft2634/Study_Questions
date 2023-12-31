//^ -------------------------------------------------------------------------- */
//^                                 Question 1                                 */
//^ -------------------------------------------------------------------------- */
//+ QUESTION1: Write a function that takes the base and height as parameters and returns the area of a triangle to the main program.
function areaOfTriangle (base, height) {
    return (base * height) / 2;
}

console.log(areaOfTriangle(5,10))

//^ -------------------------------------------------------------------------- */
//^                                 Question 2                                 */
//^ -------------------------------------------------------------------------- */
//+ QUESTION2: Define three different arrow functions: square, cube, exponent. These functions need to take parameters from the main program and return the results to the main program.

let number = ""
const square = (number) => number ** 2;
const cube = (number) => number ** 3;
const exponent = (number,power) => number ** power;

console.log(`square function : ${square(5)}`)
console.log(`square function : ${square(2)}`)
console.log(`square function : ${square(7)}`)


console.log(`cube function : ${cube(2)}`)
console.log(`cube function : ${cube(5)}`)
console.log(`cube function : ${cube(7)}`)

console.log(`exponent function : ${exponent(2,4)}`)
console.log(`exponent function : ${exponent(5,4)}`)
console.log(`exponent function : ${exponent(7,4)}`)

//^ -------------------------------------------------------------------------- */
//^                                 Question 3                                 */
//^ -------------------------------------------------------------------------- */
//+ QUESTION3: Write a function that takes the year as a parameter and returns the result to the main program by calculating whether this year is a leap year or not using the function-expression method.

const leapYear = function(x) {
    year = prompt("Enter the year :")
     if( year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log(`${year} is a leap year.`)
     } else {
        console.log(`${year} is not a leap year.`)
     }
}

console.log(leapYear())
