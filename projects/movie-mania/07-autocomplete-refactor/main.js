const topMoviesContainer = document.querySelector('.top-movies');

const autocompleteConfig = {
  renderOption: (movie) => {
    const { image, title } = movie;
    return `
      <div class="movie">
          <figure class="image is-32x32">
            <img src="${image}">
          </figure>
          <p>
            ${title}
          </p>
      </div>
    `;
  },
  inputValue: (movie) => {
    return movie.title;
  },
  fetchData: async name => {
    try {
      const response = await axios.get('https://imdb-api.com/API/Search', {
          params: {
              apiKey: 'k_d889iq2j',
              expression: name
          }
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
};

autocomplete({
  ...autocompleteConfig,
  rootEl: document.querySelector('.auto-complete-1'),
  onOptionSelect: (movie) => {
    document.querySelector('.information').classList.add('is-hidden');
    fetchMovie(movie, document.querySelector('.movie-detail-1'));
  },
});

autocomplete({
  ...autocompleteConfig,
  rootEl: document.querySelector('.auto-complete-2'),
  onOptionSelect: (movie) => {
    document.querySelector('.information').classList.add('is-hidden');
    fetchMovie(movie, document.querySelector('.movie-detail-2'));
  },
});

const fetchMovie = async (movie, el) => {
  try {
    const response = await axios.get('https://imdb-api.com/en/API/Title', {
        params: {
            apiKey: 'k_d889iq2j',
            id: movie.id
        }
    });
    renderMovie(response.data, el);
  } catch (error) {
    console.error(error);
  }
}

const movieDetail = document.querySelector('.movie-detail');
const renderMovie = (movie, el) => {
  const { fullTitle, image, plot, imDbRating, boxOffice: { budget, grossUSA } } = movie;

  el.innerHTML = `
    <div class="box">
      <article class="media mb-4">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="${image}" alt="${fullTitle} Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${fullTitle}</strong>
            </p>
            <p>${plot}</p>
          </div>
        </div>
      </article>
      <div class="notification is-success">
        <h6 class="subtitle is-6">IMDB</h6>
        <h4 class="title is-4">${imDbRating}</h4>
      </div>
      <div class="notification is-success">
        <h6 class="subtitle is-6">BUDGET</h6>
        <h4 class="title is-4">${budget}</h4>
      </div>
      <div class="notification is-success">
        <h6 class="subtitle is-6">GROSS</h6>
        <h4 class="title is-4">${grossUSA}</h4>
      </div>
    </div>
  `;
}

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
  const listEl = document.createElement('div');
  for (let i = 0; i < movieList.length; i++) {
    const { fullTitle, imDbRating, image, title } = movieList[i];

    listString += `
      <div class="box">
        <article class="media mb-4">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="${image}" alt="${title} Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>${fullTitle}</strong>
              </p>
              <p>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag is-dark">IMDB</span>
                    <span class="tag is-info">${imDbRating}</span>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  listEl.innerHTML = listString;
  topMoviesContainer.appendChild(listEl);
}

fetchTopMovies();