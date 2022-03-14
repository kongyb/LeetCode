/**
 * @param {number[]} nums
 * @return {number}
 */
function findIndex(arr,num){
    let l=0,r=arr.length
    while(l<r){
        let mid=Math.floor((l+r)/2)
        if(num<arr[mid]){
            r=mid
        }
        else if(num>arr[mid]){
            l=mid+1
        }
        else{
            return mid
        }
    }
    return r
}

var lengthOfLIS = function(nums) {
    let sub=[nums[0]]
    for(let i=1;i<nums.length;i++){
        if(nums[i]>sub[sub.length-1]){
            sub.push(nums[i])
        }
        else{
            sub[findIndex(sub,nums[i])]=nums[i]
        }
    }
    console.log(sub)
    return sub.length
};