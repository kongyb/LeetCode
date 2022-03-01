/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (!nums.length) return 0;
    let prod = 1;
    let res = 0;
    for(let i=0, j=0;j<nums.length;j++) {
        prod = prod * nums[j];
        while(prod >= k && i <= j) {
            prod = prod / nums[i++];
        }
        res += j - i + 1;
    }
    return res;
};