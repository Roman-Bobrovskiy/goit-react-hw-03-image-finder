import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ onHandleLoadMore }) {
  return (
    <footer className={styles.footer}>
      <button className={styles.Button} onClick={onHandleLoadMore}>
        Load more
      </button>
    </footer>
  );
}
Button.propTypes = {
  onHandleLoadMore: PropTypes.func.isRequired,
};
