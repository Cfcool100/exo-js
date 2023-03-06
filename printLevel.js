function inkLevels(inks) {
	let min = inks.cyan;
	for (let i in inks){
		if(min > inks[i]){
			min = inks[i]
		}
	}
	return min;
}