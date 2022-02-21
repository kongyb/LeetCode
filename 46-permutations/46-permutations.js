/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length===1){
        return [[nums[0]]];
    }
    let result=[];
    for(const num of nums){
        let temp=permute(nums.filter(el=>el!==num));
        result=result.concat(temp.map(el=>[num,...el]));
    }
    return result;
};