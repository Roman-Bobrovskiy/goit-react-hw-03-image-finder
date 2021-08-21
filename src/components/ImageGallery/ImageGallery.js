import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenLageImg, onModal }) {
  return (
    <>
      <main>
        <ul className={styles.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                onModal={onModal}
                onOpenLageImg={onOpenLageImg}
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenLageImg: PropTypes.func.isRequired,
  onModal: PropTypes.func.isRequired,
};
