function compare(base, perpendicular){

    var res;

    var righttriangle = 0.5 * base * perpendicular;
    var square = base * base;

    if(righttriangle > square){
        res = righttriangle;
    }
    else{
        res = square;
    }

    console.log(res);
    return res;
}

module.exports = compare;