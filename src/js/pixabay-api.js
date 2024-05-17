import axios from 'axios';

const loader = document.querySelector('.loader');
const loader2 = document.querySelector('.loader2');

export function toggleLoader() {
  loader.classList.toggle('visually-hidden');
}

export function toggleLoader2() {
  loader2.classList.toggle('visually-hidden');
}

export async function searchImages(searchInput, page) {
  const API_KEY = '43682309-decfbd59f0a24849675c6bf75';
  if (page.currentPage === 1) {
    toggleLoader();
  } else {
    toggleLoader2();
  }
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: searchInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page.currentPage,
    },
  });

  page.currentPage += 1;
  return response;
}