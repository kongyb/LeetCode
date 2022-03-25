/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let arr=new Array(n+1).fill(0)
    arr[1]=1
    for(let i=1;i<=n/3;i++){
        if(arr[i]===1){
            arr[3*i]=1
            arr[3*i+1]=1
        }
    }
    if(arr[n]===1){
        return true
    }
    return false
};