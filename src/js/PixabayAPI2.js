import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31732427-bb24441bdd1666c8e09d7ceac';

export const axiosGetImages = (page, query, per_page) => {
  const res = axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  return res;
};
