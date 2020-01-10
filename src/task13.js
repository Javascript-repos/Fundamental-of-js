/* *************************** Fundamentals Exercise 13 ****************************
** program to find the largest of three given integers.
*  Take input variables (number1, number2, number3) as a parameter of your function.
**
** Output
* Your output code should return the largest integer in output variable.
**
** Input
*  number1: number
*  number2: number
*  number3: number
**
** commands 
* test : npm run test13
* exec : npm run task13
**/
module.exports = getLargest = function(number1,number2,number3){
    if(number1>number2 && number1>number3)
        return number1;
    if(number2>number1 && number2>number3)
        return number2;
    if(number3>number1 && number3>number2)
        return number3;
}