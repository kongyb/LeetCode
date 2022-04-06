/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function combinationGen(nums){
    this.i=0
    this.j=0
    this.k=0
    this.len=nums.length
    this.nums=nums
    this.hasNext=true
    return {
        next(){
            if(!hasNext){
                return null
            }
            let arr=[nums[i],nums[j],nums[k]]
            k++
            if(k>=len){
                j++
                if(j>=len){
                    i++
                    if(i>=len){
                        hasNext=false
                    }
                    j=i
                }
                k=j
            }
            return arr
        }
    }
}

function calculateComb(num1,num2){
    if(num1<num2){
        return 0
    }
    else if(num1===num2){
        return 1
    }
    else if(num2===3){
        return num1*(num1-1)*(num1-2)/6
    }
    else if(num2===2){
        return num1*(num1-1)/2
    }
    else if(num2===1){
        return num1
    }
}

function calculateCnt(arr,numObj){
    let result=1
    let cntObj={}
    for(const num of arr){
        if(cntObj[num]){
            cntObj[num]++
        }
        else{
            cntObj[num]=1
        }
    }
    for(const key in cntObj){
        result*=calculateComb(numObj[key],cntObj[key])
    }
    return result
}

var threeSumMulti = function(arr, target) {
    let nums=[]
    let numObj={}
    let cnt=0
    for(const num of arr){
        if(numObj[num]){
            numObj[num]++
        }
        else{
            numObj[num]=1
            nums.push(num)
        }
    }
    let gen=combinationGen(nums)
    let numArr=gen.next()
    while(numArr){
        if(numArr[0]+numArr[1]+numArr[2]===target){
            cnt=(cnt+calculateCnt(numArr,numObj))%(10**9+7)
        }
        numArr=gen.next()
    }
    return cnt
};