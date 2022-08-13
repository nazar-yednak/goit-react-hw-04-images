import { ImageGalleryStyle } from './ImageGallery.styled';
// import LoaderSpinner from '../Loader/Loader';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return (
    <>
      <ImageGalleryStyle>{children}</ImageGalleryStyle>
    </>
  );
}

export default ImageGallery;
ImageGallery.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};
