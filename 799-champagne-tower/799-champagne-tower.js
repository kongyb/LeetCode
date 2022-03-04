/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let tower=new Array()
    for(let i=0;i<100;i++){
        tower.push(new Array(i+1).fill(0))
    }
    tower[0][0]=poured
    for(let i=0;i<tower.length;i++){
        for(let j=0;j<i+1;j++){
            if(tower[i][j]>1){
                let rest=tower[i][j]-1
                tower[i][j]=1
                if(i+1<100){
                    tower[i+1][j]+=rest/2
                    tower[i+1][j+1]+=rest/2
                }
            }
        }
        if(i===query_row) break
    }
    return tower[query_row][query_glass]
};