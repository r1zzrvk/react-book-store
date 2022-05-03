import {
  UPDATE_SEARCHFIELD,
  SET_BOOKS,
  SET_FETCHING,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_BOOK_PROFILE,
  SEARCH_BY_NAME,
  SET_SORTING,
  SELECT_BY_SORT,
  SELECT_BY_CATEGORY,
  FILTER_BY_CATEGORY,
  SET_MIN_FILTER,
  SET_MAX_FILTER,
  FILTER_BY_PRICE,
  RESET_FILTERS,
} from "../constants";

let initialState = {
  inputValue: "",
  books: [],
  selectedSort: "",
  isFetching: false,
  totalPages: 0,
  limit: 10,
  currentPage: 1,
  book: null,
  category: "",
  min: "1",
  max: "2199",
};

// reducer funcs

const bookSorting = (state) => {
  return {
    ...state,
    books: [...state.books].sort((a, b) => {
      if (state.selectedSort === "newest") {
        return (
          parseInt(b.volumeInfo.publishDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishDate.substring(0, 4))
        );
      } else if (state.selectedSort === "oldest") {
        return (
          parseInt(a.volumeInfo.publishDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishDate.substring(0, 4))
        );
      } else if (state.selectedSort === "lowest") {
        return a.saleInfo.amount - b.saleInfo.amount;
      } else if (state.selectedSort === "highest") {
        return b.saleInfo.amount - a.saleInfo.amount;
      }
      return [...state.books];
    }),
  };
};

const resetFilter = (state) => {
  return {
    ...state,
    category: "",
    min: "1",
    max: "2199",
    selectedSort: "",
  };
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHFIELD:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case SELECT_BY_SORT:
      return {
        ...state,
        selectedSort: action.payload,
      };
    case SET_SORTING:
      return bookSorting(state);
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_BOOK_PROFILE:
      return {
        ...state,
        book: action.payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        books: action.payload,
      };
    case SELECT_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        books: action.payload,
      };
    case SET_MIN_FILTER:
      return {
        ...state,
        min: action.payload,
      };
    case SET_MAX_FILTER:
      return {
        ...state,
        max: action.payload,
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        books: action.payload,
      };
    case RESET_FILTERS:
      return resetFilter(state);
    default:
      return state;
  }
};
