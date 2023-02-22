console.log('I HAPPEN FIRST!');
alert('Hi there!'); //This holds everything up!
console.log('I HAPPEN SECOND!');

console.log('I HAPPEN FIRST!');
setTimeout(function() {
	//This does NOT hold everything up, because...
	//JS relies on THE BROWSER itself to keep track of the timer
	console.log('I HAPPEN THIRD!');
}, 3000);
console.log('I HAPPEN SECOND!');
