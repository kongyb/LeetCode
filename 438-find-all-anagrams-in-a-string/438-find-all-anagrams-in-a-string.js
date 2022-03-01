/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function isSame(obj1,obj2){
    for(const key of Object.keys(obj1)){
        if(obj2[key]!==obj1[key]){
            return false;
        }
    }
    return true;
}

var findAnagrams = function(s, p) {
    let result=[];
    let compareObj={};
    for(const char of p){
        if(compareObj[char]){
            compareObj[char]++;
        }
        else{
            compareObj[char]=1;
        }
    }
    let charObj={};
    for(let i=0;i<p.length;i++){
        if(charObj[s[i]]){
            charObj[s[i]]++;
        }
        else{
            charObj[s[i]]=1;
        }
    }
    for(let i=0;i<=s.length-p.length;i++){
        if(isSame(compareObj,charObj)){
            result.push(i);
            while(s[i]===s[i+p.length]){
                i++;
                result.push(i);
            }
        }
        charObj[s[i]]--;
        if(charObj[s[i+p.length]]){
            charObj[s[i+p.length]]++;
        }
        else{
            charObj[s[i+p.length]]=1;
        }
    }
    return result;
}