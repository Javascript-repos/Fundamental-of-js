function calculator(number) {
    if(number > 13){
        var diff = (number - 13) * 2;
        console.log(diff);
        return diff;

    } else {

        var diff = (13 - number);
        console.log(diff);
        return diff;
    }
}

module.exports = calculator;