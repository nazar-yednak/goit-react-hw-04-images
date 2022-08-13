import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImage = async (name, page) => {
  const response = await axios.get(
    `?q=${name}&page=${page}&key=28055079-45e3c423b4c5366c3627ebf35&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};

export default fetchImage;
