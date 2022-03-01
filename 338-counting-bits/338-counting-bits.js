/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result=[0];
    let num=1;
    while(num<=n){
        result=result.concat(result.map(el=>el+1));
        num*=2;
    }
    return result.slice(0,n+1);
};