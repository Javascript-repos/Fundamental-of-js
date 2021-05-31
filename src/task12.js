function three_in_range(number1, number2, number3){
    var res = false;
    if(number1 >= 50 && number1 <= 99 || number2 >= 50 && number2 <= 99 || number3 >= 50 && number3 <= 99){
        res = true;
        return res;
    }
    else {
        return res;
    }
}

module.exports = three_in_range;