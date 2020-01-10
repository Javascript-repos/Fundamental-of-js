/* *************************** Fundamentals Exercise 17 ****************************
** program to create a basic calculator using a switch and break statements. 
*  The program asks the user to enter 2 numbers and then ask the user for the choice of the 
*  operator: 1 to add, 2 to minus, 3 to multiply and 4 to divide the 2 numbers. 
*  Take input variables (number1, number2, choice) as the parameter of your function.
**
** Output
*  the output code should return the value in output variable.
**
** Input
*  number1: number
*  number2: number
*  choice: number
**
** commands 
* test : npm run test17
* exec : npm run task17
**/
module.exports = getCalculator = function(number1,number2,choice){
    var value;
    switch(choice){
        case 1: value = number1+number2;
                break;
        case 2: value = number1-number2;
                break;
        case 3: value = number1*number2;
                break;
        case 4: value = number1/number2;
                break;
    }
    return value;
}