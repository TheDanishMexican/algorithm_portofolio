const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

function insertionSortSwap(arr) {

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let previousIndex = i - 1;

        while (previousIndex >= 0 && arr[previousIndex] > key) {
            let currentElement = arr[previousIndex + 1];

            arr[previousIndex + 1] = arr[previousIndex];
            arr[previousIndex] = currentElement;

            previousIndex--;
        }
    }

    return arr;
}

window.list = list;
window.insertionSortSwap = insertionSortSwap;