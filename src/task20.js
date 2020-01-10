/* *************************** Fundamentals Exercise 20 ****************************
** program to create a function. The function should compare the area of a right triangle 
*  (0.5 x base x perpendicular) and the area of a square with side equal to the 
*  base of the triangle (base x base) and return the bigger area. 
*  Take input variables (base, perpendicular) as a parameter of your function.
**
** Output
* Your output code should return the biggest area value in output variable.
**
** Input
*  base: number
*  perpendicular: number
**
** commands 
* test : npm run test20
* exec : npm run task20
**/
module.exports = getCompare = function(base,perpendicular){
    var areat=(0.5*base)*perpendicular;
    var areas=base*base;
    if(areat>areas)
        return areat;
    return areas;
}