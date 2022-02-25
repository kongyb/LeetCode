/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums,start=0,end=nums.length) {
    if(nums[0]<=nums[nums.length-1]){
        return nums[0];
    }
    let mid=Math.floor((start+end)/2);
    if(nums[mid]<nums[mid-1]){
        return nums[mid];
    }
    if(nums[mid]>nums[start]){
        return findMin(nums,mid,end)
    }
    if(nums[mid]<nums[start]){
        return findMin(nums,start,mid);
    }
};