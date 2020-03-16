function GetLeastNumbers_Solution(input, k)
{
    let tree = []
    let result = []

    function heapify (arr, index) {
        // if (index === 0) {
        //     return
        // }
        let parentIndex = Math.floor((index-1)/2)
        // 如果新加入的节点的父节点大于该节点就进行交换
        if (arr[parentIndex] > arr[index]) {
            [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]]
        }
        if (parentIndex > 0) {
            heapify(arr, parentIndex)
        }
    }

    for (let i = 0; i < input.length; i++) {
        tree.push(input[i])
        heapify(tree, i)
    }

    // console.log(tree)
    // return

    function pop (arr) {
        result.push(arr[0])
        ;[arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]]
        console.log(arr)
        arr.pop()
        heapify2(arr, 0)
    }

    function heapify2 (arr, rootIndex) {
        let len = arr.length
        let leftIndex = rootIndex * 2 + 1
        let rightIndex = rootIndex * 2 + 2
        if (leftIndex > len-1) {
            return
        } else if (leftIndex = len-1) {
            heapify(arr, leftIndex)
            return
        } else if (leftIndex < len-1) {
            if (arr[leftIndex] > arr[rightIndex]) {
                heapify(arr, rightIndex)
                heapify2(arr, rightIndex)
            } else {
                heapify(arr, leftIndex)
                heapify2(arr, leftIndex)
            }
        }
    }

    while(k--) {
        pop(tree)
    }

    return result

}

let arr = [4,5,1,6,2,7,3,8]
console.log(GetLeastNumbers_Solution(arr, 4))