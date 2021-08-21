import React, { Component } from "react";
import PropTypes from "prop-types";
import stylesSerachbar from "./Searchbar.module.css";
import stylesSerachForm from "./SearchForm.module.css";

export default class Searchbar extends Component {
  render() {
    return (
      <header className={stylesSerachbar.Searchbar}>
        <form
          className={stylesSerachForm.SearchForm}
          onSubmit={this.props.onHandleSubmit}
        >
          <button type="submit" className={stylesSerachForm.SearchForm_button}>
            <span className={stylesSerachForm.SearchForm_button_label}>
              Search
            </span>
          </button>

          <input
            className={stylesSerachForm.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.props.onHandleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
