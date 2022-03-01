/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findGroup(num,isConnected,isChecked){
    let connectArr=isConnected[num];
    isChecked[num]=true;
    for(let i=0;i<connectArr.length;i++){
        if(connectArr[i]===1&&!isChecked[i]){
            findGroup(i,isConnected,isChecked);
        }
    }
}

var findCircleNum = function(isConnected) {
    let isChecked=new Array(isConnected.length).fill(false);
    let cnt=0;
    for(let i=0;i<isConnected.length;i++){
        if(!isChecked[i]){
            cnt++;
            findGroup(i,isConnected,isChecked);
        }
    }
    return cnt;
};