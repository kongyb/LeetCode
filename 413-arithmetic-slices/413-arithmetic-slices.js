/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length<3){
        return 0
    }
    let l=0,r=2,cnt=0
    while(r<nums.length){
        if(nums[l+1]-nums[l]===nums[r]-nums[r-1]){
            while(nums[l+1]-nums[l]===nums[r+1]-nums[r]){
                r++
            }
            while(l<=r-2){
                cnt+=r-l-1
                l++
            }
            l=r
            r=l+2
        }
        else{
            l++
            r++
        }
    }
    return cnt
};