/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numObj={};
    for(const num of nums){
        if(numObj[num]){
            delete numObj[num];
        }
        else{
            numObj[num]=true;
        }
    }
    return Object.keys(numObj)[0];
};