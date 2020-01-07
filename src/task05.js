/* *************************** Fundamentals Exercise 5 ****************************

** program which returns 1 if a given year is leap year and 0 if the given year is not leap year.
**
** Output
 Your output code should return the value of leapyear or not a leapyear in output variable
**
** Inputs
* year: number
**
** commands 
* test : npm run test05
* exec : npm run task05
**/
module.exports = getLeapYear = function(Year){
    if(Year%400===0){
        return 1;
    }
    if(Year%100===0)
        return 0;
    if(Year%4===0)
        return 1;
}