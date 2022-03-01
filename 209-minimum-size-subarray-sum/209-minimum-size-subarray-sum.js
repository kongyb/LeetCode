/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start=0,end=0;
    let len=nums.length+1;
    let sum=0;
    while(end<nums.length){
        while(sum<target&&end<nums.length){
            sum+=nums[end];
            end++;
        }
        if(sum>=target&&len>end-start){
            len=end-start;
        }
        while(sum>=target&&start<=end){
            sum-=nums[start];
            start++;
        }
        if(len>end-start+1){
            len=end-start+1;
        }        
    }
    if(len>nums.length) return 0;
    else return len;
};