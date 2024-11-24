const arrToTest = [0, 3, 11, 1, 0, 10, 12, 2, 4, 111];

async function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`starting iteration ${i + 1} of the outer loop`);
        let innerLoopRange = i;

        for (let j = 0; j < arr.length - 1 - innerLoopRange; j++) {
            let keyValue = arr[j];
            let element2 = arr[j + 1];

            console.log(`starting iteration ${j + 1} of the inner loop, comparing ${keyValue}`);

            if (keyValue > element2) {
                console.log(`should swap ${keyValue} for ${element2} since it is bigger`);
                arr[j] = element2;
                arr[j + 1] = keyValue;
            }

            await delay(500);
        }
    }
    return arr;

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}