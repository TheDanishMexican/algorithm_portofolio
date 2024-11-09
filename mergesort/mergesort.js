const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const list2 = [9, 10, 11, 12];

const unsortedList = [10, 3, 7, 12, 1, 22];

let iterations = 0;

function merge(leftArr, rightArr) {


    const sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else sortedArr.push(rightArr.shift());

        iterations++;
    }

    while (leftArr.length) {
        sortedArr.push(leftArr.shift());
        iterations++;
    }

    while (rightArr.length) {
        sortedArr.push(rightArr.shift());
        iterations++;
    }

    return sortedArr;
}


function mergeSort(arr) {
    iterations++;

    if (arr.length < 2) {
        return arr;
    }

    if (isSorted(arr)) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1])
            return false;
    }
    return true;
}

function mergeSortAndLogIterations() {
    const sortedArray = mergeSort(unsortedList);
    console.log(`this is the sorted list: ${sortedArray} and these are the total iterations: ${iterations}`);
}



window.list1 = list1;
window.list2 = list2;
window.merge = merge;
window.mergeSort = mergeSort;
window.unsortedList = unsortedList;