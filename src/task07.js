function computes(number1, number2){
    if( number1 == number2){
        var res = (number1+number2) * 3;
        console.log(res);
        return res;
    }

    var res = number1 + number2;
    console.log(res);
    return res;
}

module.exports = computes;