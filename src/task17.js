function calc(number1, number2, choice){
    var res;

    switch(choice){
        case 1:
            res = number1 + number2;
            break;
        case 2:
            res = number1 - number2;
            break;
        case 3:
            res = number1 * number2;
            break;
        case 4:
            res = number1 / number2;
            break;
    }

    return res;
}

module.exports = calc;