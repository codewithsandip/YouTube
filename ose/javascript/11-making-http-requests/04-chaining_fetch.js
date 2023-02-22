// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED ALL PLANETS (first 10)');
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED FIRST FILM, based off of first planet');
		console.log(data.title);
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
