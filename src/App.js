import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import imgQuery from "./services/imageApi";
import Spinner from "./components/Loader/Spinner";

import styles from "./App.module.css";

export default class App extends Component {
  state = {
    inputValue: "",
    imageArray: [],
    showModal: false,
    page: 1,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.handleLoadMore();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageArray.length > 12)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  openLageImg = (largeImageURL) => {
    this.setState({ lageImg: largeImageURL });
  };

  handleLoadMore = () => {
    let { inputValue, page } = this.state;

    imgQuery
      .fetchImagesWithQuery(inputValue, page)
      .then((res) => {
        this.setState((prevState) => {
          return {
            page: prevState.page + 1,
            imageArray: [...prevState.imageArray, ...res.data.hits],
          };
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { inputValue } = this.state;
    imgQuery.fetchImagesWithQuery(inputValue).then((res) => {
      this.setState({
        imageArray: res.data.hits,
      });
    });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    let { imageArray, showModal, lageImg, loading } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
        />

        {loading ? (
          <Spinner />
        ) : (
          <ImageGallery
            onOpenLageImg={this.openLageImg}
            images={imageArray}
            onModal={this.toggleModal}
          />
        )}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            onCloseModal={this.toggleModal}
            lageImgURL={lageImg}
          />
        )}

        {imageArray.length > 0 && (
          <Button onHandleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
