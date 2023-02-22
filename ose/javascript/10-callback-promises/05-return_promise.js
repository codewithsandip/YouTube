const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			}
			else {
				reject();
			}
		}, 5000);
	});
};
makeDogPromise()
	.then(() => {
		console.log('YAY WE GOT A DOG!!!!');
	})
	.catch(() => {
		console.log(':( NO DOG');
	});
