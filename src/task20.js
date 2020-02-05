function abc(b,p){
    var aos=(b*b);
    var aot=(0.5*b*p);
    if(aos>aot){
return aos;
    }
    else{
        return aot;
    }
}
module.exports=abc;
