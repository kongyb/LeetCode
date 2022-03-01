/**
 * @param {character[][]} grid
 * @return {number}
 */
function findIsland(x,y,grid,isChecked){
    isChecked[y][x]=true;
    if(y-1>=0&&grid[y-1][x]==='1'&&isChecked[y-1][x]===false){
        findIsland(x,y-1,grid,isChecked)
    }
    if(x-1>=0&&grid[y][x-1]==='1'&&isChecked[y][x-1]===false){
        findIsland(x-1,y,grid,isChecked)
    }
    if(y+1<grid.length&&grid[y+1][x]==='1'&&isChecked[y+1][x]===false){
        findIsland(x,y+1,grid,isChecked)
    }
    if(x+1<grid[0].length&&grid[y][x+1]==='1'&&isChecked[y][x+1]===false){
        findIsland(x+1,y,grid,isChecked)
    }
}

var numIslands = function(grid) {
    let height=grid.length;
    let width=grid[0].length;
    let cnt=0;
    let isChecked=new Array(height);
    for(let i=0;i<height;i++){
        isChecked[i]=new Array(width).fill(false);
    }
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j]==='1'&&!isChecked[i][j]){
                cnt++;
                findIsland(j,i,grid,isChecked)
            }
        }
    }
    return cnt;
};