import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ galleryPhotos, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {galleryPhotos.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          previewUrl={webformatURL}
          imageUrl={largeImageURL}
          onClickImage={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onOpenModal: PropTypes.func,
  galleryPhotos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
};