console.log(hello);
var hello = 'world';
// Guess: undefined because it exists, just not set yet. var hello goes to the top 

var needle = 'haystack';
test();

function test() {
	var needle = 'magnet';
	console.log(needle);
}
// Guess: magnet because functions go the top

var brendan = 'super cool';
function print() {
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// Guess: super cool because the function is never called

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// Guess: console log chicken because it's defined, then newline, then 
// half-chicken because standalone functions are taken to the top. then the
// function is creating var at the top of the function, running food 
// assignment, then logging it. 

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// Guess: mean call will yield undefined because it's a variable and not a 
// function. So much wrong here... food out of scope at the bottom too.

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

/*
REALLY LOOKS LIKE THIS

function rewind() {
	var genre = undefined;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
var genre = undefined;
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
*/

// Guess: 
// undefined
// rock
// r&b
// disco
//


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

/*
function learn() {
	var dojo = undefined;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
var dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

*/

// Guess: 
//
// undefined
// seattle
// burbank
// undefined

// surprised to see and now read all variables defined outside of functions 
// without var are considered global. And read further, for those in functions,
// they're global once the function is called. whyyyyy!!!
