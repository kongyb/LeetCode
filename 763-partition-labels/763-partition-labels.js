/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let charObj={}
    for(let i=0;i<s.length;i++){
        charObj[s[i]]=i
    }
    let index=0
    let sum=0
    let result=[]
    for(let i=0;i<s.length;i++){
        let char=s[i]
        index=Math.max(charObj[char],index)
        if(index===i){
            result.push(i+1-sum)
            sum+=result[result.length-1]
            continue
        }
    }
    return result
};