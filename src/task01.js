/* * *************** Fundamentals Exercise 1 - Variables and operators ***************
 ** Program to calculate the percentage of marks obtained by John. 
 * John is a student. He gave exams in 5 subjects. His marks
 * in the subjects are: 50,40,60,90,10. The maximum marks in each subject are 100.
 **
 ** Output **
 * Percentage:number
 **
 **Commands
 * test- npm run test01
 * run- npm run task01
 * */
// Declaring function
function calculatePercentage(){
  //declaring variable named total and using '+' operator to add marks in subject
var total = 50+40+60+90+10;
  // Declaring variable percent and storing percent calculated by formulae given using operators '*' and '/'
var percent = (total*100)/500;
  //returning percent. 
return percent;
}
// Required: exports module for other modules to use
module.exports = calculatePercentage;