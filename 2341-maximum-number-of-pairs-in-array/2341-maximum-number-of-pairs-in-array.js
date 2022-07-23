/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let cntObj = {};
    for (let i=0; i<nums.length; i++){
        num = nums[i];
        if(cntObj[num] === undefined)
            cntObj[num] = 0;
        cntObj[num]++;
    }
    let result = [0,0];
    for (const cnt of Object.values(cntObj)){
        result[0] += Math.floor(cnt / 2);
        result[1] += cnt % 2;
    }
    return result;
};