/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen=0;
    let temp='';
    for(let i=0;i<s.length;i++){
        if(temp.indexOf(s[i])!==-1){
            temp=temp.slice(temp.indexOf(s[i])+1);
        }
        temp=temp+s[i];
        maxLen=temp.length>maxLen?temp.length:maxLen;
    }
    return maxLen;
};