/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let lenArr=new Array(nums.length).fill(0)
    let cntArr=new Array(nums.length).fill(0)
    for(let i=0;i<nums.length;i++){
        lenArr[i]=1
        cntArr[i]=1
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                if(lenArr[i]===lenArr[j]+1){
                    cntArr[i]+=cntArr[j]
                }
                else if(lenArr[i]<lenArr[j]+1){
                    lenArr[i]=lenArr[j]+1
                    cntArr[i]=cntArr[j]
                }
            }
        }
    }
    let maxLen=Math.max(...lenArr)
    let result=0
    for(let i=0;i<cntArr.length;i++){
        if(lenArr[i]===maxLen){result+=cntArr[i]}
    }
    return result
};