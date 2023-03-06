function afterNYears(names, n) {
    if (n<0) {
        n= -n;
    }
	for(let i in names){
		names[i] = names[i] + n;
	}
	return names;
}
console.log(afterNYears({
    Joel: 32,
    Fred: 44,
    Reginald: 65,
    Susan: 33,
    Julian: 13}, 1))