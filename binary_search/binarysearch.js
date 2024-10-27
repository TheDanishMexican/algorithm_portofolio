import binarySearchRecursive from "./binarysearch_recursive.js";



function binarySearch(search, values) {
    let min = 0;
    let max = values.length - 1;
    let middle;

    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        let comparison = compare(values[middle], search);

        if (comparison === 0) {
            return console.log(`The searched number was found at index: ${middle}`);
        } else if (comparison < 0) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
};

function compare(value1, value2) {
    if (value1 === value2) {
        return 0;
    } else if (value1 > value2) {
        return 1;
    } else {
        return -1;
    }
}

window.binarySearchRecursive = binarySearchRecursive;

window.binarySearch = binarySearch;

window.compare = compare;