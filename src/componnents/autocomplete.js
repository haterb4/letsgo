new Autocomplete("search_input", {
    onSearch: ({ currentValue }) => {
      const api = `https://rickandmortyapi.com/api/character?name=${encodeURI(
        currentValue
      )}`;
      return new Promise((resolve) => {
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.results);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },
  
    onResults: ({ matches }) =>
      matches.map(({ name }) => `<li>${name}</li>`).join(""),
  });