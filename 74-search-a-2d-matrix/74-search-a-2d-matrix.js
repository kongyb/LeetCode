/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(row,target,start=0,end=row.length){
    if(target<row[start]||target>row[end-1]){
        return -1;
    }
    let mid=Math.floor((start+end)/2);
    if(row[mid]===target) return mid;
    if(target<row[mid]) return binarySearch(row,target,start,mid);
    else return binarySearch(row,target,mid,end)
}

var searchMatrix = function(matrix, target) {
    for(const row of matrix){
        if(row[0]<=target&&row[row.length-1]>=target){
            return binarySearch(row,target)===-1?false:true;
        }
    }
    return false;
};