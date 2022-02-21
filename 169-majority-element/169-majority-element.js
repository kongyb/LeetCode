/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numObj={};
    let len=nums.length;
    for(const num of nums){
        if(!numObj[num]){
            numObj[num]=1;
        }
        else{
            numObj[num]++;
        }
        if(numObj[num]>=Math.ceil(len/2)){
            return num;
        }
    }
};