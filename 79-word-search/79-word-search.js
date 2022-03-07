/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function search(isChecked,board,word,index,x,y){
    if(index===word.length){
        return true
    }
    let char=word[index]
    isChecked[y][x]=true
    if(y-1>=0&&!isChecked[y-1][x]&&board[y-1][x]===char){
        if(search(isChecked,board,word,index+1,x,y-1)){return true}
    }
    if(y+1<board.length&&!isChecked[y+1][x]&&board[y+1][x]===char){
        if(search(isChecked,board,word,index+1,x,y+1)){return true}
    }
    if(x-1>=0&&!isChecked[y][x-1]&&board[y][x-1]===char){
        if(search(isChecked,board,word,index+1,x-1,y)){return true}
    }
    if(x+1<board[0].length&&!isChecked[y][x+1]&&board[y][x+1]===char){
        if(search(isChecked,board,word,index+1,x+1,y)){return true}
    }
    isChecked[y][x]=false
    return false
}

var exist = function(board, word) {
    let width=board[0].length
    let height=board.length
    let isChecked=new Array()
    for(let i=0;i<height;i++){
        isChecked.push(new Array(width).fill(false))
    }
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(board[i][j]===word[0]&&search(isChecked,board,word,1,j,i)){
                return true
            }
        }
    }
    return false
};