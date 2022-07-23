/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let sumObj = {};
    for (let num of nums){
        let sum = getDigitSum(num);
        if (sumObj[sum] === undefined)
            sumObj[sum] = [num];
        else
            addNum(sumObj[sum], num);
    }
    let max = -1;
    for (const arr of Object.values(sumObj)){
        if (arr.length < 2)
            continue;
        max = Math.max(arr[0] + arr[1], max);
    }
    return max;
};

function addNum(arr, num){
    if (arr.length === 1){
        if (num < arr[0])
            arr.unshift(num);
        else
            arr.push(num);
        return;
    }
    if (num < arr[0])
        return;
    else if (num <= arr[1])
        arr[0] = num;
    else{
        arr[0] = arr[1];
        arr[1] = num;
    }
    return;
}

function getDigitSum(num){
    let sum = 0;
    while (num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}