/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // mHn-1==> m+n-2Cn-1
    // m-1time DOWN
    //  DOWN.  DOWN.  DOWN. DOWN. DOWN. .....
    //  space between DOWN ==> m times
    // m개중 중복을 허락하여 n-1번 RIGHT를 배치한다. 
    // 중복조합의 계산값
    let result=1
    for(let i=n;i<=m+n-2;i++){
        result*=i
    }
    for(let i=1;i<=m-1;i++){
        result/=i
    }
    return result
};