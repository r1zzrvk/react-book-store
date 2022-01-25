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
  }
};
