// mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// [0,]
// i =0 1 2 3
// j =0 1 2 3 4
// newSorArr [0,3,3,4,4,6,30]

function mergeSortedArrays(array1:number[],array2:number[]): number[] {
let newSortedArray: number[] = []
let i:number = 1;
let j:number = 1;
let array1Item = array1[0]
let array2Item = array2[0]

if(array1.length == 0){
    return array2
}

if(array2.length == 0){
    return array1
}

while( array1Item || array2Item ){
    if(array2Item === undefined || array1Item < array2Item){
        console.log(array1Item)
        newSortedArray.push(array1Item);
        array1Item = array1[i]
        i++
    } else {
        console.log(array2Item)
        newSortedArray.push(array2Item);
        array2Item = array2[j]
        j++
    }
}
 return newSortedArray
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))