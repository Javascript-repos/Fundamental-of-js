function abc(a,b,c){
    if(a==b && a==c){
        return 30;
    }
    else if(a==b || a==c || b==c){
        return 20;
    }
    else{
        return 40;
    }
}
module.exports=abc;
