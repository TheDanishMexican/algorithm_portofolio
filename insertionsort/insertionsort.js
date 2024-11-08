const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

function insertionSortShift(arr) {
    let iterations = 0;

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let previousIndex = i - 1;
        let insertIndex = i;


        while (previousIndex >= 0 && arr[previousIndex] > key) {
            let previousElement = arr[previousIndex];

            arr[insertIndex] = previousElement;

            insertIndex--;
            previousIndex--;
            iterations++;
        }

        arr[insertIndex] = key;
    }

    return { arr, iterations };
}

function insertionSortSwap(arr) {
    let iterations = 0;

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let previousIndex = i - 1;


        while (previousIndex >= 0 && arr[previousIndex] > key) {
            let currentElement = arr[previousIndex + 1];

            arr[previousIndex + 1] = arr[previousIndex];
            arr[previousIndex] = currentElement;

            previousIndex--;
            iterations++;
        }
    }

    return { arr, iterations };
}




window.list = list;
window.insertionSortSwap = insertionSortSwap;
window.insertionSortShift = insertionSortShift;