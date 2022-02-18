/**
 * @param {string} s
 * @return {number}
 */
function isNum(char){
    if(char.charCodeAt()>=48&&char.charCodeAt()<58){
        return true;
    }
    return false;
}

var myAtoi = function(s) {
    if(s.length===0){
        return 0;
    }
    //step1
    let pointer;
    for(pointer=0;pointer<s.length;pointer++){
        if(s[pointer]!==' '){
            break;
        }
    }
    s=s.slice(pointer);
    
    //step2
    let isNegative;
    if(s[0]==='-'){
        isNegative=true;
        s=s.slice(1);
    }
    else if(s[0]==='+'){
        isNegative=false;
        s=s.slice(1);
    }
    
    //step3
    let len=0;
    if(s.length===0){
        return 0;
    }
    if(isNum(s[0])){
        len++;
        while(len<s.length&&isNum(s[len])){
            len++;
        }
    }
    s=s.slice(0,len);
    if(len===0){
        return 0;
    }
    
    //step4;
    let num=Number(s);
    if(isNegative){
        num=num*-1;
    }
    
    //step5
    if(num<-Math.pow(2,31)){
        return -Math.pow(2,31);
    }
    else if(num>Math.pow(2,31)-1){
        return Math.pow(2,31)-1;
    }
    return num;
    
};