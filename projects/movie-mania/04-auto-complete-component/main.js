const topMoviesContainer = document.querySelector('.top-movies');
const nameInput = document.querySelector('.name-input');

const onInput = e => {
  fetchMovies(e.target.value);
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
    console.log(response);
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