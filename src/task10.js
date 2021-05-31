function pos_neg(number1, number2){
    var res = false;
    if(number1 > 0 && number2 < 0 || number1 < 0 && number2 > 0){
        res = true;
        return res;
    }
    else {
        return res;
    }
}

module.exports = pos_neg;