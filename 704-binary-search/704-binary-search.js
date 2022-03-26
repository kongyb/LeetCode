/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start=0;
    let end=nums.length;
    while(true){
        let mid=Math.floor((start+end)/2);
        if(mid===start){
            if(nums[mid]===target){
                return mid;
            }
            return -1;
        }
        if(target<nums[mid]){
            end=mid;
        }
        else if(target>nums[mid]){
            start=mid;
        }
        else{
            return mid;
        }
    }
};
