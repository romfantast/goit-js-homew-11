import Notiflix from 'notiflix';
import { fetchImages } from './js/PixabayAPI.js';
import { createImageMarkup } from './js/imageCard.js';

const refs = {
  formEl: document.querySelector('.search-form'),
  galleryList: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.btn-load-more'),
};

refs.btnLoadMore.style.display = 'none';
let query = null;
let page = 1;
let total = 0;
let totalAPI = null;

refs.formEl.addEventListener('submit', handlerFormSearch);
refs.btnLoadMore.addEventListener('click', handlerBtnLoadMore);

function handlerBtnLoadMore() {
  page++;
  console.log(page, query);
  fetchImages(page, query).then(data => {
    console.log(data);

    total += data.hits.length;
    console.log('my total', total);

    refs.galleryList.innerHTML += createImageMarkup(data.hits);

    isLastPage(total, totalAPI);
  });
}

function handlerFormSearch(e) {
  page = 1;
  e.preventDefault();
  query = e.target.elements.searchQuery.value;
  fetchImages(page, query).then(data => {
    if (!data.hits.length) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    Notiflix.Notify.success(`Hooray! We found ${data.total} images.`);
    console.log(data);
    total += data.hits.length;
    console.log('my total', total);
    totalAPI = data.total;

    refs.galleryList.innerHTML = createImageMarkup(data.hits);
    refs.btnLoadMore.style.display = 'inline-block';
  });
}

function isLastPage(myTotal, totalApi) {
  if (myTotal === totalApi) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    refs.btnLoadMore.style.display = 'none';
    return;
  }
}
