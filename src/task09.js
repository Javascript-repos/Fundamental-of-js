function in_range(number){
    var res = false;
    if(number >= 80 && number < 120 || number >= 380 && number < 420){
        res = true;
        return res;
    }
    else{
        return res;
    }
}

module.exports = in_range;