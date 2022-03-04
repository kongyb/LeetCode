/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function Cartesian(arr1,arr2){
    let result=[]
    for(const el1 of arr1){
        for(const el2 of arr2){
            result.push([...el1,...el2])
        }
    }
    return result
}

var subsetsWithDup = function(nums) {
    let numCnt={}
    for(const num of nums){
        if(numCnt[num]){
            numCnt[num]++
        }
        else{
            numCnt[num]=1
        }
    }
    let result=[[]]
    for(const key in numCnt){
        let temp=new Array()
        for(let i=0;i<=numCnt[key];i++){
            temp.push(new Array(i).fill(key))
        }
        result=Cartesian(result,temp)
    }
    return result
}