/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums,start=0,end=nums.length) {
    if(nums.length===1){
        return 0;
    }
    if(nums[start]>nums[start+1]){
        return start;
    }
    if(nums[end-1]>nums[end-2]){
        return end-1;
    }
    let mid=Math.floor((start+end)/2);
    if(nums[mid]>nums[mid-1]&&nums[mid]>nums[mid+1]){
        return mid;
    }
    if(nums[mid-1]>=nums[mid+1]){
        return findPeakElement(nums,start,mid);
    }
    if(nums[mid+1]>nums[mid-1]){
        return findPeakElement(nums,mid,end);
    }
};