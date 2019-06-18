// 将两个已经排好序的数组合并成一个有序的数组
var arr1 = [4, 5]
var arr2 = [4, 4]
mergeSort(arr1, arr2)
function mergeSort (arr1, arr2) {
    var mergeArr = []
    var len = arr1.concat(arr2).length
    for(var i = 1; i <= len; i++) {
        if(arr1[0] && !arr2[0]) {
            mergeArr.push(arr1[0])
            arr1.shift()
            continue
        }
        else if(arr2[0] && !arr1[0]) {
            mergeArr.push(arr2[0])
            arr2.shift()
            continue
        }
        else if(arr1[0] < arr2[0]) {
            mergeArr.push(arr1[0])
            arr1.shift()
            continue
        }
        else if(arr1[0] > arr2[0]) {
            mergeArr.push(arr2[0])
            arr2.shift()
            continue
        }
        else if(arr1[0] = arr2[0]){
            mergeArr.push(arr1[0])
            mergeArr.push(arr2[0])
            arr1.shift()
            arr2.shift()
            continue
        }
    }
    console.log(mergeArr)
}





