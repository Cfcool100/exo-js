const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name){
    for (const name in GUEST_LIST) {
        if (name in GUEST_LIST == true) {
            return "Hi! I'm" + " " + name + ", and I'm from " + GUEST_LIST[name]+"."; 
        }
    }
    return "hi i'm guest"
}
console.log(greeting())


// seconde maniere de faire


function greeting(name) {
	const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}
	if(name in GUEST_LIST){
		return "Hi! I'm "+name+", and I'm from "+GUEST_LIST[name]+"."
	};
	return "Hi! I'm a guest.";
}