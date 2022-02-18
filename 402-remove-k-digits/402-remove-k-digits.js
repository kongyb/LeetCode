/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function remove(numArr,k,start){
    if(numArr.length-k===start){
        numArr.splice(start,k);
        return;
    }
    if(k===0){
        return
    }
    let end=start+k;
    let min=numArr[start];
    let index=start;
    for(let i=start+1;i<=end;i++){
        if(numArr[i]<min){
            min=numArr[i];
            index=i;
        }
    }
    numArr.splice(start,index-start);
    remove(numArr,k-(index-start),start+1);
    return;
}

var removeKdigits = function(num, k) {
    if(num.length===k){
        return "0";
    }
    let numArr=num.split('');
    remove(numArr,k,0);
    while(numArr[0]==='0'&&numArr.length>1){
        numArr.shift()
    }
    return numArr.join('');
};