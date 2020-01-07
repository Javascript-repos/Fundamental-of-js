/* *************************** Fundamentals Exercise 9 ****************************
** program should return true if a given number lies in the range from 80 to 120 or
*  from 380 to 420 and false otherwise. 
*  Take input variables (number1) as a parameter of your function.
**
** Output
* Your output code should return boolean value in output variable.
**
** Input
*  number1: number
**
** commands 
* test : npm run test09
* exec : npm run task09
**/
module.exports = getRange = function(number1){
    if(number1>80 && number1<120)
        return true;
    if(number1>380 && number1<420)
        return  true;
    return false;
}