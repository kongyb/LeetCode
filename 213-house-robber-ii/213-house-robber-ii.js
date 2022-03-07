/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1){
        return nums[0]
    }
    let arr1=nums.slice(1)
    let arr2=nums.slice(0,nums.length-1)
    for(let i=0;i<arr1.length;i++){
        if(i===1){
            arr1[i]=Math.max(arr1[0],arr1[1])
            arr2[i]=Math.max(arr2[0],arr2[1])
        }
        if(i>=2){
            arr1[i]=Math.max(arr1[i]+arr1[i-2],arr1[i-1])
            arr2[i]=Math.max(arr2[i]+arr2[i-2],arr2[i-1])
        }
    }
    return Math.max(arr1[arr1.length-1],arr2[arr2.length-1])
};