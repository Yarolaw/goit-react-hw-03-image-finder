import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  previewUrl,
  imageUrl,
  onClickImage,
}) {
  return (
    <li className="ImageGalleryItem" onClick={e => onClickImage(e)}>
      <img
        src={previewUrl}
        alt=""
        className="ImageGalleryItem-image"
        data-url={imageUrl}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  previewUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  onClickImage: PropTypes.func,
};