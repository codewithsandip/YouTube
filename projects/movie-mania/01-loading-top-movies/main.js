const fetchTopMovies = async () => {
    try {
        const response = await axios.get('https://imdb-api.com/API/Top250Movies', {
            params: {
                apiKey: 'k_d889iq2j'
            }
        });
        console.log(response.data.items);
      } catch (error) {
        console.error(error);
      }
};

fetchTopMovies();