function abc(a,b,choice){
    switch(choice){
case 1:
    var c=a+b;
    return c;
    break;
    case 2: 
    var d=a-b;
    return d;
break;
case 3:
    var e=a*b;
    return e;
    break;
    case 4:
        var f=a/b;
        return f;
        break;
    }
}
module.exports=abc;
