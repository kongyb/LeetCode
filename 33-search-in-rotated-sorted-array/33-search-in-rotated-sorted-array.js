/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findPivot(nums,start=0,end=nums.length){
    let mid=Math.floor((start+end)/2);
    if(nums[mid]<nums[mid-1]){
        return mid;
    }
    if(nums[start]<nums[mid]){
        return findPivot(nums,mid,end);
    }
    if(nums[mid]<nums[end-1]){
        return findPivot(nums,start,mid);
    }
}

function binarySearch(nums,target,start=0,end=nums.length){
    let mid=Math.floor((start+end)/2);
    if(nums[start]>target||nums[end-1]<target){
        return -1;
    }
    if(nums[mid]===target){
        return mid;
    }
    else if(nums[mid]<target){
        return binarySearch(nums,target,mid,end);
    }
    else{
        return binarySearch(nums,target,start,mid);
    }
    
}

var search = function(nums, target) {
    if(nums[0]<nums[nums.length-1]){
        return binarySearch(nums,target);
    }
    else{
        let pivot=findPivot(nums);
        return Math.max(binarySearch(nums,target,0,pivot),binarySearch(nums,target,pivot,nums.length));
    }
};