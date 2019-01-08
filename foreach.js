let a = ["ant", "bat", "cat", 42];
a.forEach( (element) => {
	console.log(element)
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
	console.log(character)
})

let b = [42, 99, 17, 8]
b.sort( (a, b) => {
	return a - b
});
b.forEach( (e) => {
	console.log(e);
});