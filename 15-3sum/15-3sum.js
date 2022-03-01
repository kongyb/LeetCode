/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let result=[];
    for(let i=0;i<nums.length-2;i++){
        let l=i+1;
        let r=nums.length-1;
        while(l<r){
            if(nums[i]+nums[l]+nums[r]===0){
                result.push([nums[i],nums[l],nums[r]]);
                while(nums[l]===nums[l+1]){
                    l++
                }
                while(nums[r]===nums[r-1]){
                    r--;
                }
                l++
                r--;
            }
            else if(nums[i]+nums[l]+nums[r]<0){
                l++;
            }
            else{
                r--;
            }
        }
        while(nums[i]===nums[i+1]){
            i++
        }
    }
    return result;
};