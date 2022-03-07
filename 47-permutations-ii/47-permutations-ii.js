/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// function permutation(arr){
//     if(arr.length===1){
//         return [[arr[0]]]
//     }
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let temp=permutation(arr.filter((el,index)=>{return index!==i}))
//         result=result.concat(temp.map(el=>[arr[i],...el]))
//     }
//     return result
// }

// var permuteUnique = function(nums) {
//     let uniqueSet=new Set()
//     let totalPermutation=permutation(nums)
//     totalPermutation.forEach((arr)=>{
//         uniqueSet.add(arr.join(' '))
//     })
//     let result=Array.from(uniqueSet)
//     return result.map(el=>{
//         let temp=el.split(' ')
//         return temp.map(num=>Number(num))
//     })
// };
function permutation(nums,isChecked,prev,result){
    if(prev.length===nums.length){
        result.push(prev)
    }
    for(let i=0;i<nums.length;i++){
        if(!isChecked[i]){
            isChecked[i]=true
            permutation(nums,isChecked,[...prev,nums[i]],result)
            isChecked[i]=false
            while(nums[i]===nums[i+1]){
                i++
            }
        }
    }
}

var permuteUnique = function(nums) {
    let result=[];
    nums.sort((a,b)=>a-b)
    let isChecked=new Array(nums.length).fill(false);
    permutation(nums,isChecked,[],result)
    return result
};