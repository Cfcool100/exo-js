function contTrue(arr) {
    var numberOfTrue =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            return numberOfTrue+=1;
        }
    }
}
console.log(contTrue([true,false,true,false,true,false,true,false,true,false]))