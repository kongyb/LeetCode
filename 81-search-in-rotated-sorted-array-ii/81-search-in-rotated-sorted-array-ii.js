/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // rotate된  pivot을 찾고 target을 두개의 정렬된 배열중 하나를 정해 이분탐색
    for(const num of nums){
        if(num===target){
            return true
        }
    }
    return false
};