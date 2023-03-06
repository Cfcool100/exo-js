function objectToArray(obj) {
	var obj= {
		name: 'SISSOKO',
		age: 19,
		religion: 'muslim',
	};
	let arr = [];
	for(let keys in obj ){
		let value = obj[keys]
		arr.push([keys].concat(value))
	}
	return arr;
}
console.log(objectToArray())