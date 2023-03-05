function filterArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            arr.splice(i,1);
            i = i - 1;
        }
    }
    return arr[i];
}
console.log(filterArray([1, "re", 0, 2, "pq", 10]))
