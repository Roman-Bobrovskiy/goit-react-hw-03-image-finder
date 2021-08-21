import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onOpenLageImg,
  onModal,
}) {
  return (
    <li className={styles.ImageGalleryItem} onClick={onModal}>
      <img
        onClick={() => onOpenLageImg(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenLageImg: PropTypes.func.isRequired,
  onModal: PropTypes.func.isRequired,
};
