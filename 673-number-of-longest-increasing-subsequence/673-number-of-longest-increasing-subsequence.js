/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let cntArr=new Array(nums.length).fill(0)
    let lenArr=new Array(nums.length).fill(0)
    let len=1
    cntArr[0]=1,lenArr[0]=1;
    for(let i=1;i<nums.length;i++){
        //num보다 작은 원소들의 길이중 제일 긴 길이+1
        // 제일 긴 길이의 갯수들의 합
        let num=nums[i]
        let maxLen=lenArr[0]
        for(let j=0;j<i;j++){
            if(nums[j]<num&&lenArr[j]+1>maxLen){
                maxLen=lenArr[j]+1
            }
        }
        lenArr[i]=maxLen
        let sum=0
        for(let j=0;j<i;j++){
            if(lenArr[j]===lenArr[i]-1&&nums[j]<nums[i]){
                sum+=cntArr[j]
            }
        }
        cntArr[i]=sum===0?1:sum
        if(maxLen>len){len=maxLen}
    }
    let result=0
    for(let i=0;i<nums.length;i++){
        if(lenArr[i]===len){
            result+=cntArr[i]
        }
    }
    return result
};