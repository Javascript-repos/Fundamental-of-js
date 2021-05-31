function check_fifty(number1, number2){
    if(number1 == 50 || number2 == 50){
        return true;
    }
    else if((number1 + number2) == 50){
        return true;
    }
    else{
        return false;
    }
}

module.exports = check_fifty;