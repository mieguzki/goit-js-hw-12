import axios from 'axios';

async function getInform(str, page) {
  const API_KEY = '43682309-decfbd59f0a24849675c6bf75';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_typ: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

  const { data } = await axios.get(`${BASE_URL}?${params}`);
  return data;
}
export { getInform };