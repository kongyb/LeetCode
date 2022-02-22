/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let len=columnTitle.length;
    let result=0;
    for(let i=0;i<len;i++){
        result+=Math.pow(26,len-1-i)*(columnTitle[i].charCodeAt()-'A'.charCodeAt()+1);
    }
    return result;
};