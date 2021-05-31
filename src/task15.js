function magic_Sum(number1, number2){
    var sum = number1 + number2;

   if(sum >= 50 && sum < 80){
       sum = 65;
       return sum;
   }
   else {
       sum = 80;
       return sum;
   }
}

module.exports = magic_Sum;