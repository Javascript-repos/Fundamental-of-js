function checkThree(number1, number2, number3){
    var res;
    if(number1 == number2 && number2 == number3){
        res = 30;
    }
    else if(number1 == number2 || number2 == number3 || number3 == number1){
        res = 20;
    }
    else {
        res = 40;
    }

    console.log(res);
    return res;
}

module.exports = checkThree;