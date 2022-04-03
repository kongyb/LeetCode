/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(i1,i2,arr){
    let temp=arr[i1]
    arr[i1]=arr[i2]
    arr[i2]=temp
    return
}

function reverse(start,end,arr){
    let l=start,r=end
    while(l<r){
        swap(l,r,arr)
        l++
        r--
    }
}

var nextPermutation = function(nums) {
    if(nums.length===1){
        return
    }
    let pointer=nums.length-1
    while(nums[pointer]<=nums[pointer-1]){
        pointer--
        if(pointer===0){
            reverse(0,nums.length-1,nums)
            return
        }
    }
    let changeIndex1=pointer-1
    let changeIndex2=pointer
    for(let i=pointer+1;i<nums.length;i++){
        if(nums[i]>nums[changeIndex1]&&nums[i]<=nums[changeIndex2]){
            changeIndex2=i
        }
    }
    swap(changeIndex1,changeIndex2,nums)
    reverse(pointer,nums.length-1,nums)
    return
};