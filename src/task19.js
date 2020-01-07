/* *************************** Fundamentals Exercise 19 ****************************
** program to create a function. The function checks three given numbers, 
*  if the three numbers are the same return 30 and if any two numbers are the same return 20 
*  and otherwise return 40. 
*  Take input variables (number1, number2, number3) as a parameter of your function.
**
** Output
* Your output code should return the value in output variable.
**
** Input
*  number1: number
*  number2: number
*  number3: number
**
** commands 
* test : npm run test19
* exec : npm run task19
**/
module.exports = getCheck = function(number1,number2,number3){
    if(number1==number2 && number2==number3)
         return 30;
    if(number1==number2 || number2==number3 || number1==number3)
        return 20;
    return 40;
}