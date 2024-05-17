import axios from 'axios';

export async function fetchSearchData(inputValue, currentPage) {
  const searchParam = {
    params: {
      key: '43344666-8172f6ac72992b92fe58b4040',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    },
  };
  const response = await axios.get('https://pixabay.com/api/', searchParam);
  return response;
}