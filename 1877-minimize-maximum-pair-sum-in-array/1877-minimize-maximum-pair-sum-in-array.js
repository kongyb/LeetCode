/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let max=0
    // while(nums.length>0){
    //     let sum=nums.shift()+nums.pop()
    //     max=max>sum?max:sum
    // }
    for(let i=0;i<nums.length/2;i++){
        max=max>(nums[i]+nums[nums.length-1-i])?max:(nums[i]+nums[nums.length-1-i])
    }
    return max
};