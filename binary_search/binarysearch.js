"use strict";

window.addEventListener('load', start);

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function start() {
    console.log('App started');

    let result = binarySearch(32, values);

    if (result !== -1) {
        console.log(`The searched number was found at index: ${result}`);
    } else {
        console.log("The number does not exist");
    }
}

function binarySearch(search, values) {
    let min = 0;
    let max = values.length - 1;
    let middle;

    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        let comparison = compare(values[middle], search);

        if (comparison === 0) {
            return middle;
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