/* *************************** Fundamentals Exercise 10 ****************************
* program to check two given integers and returns true if one is positive 
* and other is negative, and false otherwise. 
* Take input variables (number1, number2) as the parameter of your function.
**
** Output
* Your output code should return the boolean value in output variable.
**
** Input
*  number1: number
*  number2: number
**
** commands 
* test : npm run test10
* exec : npm run task10
**/
module.exports = getNumber = function(Number1,Number2){
    if(Number1>0 && Number2<0)
        return true;
    if(Number1<0 && Number2>0)
        return true;
    return false;
}