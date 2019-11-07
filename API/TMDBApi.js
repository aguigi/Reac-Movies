
// API/TMDBApi.js

const API_TOKEN = "4b41cea4a3dd0c7e369f4cdba19ca3bb";

export function getImageFromApi (name) { 
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + 
                '&language=fr&query=' + text +"&page="+ page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}