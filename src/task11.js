/* *************************** Fundamentals Exercise 11 ****************************
** program which returns true if a given positive number is a multiple of 3 
*  or a multiple of 7 and false otherwise. 
*  Take input variables (number1) as a parameter of your function.
**
** Output
* Your output code should return the boolean value in output variable.
**
** Input
*  number1: number
**
** commands 
* test : npm run test11
* exec : npm run task11
**/
module.exports = getMultiple = function(number1){
    if(number1%3 === 0 || number1%7=== 0)
        return true;
    return false;
}