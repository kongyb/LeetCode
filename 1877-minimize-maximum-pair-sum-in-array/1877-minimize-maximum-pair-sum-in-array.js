/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let max=0
    while(nums.length>0){
        let sum=nums.shift()+nums.pop()
        max=max>sum?max:sum
    }
    return max
};