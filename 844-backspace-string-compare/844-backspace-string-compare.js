/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let arrS=[];
    for(const char of s){
        if(char==='#'){
            arrS.pop();
        }
        else{
            arrS.push(char);
        }
    }
    let arrT=[];
    for(const char of t){
        if(char==='#'){
            arrT.pop();
        }
        else{
            arrT.push(char);
        }
    }
    return arrS.join('')===arrT.join('');
};