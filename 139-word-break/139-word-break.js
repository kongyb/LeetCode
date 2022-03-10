/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let boolArr=new Array(s.length+1).fill(false)
    boolArr[0]=true
    for(let i=0;i<s.length;i++){
        for(const word of wordDict){
            let len=word.length
            if(boolArr[i+1-len]&&s.slice(i+1-len,i+1)===word){
                boolArr[i+1]=true
            }
        }
    }
    return boolArr[s.length]
};