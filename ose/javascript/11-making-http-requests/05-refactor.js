const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
