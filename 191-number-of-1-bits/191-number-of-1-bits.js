/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function toBinary(n){
    let arr=[];
    n=Math.abs(n);
    while(n>1){
        arr.unshift(n%2);
        n=Math.floor(n/2);
    }
    arr.unshift(n);
    while(arr.length<32){
        arr.unshift(0);
    }
    return arr;
}

function minusTrans(arr){
    arr[0]=1;
    for(let i=1;i<32;i++){
        arr[i]=arr[i]===0?1:0;
    }
    return arr;
}

var hammingWeight = function(n) {
    let arr;
    if(n<0){
        arr=toBinary(n+1);
        arr=minusTrans(arr);
    }
    else{
        arr=toBinary(n);
    }
    return arr.reduce((acc,curr)=>{
        if(curr===1){
            acc++;
        }
        return acc;
    },0);
};