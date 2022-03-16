/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount===0){return 0}
    coins.sort((a,b)=>{return a-b})
    let cntArr=new Array(amount+1).fill(0)
    for(const coin of coins){
        cntArr[coin]=1
        for(let i=coin+1;i<=amount;i++){
            if(cntArr[i-coin]!==0){
                cntArr[i]=cntArr[i]===0?cntArr[i-coin]+1:Math.min(cntArr[i-coin]+1,cntArr[i])
            }
        }
    }
    return cntArr[amount]===0?-1:cntArr[amount]
};