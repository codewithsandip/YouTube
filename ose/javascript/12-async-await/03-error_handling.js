// ONE OPTION FOR ERROR HANDLING...
async function getPlanets() {
	//Invalid URL...
	const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
	console.log(res.data);
}

getPlanets().catch((err) => {
	console.log('IN CATCH!!!');
	console.log(err);
});

// ANOTHER OPTION...
async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
		console.log(res.data);
	} catch (e) {
		console.log('IN CATCH!', e);
	}
}
getPlanets();
