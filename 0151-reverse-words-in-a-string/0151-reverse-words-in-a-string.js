/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let words = s.split(' ').filter(word => word !== '');
    swap(words);
    return words.join(' ');
};

function swap(arr){
    let left = 0, right = arr.length - 1;
    while (left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return;
}