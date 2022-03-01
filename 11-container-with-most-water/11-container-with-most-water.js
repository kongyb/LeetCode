/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let max=0;
    while(l<r){
        let newHeight=Math.min(height[l],height[r]);
        let newArea=newHeight*(r-l);
        if(max<newArea){
            max=newArea;
        }
        if(height[l]<height[r]){
            while(height[l]<=newHeight){
                l++
            }
        }
        else{
            while(height[r]<=newHeight){
                r--;
            }
        }
    }
    return max;
};