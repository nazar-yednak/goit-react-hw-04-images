import { GalleryItemImage, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
function ImageGalleryItem({ imageArray, onOpenModal }) {
  console.log(imageArray);
  return (
    <>
      {imageArray.map(item => (
        <GalleryItemImage key={item.id} onClick={() => onOpenModal(item)}>
          <ItemImage src={item.webformatURL} alt={item.tags} id={item.id} />
        </GalleryItemImage>
      ))}
    </>
  );
}

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  imageArray: PropTypes.array,
  onOpenModal: PropTypes.func,
};
