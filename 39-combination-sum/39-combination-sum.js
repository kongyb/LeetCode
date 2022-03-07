/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// function uniqueArr(arr){
//     let result=[];
//     for(const subArr of arr){
//         let str=subArr.sort().join(' ');
//         if(!result.includes(str)){
//             result.push(str);
//         }
//     }
//     return result.map(el=>el.split(' '));
// }

// var combinationSum = function(candidates, target) {
//     let sumArr=new Array(target+1)
//     sumArr[0]=[[]];
//     for(let i=1;i<=target;i++){
//         sumArr[i]=[];
//         for(const num of candidates){
//             if(i-num<0){
//                 continue;
//             }
//             else{
//                 sumArr[i]=sumArr[i].concat(sumArr[i-num].map(el=>[...el,num]));
//             }
//         }
//     }
//     return uniqueArr(sumArr[target]);
// };

function findArrSum(candidate,target,prev,result){
    if(target===0){
        result.push(prev)
        return
    }
    if(candidate.length===0){
        return;
    }
    let num=candidate.shift()
    while(target>=0){
        findArrSum(candidate,target,[...prev],result)
        target-=num
        prev.push(num)
    }
    candidate.unshift(num)
    return
}

var combinationSum = function(candidates, target) {
    let result=[];
    findArrSum(candidates,target,[],result)
    return result
}