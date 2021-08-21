import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  handleCloseByClickOnOverlay = (event) => {
    if (event.target) this.props.onCloseModal();
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        onClick={this.handleCloseByClickOnOverlay}
      >
        <div className={styles.Modal}>
          <img src={this.props.lageImgURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
