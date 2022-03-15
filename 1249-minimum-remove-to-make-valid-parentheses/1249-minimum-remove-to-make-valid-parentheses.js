/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let charArr=[]
    let indexArr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            indexArr.push(i)
            charArr.push(' ')
        }
        else if(s[i]===')'){
            if(indexArr.length>0){
                charArr[indexArr.pop()]='('
                charArr.push(')')
            }
            else{
                charArr.push(' ')
            }
        }
        else{
            charArr.push(s[i])
        }
    }
    return charArr.filter(el=>el!==' ').join('')
};