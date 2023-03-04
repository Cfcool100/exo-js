function getAbsSum(arr) {
    let sum=0;
	for (let i = 0; i < arr.length; i++) {
        sum = sum+ Math.abs(arr[i]);
    }
    return Math.abs(sum);
}
console.log(getAbsSum([1, 2, -81, -12, -5, 10,-6]))