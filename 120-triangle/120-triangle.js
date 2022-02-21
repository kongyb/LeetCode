/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length===1){
        return triangle[0][0];
    }
    let index=1;
    while(index<triangle.length){
        for(let i=0;i<triangle[index].length;i++){
            triangle[index][i]=triangle[index][i]+
                Math.min(
                i<index?triangle[index-1][i]:Infinity,
                i>=1?triangle[index-1][i-1]:Infinity);
        }
        index++;
    }
    return Math.min(...triangle[index-1])
};