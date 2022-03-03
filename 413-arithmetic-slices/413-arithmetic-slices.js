/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length<3){
        return 0
    }
    let result=0
    for(let left=0;left<nums.length-2;left++){
        let right=left+2
        if(nums[left+1]-nums[left]===nums[right]-nums[left+1]){
            result+=right-left-1
            while(nums[right+1]-nums[right]===nums[left+1]-nums[left]){
                right++;
                result+=right-left-1
            }
            left=right-1
        }
    }
    return result
};