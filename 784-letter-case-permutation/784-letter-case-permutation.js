/**
 * @param {string} s
 * @return {string[]}
 */
function binaryCase(n){
    if(n===1){
        return [[0],[1]];
    }
    else{
        let temp=binaryCase(n-1);
        return temp.map(el=>[0,...el]).concat(temp.map(el=>[1,...el]));
    }
}

function combineBinaryChars(binary,chars){
    let index=0;
    for(let i=0;i<chars.length;i++){
        if(chars[i].charCodeAt()<'0'.charCodeAt()||chars[i].charCodeAt()>'9'.charCodeAt()){
            chars[i]=binary[index]===1?chars[i].toUpperCase():chars[i].toLowerCase();
            index++;
        }
    }
    return chars.join('');
}

var letterCasePermutation = function(s) {
    let chars=s.split('');
    let cnt=chars.reduce((acc,curr)=>{
        if(curr.charCodeAt()>='0'.charCodeAt()&&curr.charCodeAt()<='9'.charCodeAt()){
            return acc;
        }
        else{
            return acc+1;
        }
    },0);
    if(cnt===0){
        return [s];
    }
    let temp=binaryCase(cnt);
    return temp.map(el=>combineBinaryChars(el,chars));
};