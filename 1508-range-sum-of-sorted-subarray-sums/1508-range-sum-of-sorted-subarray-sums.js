/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let sumArr=[]
    for(let i=0;i<nums.length;i++){
        let sum=0
        for(let j=i;j<nums.length;j++){
            sum+=nums[j]
            sumArr.push(sum)
        }
    }
    sumArr.sort((a,b)=>{return a-b})
    let result=0
    for(let i=left-1;i<=right-1;i++){
        result=(result+sumArr[i])%(Math.pow(10,9)+7)
    }
    return result
};