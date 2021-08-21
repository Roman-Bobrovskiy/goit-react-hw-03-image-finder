import axios from "axios";
import requests from "./requests.json";

function fetchImagesWithQuery(inputValue, page) {
  return axios.get(
    requests.GET +
      requests.API_KEY +
      requests.query +
      inputValue +
      requests.page +
      page +
      requests.per_page
  );
}

const imgQuery = {
  fetchImagesWithQuery,
};

export default imgQuery;
