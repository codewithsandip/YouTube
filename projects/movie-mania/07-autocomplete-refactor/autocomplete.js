const autocomplete = ({ rootEl, renderOption, onOptionSelect, inputValue, fetchData }) => {
    rootEl.innerHTML = `
        <label><strong>Search: </strong></label>
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

    const nameInput = rootEl.querySelector('.name-input');
    const dropdown = rootEl.querySelector('.dropdown');

    document.addEventListener("click", (e) => {
    if (!rootEl.contains(e.target)) {
        dropdown.classList.remove("is-active");
    }
    });


    const renderSearchResults = options => {
        const optionList = rootEl.querySelector('.movie-list');
        optionList.innerHTML = '';
        
        if (options === null || options.length === 0) {
            dropdown.classList.remove("is-active");
            return;
        }
        
        dropdown.classList.add("is-active");
        
        for (let option of options) {
            const anchor = document.createElement("a");
            anchor.classList.add("dropdown-item");
            anchor.innerHTML = renderOption(option);
            anchor.addEventListener("click", () => {
                dropdown.classList.remove("is-active");
                nameInput.value = inputValue(option);
                onOptionSelect(option);
            });
        
            optionList.appendChild(anchor);
        }
    }
      
      const onInput = async e => {
        if (e.target.value === "") {
          dropdown.classList.remove("is-active");
        } else {
            const options = await fetchData(e.target.value);
            renderSearchResults(options);
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
}