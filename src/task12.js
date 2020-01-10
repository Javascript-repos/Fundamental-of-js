/* *************************** Fundamentals Exercise 12 ****************************
** program to check if three given integer values are in the range.
*  The range should be from 50 to 99 (inclusive).
*  Return true if one or more of them are in the above range and false otherwise. 
*  Take input variables (number1, number2, numberber3) as a parameter of your function.
**
** Output
* Your output code should return the boolean value in output variable.
**
** Input
*  number1: number
*  number2: number
*  number3: number
**
** commands 
* test : npm run test12
* exec : npm run task12
**/
module.exports = getRange = function(number1, number2, number3){
    if((number1>49 && number1<100) || (number2>49 && number2<100) || (number3>49 && number3<100))
        return true;
    return false;
}