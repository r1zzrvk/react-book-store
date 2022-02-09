import * as axios from 'axios';

export const booksAPI = {
  
  getBooks: (limit = 10, currentPage = 1) => {
    return axios
    .get(`http://localhost:3003/items?page=${currentPage}&limit=&${limit}`, {
      params: {
        _page: currentPage,
        _limit: limit
      }
    })
    .then( response => response )
  },
  getBook: (id) => {
    return axios
    .get(`http://localhost:3003/items/${id}`)
    .then(response => response)
  },

  searchBook: (inputValue) => {
    return axios
    .get(`http://localhost:3003/items?q=${inputValue}`)
    .then(response => response)
  },

  filterCategory: (selectedValue) => {
    return axios
    .get(`http://localhost:3003/items?volumeInfo.category=${selectedValue}`)
    .then(response => response)
  },

  filterPrice: (min, max) => {
    return axios
    .get(`http://localhost:3003/items?saleInfo.amount_gte=${min}&saleInfo.amount_lte=${max}`)
    .then(response => response)
  },

  // side requests

  getVersions: () => {
    return axios
    .get(`http://localhost:3003/versions`)
    .then(response => response)
  }
};

