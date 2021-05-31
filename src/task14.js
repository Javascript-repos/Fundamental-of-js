function check_lastDigit(number1, number2, number3){
    var num1 = number1 % 10;
    var num2 = number2 % 10;
    var num3 = number3 % 10;

    var res = false;
    if(num1 == num2 && num2 == num3) {
        res = true;
        return res;
    }
    else {
        return res;
    }
}

module.exports = check_lastDigit;