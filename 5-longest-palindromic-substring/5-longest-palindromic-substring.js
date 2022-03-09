/**
 * @param {string} s
 * @return {string}
 */
function findMaxLen(s,start,end){
    while(start-1>=0&&end+1<s.length&&s[start-1]===s[end+1]){
        start--
        end++
    }
    return end-start+1
}


var longestPalindrome = function(s) {
    let length=1
    let start=0,end=0
    for(let i=0;i<s.length;i++){
        let maxLen
        if(s[i]===s[i+1]){
            maxLen=Math.max(findMaxLen(s,i,i+1),findMaxLen(s,i,i))
        }
        else{
            maxLen=findMaxLen(s,i,i)
        }
        if(maxLen>length){
            length=maxLen
            if(maxLen%2===0){
                start=i-(length/2)+1
                end=i+(length/2)
            }
            else{
                start=i-Math.floor(length/2)
                end=i+Math.floor(length/2)
            }
        }
    }
    return s.slice(start,end+1)
};