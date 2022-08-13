import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImage from 'Api/Api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoaderSpinner from './Loader/Loader';
import Button from './Button/Button';
// import { ReactComponent as Search } from './icons';
// import 'react-toastify/dist/ReactToastify.css';
// import LoaderSpinner from './Loader/Loader ';
// import axios from 'axios';
function App() {
  const [imageArray, setImageArray] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageTags, setLargeImageTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchName) {
      return;
    }
    setLoading(true);
    try {
      fetchImage(searchName, page).then(newArr =>
        setImageArray(prevImageArray => [...prevImageArray, ...newArr])
      );
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [searchName, page, error]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = item => {
    console.log(item);
    setShowModal(!showModal);
    setLargeImageURL(item.largeImageURL);
    setLargeImageTags(item.tags);
    console.log(item.largeImageURL);
  };

  const handelFormSubmit = searchName => {
    console.log(searchName);
    setSearchName(searchName);
    setPage(1);
    setImageArray([]);
  };
  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handelFormSubmit} />
      <ImageGallery>
        <ImageGalleryItem
          searchName={searchName}
          page={page}
          imageArray={imageArray}
          onOpenModal={toggleModal}
        />
      </ImageGallery>
      {loading && <LoaderSpinner />}
      {imageArray.length > 0 && !loading ? <Button onLoad={loadMore} /> : null}
      {showModal && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} alt={largeImageTags} />
        </Modal>
      )}
    </>
  );
}

export default App;
