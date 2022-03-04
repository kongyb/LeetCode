/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length===0){
        return [[]];
    }
    let result=subsets(nums.slice(1));
    return result.concat(result.map(el=>[nums[0],...el]));
};