const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

function insertionSortShift(arr) {
    for (let i = 1; i < arr.length; i++) {

        const key = arr[i];

        let previousIndex = i - 1;
        let insertIndex = i;


        while (previousIndex >= 0 && arr[previousIndex] > key) {
            let previousElement = arr[previousIndex];

            arr[insertIndex] = previousElement;

            insertIndex--;
            previousIndex--;
        }

        arr[insertIndex] = key;
    }

    return arr;
}



window.list = list;
window.insertionSortSwap = insertionSortSwap;