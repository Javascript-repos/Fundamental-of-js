/*  * ********************Fundamentals Exercise 2 ******************
 **Program to calculate the area
 * of a right triangle. The area of a right triangle is (½ x base x height).
 **
 ** Output
 *Your output code should return the area in the output variable.
 **
 **Input 
 * base: number, 
 * height: number
 **
 **commands
 * test: npm run test02
 * exec: npm run task02
 **/
module.exports = getArea = function(base, height){
    var area = 1/2*(base*height);
    return area;
}