/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cnt=new Array(nums.length).fill(Infinity)
    cnt[0]=0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=i+nums[i];j++){
            if(j>=nums.length){continue}
            cnt[j]=Math.min(cnt[j],cnt[i]+1)
        }
    }
    return cnt[nums.length-1]
};