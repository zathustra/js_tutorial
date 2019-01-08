let states = ["Kansas", "Nebraska","North Dakota", "South Dakota"]


// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
}
function functionalUrls(elements){
	return elements.map(element => urlify(element))
}

console.log(functionalUrls(states));

function makeUrl(elements) {
	let base = "https://example.com/"
	return elements.map(element => base + urlify(element))
}
console.log(makeUrl(states))

// Only return single state elements
function functionalSingles(elements) {
	return elements.filter(element => 
element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states))