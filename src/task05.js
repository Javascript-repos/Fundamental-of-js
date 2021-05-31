function is_year(year){
    var i = 0;
    if(year % 4 == 0 && year % 100 != 0){
        i = 1;
        console.log(i);
        return i;
    }
    else if(year % 400 == 0 && year % 100 == 0){
        i = 1;
        console.log(i);
        return i;
    }
    else {
        console.log(i);
        return i;
    }
}

module.exports = is_year;