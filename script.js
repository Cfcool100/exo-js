function contTrue(arr) {
    var numberOfTrue =0;
    for (let i = 0; i < arr.length; i++) {
        if (numberOfTrue == true) {
            numberOfTrue+=1;
        }
    }
    return numberOfTrue;
}
console.log(contTrue([true,false,true,false,true,false,true,false,true,false]))