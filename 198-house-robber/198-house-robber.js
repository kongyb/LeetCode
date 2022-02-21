/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<=2){
        return Math.max(...nums)
    }
    let arr=[nums[0],Math.max(nums[0],nums[1])];
    let index=2;
    while(arr.length<nums.length){
        arr.push(Math.max(nums[index]+arr[index-2],arr[index-1]));
        index++;
    }
    return Math.max(arr[index-1],arr[index-2]);
};