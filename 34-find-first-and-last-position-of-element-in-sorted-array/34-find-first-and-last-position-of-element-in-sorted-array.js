/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target,start=0,end=nums.length-1) {
    if(nums.length===0||nums[start]>target||nums[end]<target){
        return [-1,-1];
    }
    if(start>=end){
        if(nums[start]===target){
            return [start,start]
        }
        else{
            return [-1,-1];
        }
    }
    let mid=Math.floor((start+end)/2)
    let left=searchRange(nums,target,start,mid-1);
    let right=searchRange(nums,target,mid+1,end);
    let temp=left.concat(right);
    if(nums[mid]===target){
        temp.push(mid);
    }
    temp=temp.filter(el=>el!==-1);
    if(temp.length===0){
        return [-1,-1];
    }
    else{
        return [Math.min(...temp),Math.max(...temp)];
    }
    
};