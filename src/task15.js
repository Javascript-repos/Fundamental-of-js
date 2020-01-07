/* *************************** Fundamentals Exercise 15 ****************************
** program to compute the sum of the two integers. 
*  If the sum is in the range 50..80 return 65 otherwise return 80. 
*  Take input variables (number1, number2) as a parameter of your function.
**
** Output
* Your output code should return the value in output variable.
**
** Input
*  number1: number
*  number2: number
**
** commands 
* test : npm run test15
* exec : npm run task15
**/
module.exports = getSum = function(number1,number2){
    var sum=number1+number2;
    if(sum>50 && sum<80)
        return 65;
    
    return 80;
}