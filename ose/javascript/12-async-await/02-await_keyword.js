async function getPlanets() {
	const res = await axios.get('https://swapi.co/api/planets/');
	console.log(res.data); //only runs once the previous line is complete (the axios promise is resolved)
}

getPlanets();

// Without async/await...

// function getPlanets() {
// 	return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });
