const topMoviesContainer = document.querySelector('.top-movies');

// autocomplete component
const autocomplete = document.querySelector('.auto-complete');
autocomplete.innerHTML = `
  <label><strong>Search Movies: </strong></label>
  <div class="dropdown">
    <div class="dropdown-trigger">
      <input type="text" class="name-input">
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content movie-list">
      </div>
    </div>
  </div>
`;

const nameInput = document.querySelector('.name-input');
const dropdown = document.querySelector('.dropdown');

document.addEventListener("click", (e) => {
  if (!autocomplete.contains(e.target)) {
    dropdown.classList.remove("is-active");
  }
});

const renderSearchResults = movies => {
  const movieList = document.querySelector('.movie-list');

  if (movies === null || movies.length === 0) {
    dropdown.classList.remove("is-active");
    return;
  }

  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const anchor = document.createElement("a");
    anchor.classList.add("dropdown-item");

    const { image, title } = movie;

    anchor.innerHTML = `
      <div class="movie">
        <figure class="image is-32x32">
          <img src="${image}">
        </figure>
        <p>
          ${title}
        </p>
      </div>
    `;

    movieList.appendChild(anchor);
  }
}

const onInput = e => {
  if (e.target.value === "") {
    dropdown.classList.remove("is-active");
  } else {
    fetchMovies(e.target.value);
  }
}

nameInput.addEventListener('input', debounce(onInput, 500));

const fetchMovies = async(name) => {
  try {
    const response = await axios.get('https://imdb-api.com/API/Search', {
        params: {
            apiKey: 'k_d889iq2j',
            expression: name
        }
    });
    renderSearchResults(response.data.results);
  } catch (error) {
    console.error(error);
  }
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

//fetchTopMovies();

//fetchMovies();