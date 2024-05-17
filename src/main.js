// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchSearchData } from './js/pixabay-api';
import { renderElements } from './js/render-functions';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadBtnEl = document.querySelector('.button-load');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 500,
});
let currentPage = null;
let inputValue = null;

loadBtnEl.addEventListener('click', onLoadBtnClick);

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  try {
    event.preventDefault();
    currentPage = 1;

    galleryEl.innerHTML = '';

    inputValue = event.target.elements.js_input.value.trim();

    if (inputValue === '') {
      loadBtnEl.classList.remove('is-visible');

      return;
    }

    loaderEl.classList.add('is-visible');
    loadBtnEl.classList.remove('is-visible');

    const result = await fetchSearchData(inputValue, currentPage);
    if (result.data.hits.length === 0) {
      loaderEl.classList.remove('is-visible');

      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      galleryEl.innerHTML = '';
      return;
    }

    loaderEl.classList.remove('is-visible');

    galleryEl.innerHTML = renderElements(result.data.hits);
    lightbox.refresh();

    if (
      result.data.totalHits <=
      result.config.params.page * result.config.params.per_page
    ) {
      loaderEl.classList.remove('is-visible');
      iziToast.info({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
      });
      return;
    }

    loadBtnEl.classList.add('is-visible');

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function onLoadBtnClick(event) {
  const galleryItemEl = document.querySelector('.gallery-item');
  const domRect = galleryItemEl.getBoundingClientRect();
  const innerHeight = domRect.height * 2;

  currentPage++;

  loadBtnEl.classList.remove('is-visible');
  loaderEl.classList.add('is-visible');

  const result = await fetchSearchData(inputValue, currentPage);
  galleryEl.insertAdjacentHTML('beforeend', renderElements(result.data.hits));

  lightbox.refresh();

  window.scrollBy({
    top: innerHeight,
    behavior: 'smooth',
  });

  loaderEl.classList.remove('is-visible');
  loadBtnEl.classList.add('is-visible');

  if (
    result.data.totalHits <=
    result.config.params.page * result.config.params.per_page
  ) {
    loadBtnEl.classList.remove('is-visible');

    iziToast.info({
      message: 'We are sorry, but you have reached the end of search results.',
      position: 'topRight',
    });
  }
}