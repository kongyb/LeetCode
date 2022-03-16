/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n===2){return 1}
    if(n===3){return 2}
    let maxArr=new Array(n+1).fill(0)
    maxArr[2]=2
    maxArr[3]=3
    for(let i=4;i<=n;i++){
        let result=0
        for(let j=2;j<=Math.floor(i/2);j++){
            if(maxArr[i-j]*maxArr[j]>result){
                result=maxArr[i-j]*maxArr[j]
            }
        }
        maxArr[i]=result
    }
    return maxArr[n]
};