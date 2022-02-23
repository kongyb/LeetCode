/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binary=n.toString(2).split('');
    while(binary.length<32){
        binary.unshift('0')
    }
    let l=0,r=binary.length-1;
    while(l<r){
        let temp=binary[l];
        binary[l]=binary[r];
        binary[r]=temp;
        l++;
        r--;
    }
    return Number('0b'+binary.join(''));
};