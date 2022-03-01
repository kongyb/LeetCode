/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let result=0
    //find number of subarray which start at index i
    for(let i=0;i<nums.length;i++){
        let product=nums[i];
        let j=i+1;
        while(product<k){
            result++;
            product*=nums[j];
            j++;
        }
    }
    return result;
};