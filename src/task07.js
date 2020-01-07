/* *************************** Fundamentals Exercise 7 ****************************
** program to compute the sum of the two given integers. 
*  If the two integers are the same, then returns triple their sum.
*  Take input variables (number1, number2) as a parameter of your function.
**
** Output
* Your output code should return the sum in output variable.
**
** Input
*  number1: number
*  number2: number
**
** commands 
* test : npm run test07
* exec : npm run task07
**/
module.exports = getSum = function(number1,number2){
    sum =number1+number2;
    if(number1==number2){
        sum= sum*3;
    }
    return sum;
}