/**
 * @param {number[][]} grid
 * @return {number}
 */
function findAdjFresh(grid,rotten){
    let next=[];
    for(const tomato of rotten){
        const [i,j]=tomato;
        if(i-1>=0&&grid[i-1][j]===1){
            next.push([i-1,j]);
        }
        if(i+1<grid.length&&grid[i+1][j]===1){
            next.push([i+1,j]);
        }
        if(j-1>=0&&grid[i][j-1]===1){
            next.push([i,j-1]);
        }
        if(j+1<grid[0].length&&grid[i][j+1]===1){
            next.push([i,j+1]);
        }
    }
    return next;
}

var orangesRotting = function(grid) {
    let rotten=[];
    let fresh=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===2){
                rotten.push([i,j]);
            }
            if(grid[i][j]===1){
                fresh.push([i,j]);
            }
        }
    }
    if(fresh.length===0){
        return 0;
    }
    if(rotten.length===0){
        return -1;
    }
    let cnt=0;
    while(true){
        let next=findAdjFresh(grid,rotten);
        if(next.length===0){
            break;
        }
        next.forEach((el)=>{
            grid[el[0]][el[1]]=2;
        })
        rotten=next;
        cnt++;
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                return -1;
            }
        }
    }
    return cnt;
};