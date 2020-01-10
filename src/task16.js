/* *************************** Fundamentals Exercise 16 ****************************
** program which requires directions. Using switch case, 
*  the program prints "East" for 1 , "West" for 2, "North" for 3 and "South" for 4. 
*  In the default case, the output should return "Wrong Input" . 
*  Take input variables (choice) as the parameter of your function.
**
** Output
* In the other 4 cases, the output code should return the output variable.
**
** Input
*  choice: number
**
** commands 
* test : npm run test16
* exec : npm run task16
**/
module.exports = getDirection = function(Number1){
    switch(Number1){
        case 1: return "East";
        case 2: return "West";
        case 3: return "North";
        case 4: return "South";
        default: return " Wrong Input";
    }
}