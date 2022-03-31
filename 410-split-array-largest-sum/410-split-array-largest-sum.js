/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function splitPossible(nums,m,max){
    let sum=0
    let cnt=0
    for(const num of nums){
        sum+=num
        if(sum>max){
            sum=num
            cnt++
        }
        if(cnt>m-1){
            return false
        }
    }
    return true
}

var splitArray = function(nums, m) {
    let maxSum=0
    let minSum=0
    for(const num of nums){
        if(num>minSum){
            minSum=num
        }
        maxSum+=num
    }
    let l=minSum,r=maxSum,mid
    while(l<r){
        mid=Math.floor((l+r)/2)
        if(splitPossible(nums,m,mid)){r=mid}
        else{l=mid+1}
    }
    return r
};