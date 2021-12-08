const API_TOKEN = "9370207ed1fc8d3e93a61270cb16a7e0";

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}