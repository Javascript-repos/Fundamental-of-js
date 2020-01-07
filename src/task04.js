/* *************************** Fundamentals Exercise 4 ****************************

** program to convert given value in Indian rupees to US dollars.
 * Exchange Rate is as follows: 1 USD = 75 INR
 * Take input variables (INR) as the parameter of your function.
**
** Output
 Your output code should return the value of currency in output variable
**
** Input
* inr: number
**
** commands 
* test : npm run test04
* exec : npm run task04
**/
module.exports = getUSD = function(INR){
    var usd = INR/75;
    return usd;
}