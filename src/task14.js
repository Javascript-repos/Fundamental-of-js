function abc(a,b,c){
    var d=a%10;
    e=b%10;
    f=c%10;
    if(d==e && e==f && d==f){
        return true;
    }
    else{
       return false;
    }
}
module.exports=abc;
