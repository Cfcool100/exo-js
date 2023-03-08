function numPair(arr) {
    let paire = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            paire.push(arr[i]);
        }
    }

    return paire;
}

console.log(numPair([1, 2, 3, 4, 5, 6, 7, 8]))