/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let joinArr=[]
    let pointer2=0
    for(let pointer1=0;pointer1<nums1.length;pointer1++){
        while(pointer2<nums2.length&&nums2[pointer2]<nums1[pointer1]){
            joinArr.push(nums2[pointer2])
            pointer2++
        }
        joinArr.push(nums1[pointer1])
    }
    joinArr=joinArr.concat(nums2.slice(pointer2))
    let len=joinArr.length
    if(len%2===0){
        return (joinArr[len/2]+joinArr[len/2-1])/2
    }
    return joinArr[Math.floor(len/2)]
};