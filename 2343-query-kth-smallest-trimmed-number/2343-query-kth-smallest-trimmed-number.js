/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    let result = [];
    nums = nums.map((el,index) => [el,index]);
    for (const query of queries)
        result.push(getResult(nums, query));
    return result;
};

function getResult(nums, query){
    let [index, cnt] = query;
    let len = nums[0][0].length;
    let p = 0;
    let arr = nums;
    while(p < cnt){
        p++;
        let bucket = new Array(10).fill(0).map(el => []);
        inputNum(arr,len,p,bucket);
        arr = bucket.reduce((acc, curr)=>{
            return [...acc, ...curr]
        },[])
    }
    return arr[index - 1][1];
}

function inputNum(arr, len, p, bucket){
    for(const el of arr){
        let [num,index] = el
        bucket[num[len - p]].push(el);
    }
    return;
}