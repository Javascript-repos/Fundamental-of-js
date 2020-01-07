/* * ********************  Fundamentals Exercise 3 ********************

** program to convert temperatures from Celsius to Fahrenheit.
*  Formula is F = ((9/5) x C) + 32 where C is temperature in
*  celsius and F is temperature in Fahrenheit.
*  Take input variables (celsius) as the parameter of your function.

** Output
 Your output code should return the temperature in output variable
**
** Input 
* C : number,
**
** commands 
* test : npm run test03
* exec : npm run task03
**/
module.exports = getFahrenheit = function(Celsius){
    var fahrenheit= ((9/5)* Celsius)+32;
    return fahrenheit;
}
