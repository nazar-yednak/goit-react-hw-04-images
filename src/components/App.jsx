import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImage from 'Api/Api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoaderSpinner from './Loader/Loader';
import Button from './Button/Button';

function App() {
  const [imageArray, setImageArray] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageTags, setLargeImageTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    async function API() {
      if (!searchName) {
        return;
      }
      setLoading(true);
      try {
        const imageArray = await fetchImage(searchName, page);
        setImageArray(prevImageArray => [...prevImageArray, ...imageArray]);
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    API();
  }, [page, searchName]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = item => {
    setShowModal(!showModal);
    setLargeImageURL(item.largeImageURL);
    setLargeImageTags(item.tags);
  };

  const handelFormSubmit = searchName => {
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
