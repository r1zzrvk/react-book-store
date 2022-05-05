import * as axios from 'axios';
import { jsonAPI } from './jsonAPI';

export const booksAPI = {
  
  getBooks: (limit = 10, currentPage = 1) => {
    return axios
    .get(`${jsonAPI}items?page=${currentPage}&limit=&${limit}`, {
      params: {
        _page: currentPage,
        _limit: limit
      }
    })
    .then( response => response )
  },
  getBook: (id) => {
    return axios
    .get(`${jsonAPI}items/${id}`)
    .then(response => response)
  },

  searchBook: (inputValue, limit = 10, currentPage = 1) => {
    return axios
    .get(`${jsonAPI}items?q=${inputValue}&_limit=${limit}&_page=${currentPage}`)
    .then(response => response)
  },

  filterCategory: (selectedValue) => {
    return axios
    .get(`${jsonAPI}items?volumeInfo.category=${selectedValue}`)
    .then(response => response)
  },

  filterPrice: (min, max, limit = 10, currentPage = 1) => {
    return axios
    .get(`${jsonAPI}items?saleInfo.amount_gte=${min}&saleInfo.amount_lte=${max}&_limit=${limit}&_page=${currentPage}`)
    .then(response => response)
  },

  // side requests

  getVersions: () => {
    return axios
    .get(`${jsonAPI}versions`)
    .then(response => response)
  }
};

