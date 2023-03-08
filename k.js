function numTab(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    return [min, max];
}

console.log(numTab([12, 2, 3, 1]))