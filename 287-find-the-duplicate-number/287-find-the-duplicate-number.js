/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let arr=new Array(nums.length).fill(0)
    for(const num of nums){
        if(arr[num]===1){
            return num
        }
        arr[num]=1
    }
};