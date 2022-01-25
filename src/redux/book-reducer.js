import {
  UPDATE_SEARCHFIELD,
  SET_BOOKS, SELECT_BY_DATE,
  SORT_BY_DATE,
  SELECT_BY_PRICE,
  SORT_BY_PRICE,
  SET_FETCHING,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
} from "./constants";

let initialState = {
  inputValue: '',
  books: [],
  sortByDate: '',
  sortByPrice: '',
  isFetching: false,
  totalPages: 0,
  limit: 8,
  currentPage: 1,
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHFIELD:
      return {
        ...state,
        inputValue: action.payload
      };
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case SELECT_BY_DATE:
      return {
        ...state,
        sortByDate: action.payload
      };
    case SORT_BY_DATE:
      return {
        ...state,
        books: [...state.books].sort((a, b) => {
          if (state.sortByDate === 'newest') {
            return parseInt(b.volumeInfo.publishDate.substring(0, 4)) - parseInt(a.volumeInfo.publishDate.substring(0, 4))
          } else if (state.sortByDate === 'oldest') {
            return parseInt(a.volumeInfo.publishDate.substring(0, 4)) - parseInt(b.volumeInfo.publishDate.substring(0, 4))
          }
        })
      };
    case SELECT_BY_PRICE:
      return {
        ...state,
        sortByPrice: action.payload
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        books: [...state.books].sort((a, b) => {
          if (state.sortByPrice === 'lowest') {
            return a.saleInfo.amount - b.saleInfo.amount
          } else if (state.sortByPrice === 'highest') {
            return b.saleInfo.amount - a.saleInfo.amount
          }
        })
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;
  }
};
