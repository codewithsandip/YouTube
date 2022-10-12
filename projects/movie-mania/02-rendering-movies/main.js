const topMoviesContainer = document.querySelector('.top-movies');

const fetchTopMovies = async () => {
    try {
        const response = await axios.get('https://imdb-api.com/API/Top250Movies', {
            params: {
                apiKey: 'k_d889iq2j'
            }
        });
        renderTopMovies(response.data.items);
      } catch (error) {
        console.error(error);
      }
};

const renderTopMovies = (movieList) => {
  let listString = '';
  const listEl = document.createElement('ul');
  for (let i = 0; i < movieList.length; i++) {
    const { title, imDbRating, image, year } = movieList[i];

    listString += `
      <li>
        <img src='${image}'/>
        <p>Title: ${title}</p>
        <p>Year Release: ${year}</p>
        <p>IMDB Rating: ${imDbRating}</p>
      </li>
    `;
  }

  listEl.innerHTML = listString;
  topMoviesContainer.appendChild(listEl);
}

fetchTopMovies();