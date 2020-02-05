function abc(choice){
    switch(choice){
        case 1:
          return "East";
            break;
            case 2:
             return "West"
                 break;
                 case 3:
                  // console.log("north");
                   return "North";
                        break;
            case 4:
          return "South";
            break;
            default:
                return "Wrong Input";
}
}
module.exports=abc;
//abc(3);
