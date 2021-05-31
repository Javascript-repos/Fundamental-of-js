function switchDirection(choice){
    var res = "Wrong Input";
    switch(choice){

        case 1:
            res = "East";
            return res;
        case 2:
            res = "West";
            return res;
        case 3:
            res = "North";
            return res;
        case 4:
            res = "South";
            return res;

        default:
            return res;
    }
}

module.exports = switchDirection;


