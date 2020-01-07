/* *************************** Fundamentals Exercise 8 ****************************
** program to check two given numbers. 
*  The program should return true if one of the number is 50 or 
*  if their sum is 50 and returns false otherwise.
*  Take input variables (number1, number2) as the parameter of your function.
**
** Output
* Your output code should return the  boolean value in output variable.
**
** Input
*  number1: number
*  number2: number
**
** commands 
* test : npm run test08
* exec : npm run task08
**/
module.exports = getResult = function(number1,number2){
    if(number1==50)
        return true;
    if(number2==50)
        return true;
    if((number1+number2)==50)
        return true;
    return false;
}