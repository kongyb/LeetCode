/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    // 2max<1min||1max<2min 두개의 구간이 절대 안만나는 조건
    // 두개의 구간이 반드시 만나는 조건 2max>=1min&&1max>=2min
    let i=0,j=0;
    let result=[];
    while(i<firstList.length&&j<secondList.length){
        [min1,max1]=firstList[i];
        [min2,max2]=secondList[j];
        if(max2>=min1&&max1>=min2){
            result.push([Math.max(min1,min2),Math.min(max1,max2)]);
            if(max1<max2){
                i++
            }
            else{
                j++
            }
        }
        else if(max2<min1){
            j++;
        }
        else{
            i++
        }
    }
    return result;
};