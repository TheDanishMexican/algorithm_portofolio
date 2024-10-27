
let iterationCounter = 0;

export default function binarySearchRecursive(search, values, minIndex, maxIndex, compare) {
    console.group(`Searching between indexes ${minIndex} and ${maxIndex}`);
    iterationCounter++;
    console.log("Iteration count: ", iterationCounter);

    if (minIndex > maxIndex) {
        console.groupEnd();
        return -1;
    }

    let middle = Math.floor((minIndex + maxIndex) / 2);

    let comparison = compare(values[middle], search);

    console.log(`Middle index: ${middle}, Middle value: ${values[middle]}, Comparison result: ${comparison}`);

    if (comparison === 0) {
        console.groupEnd();
        return middle;

    } else if (comparison < 0) {
        return binarySearchRecursive(search, values, middle + 1, maxIndex, compare);

    } else {
        return binarySearchRecursive(search, values, minIndex, middle - 1, compare);

    }
}