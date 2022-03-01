/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let product=1;
    let start=0;
    let end=0;
    let result=0;
    for(end=0;end<nums.length;end++){
        product*=nums[end];
        if(product<k){
            result+=(end-start+1);
        }
        else{
            while(product>=k&&start<=end){
                product/=nums[start];
                start++;
            }
            result+=(end-start+1);
        }
    }
    return result;
};