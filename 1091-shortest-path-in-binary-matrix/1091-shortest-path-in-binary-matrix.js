/**
 * @param {number[][]} grid
 * @return {number}
 */
function findNextGrid(prev,Len,grid){
    let result=[]
    prev.forEach(([x,y])=>{
        result=result.concat([[x-1,y-1],[x-1,y],[x-1,y+1],[x,y-1],[x,y+1],[x+1,y-1],[x+1,y],[x+1,y+1]])
    })
    return result.filter(([x,y])=>{
        return (x>=0&&x<Len&&y>=0&&y<Len)&&grid[y][x]===0
    })
}

var shortestPathBinaryMatrix = function(grid) {
    const Len=grid.length
    if(grid[0][0]!==0||grid[Len-1][Len-1]!==0) return -1
    let distObj={"0,0":1}
    let prev=[[0,0]]
    let dist=1
    
    while(prev.length>0){
        dist++
        let next=[]
        let temp=findNextGrid(prev,Len,grid)
        for([x,y] of temp){
            if(!distObj[x+","+y]){
                distObj[x+","+y]=dist
                next.push([x,y])
            }
        }
        prev=next
    }
    if(distObj[(Len-1)+','+(Len-1)]){
        return distObj[(Len-1)+','+(Len-1)]
    }
    return -1
};