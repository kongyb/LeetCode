/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let zero=[];
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]===0){
                zero.push([i,j]);
            }
        }
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]===1){
                let min=mat.length+mat[0].length+1;
                for(const el of zero){
                    if(Math.abs(i-el[0])+Math.abs(j-el[1])<min){
                        min=Math.abs(i-el[0])+Math.abs(j-el[1]);
                    }
                }
                mat[i][j]=min;
            }
        }
    }
    return mat;
};