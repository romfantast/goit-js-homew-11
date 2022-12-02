console.log('work pixabay');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31732427-bb24441bdd1666c8e09d7ceac';

export function fetchImages(page, query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=3`
  ).then(response => response.json());
}
