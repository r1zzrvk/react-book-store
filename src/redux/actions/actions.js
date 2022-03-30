import {
  UPDATE_SEARCHFIELD,
  SET_BOOKS,
  SET_FETCHING,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_BOOK_PROFILE,
  SEARCH_BY_NAME,
  SELECT_BY_SORT,
  SET_SORTING,
  SELECT_BY_CATEGORY,
  FILTER_BY_CATEGORY,
  SET_VERSIONS,
  SET_MIN_FILTER,
  SET_MAX_FILTER,
  FILTER_BY_PRICE,
  RESET_FILTERS,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  ADJUST_QTY,
  REMOVE_ALL
} from "../constants";

export const updateSearchFieldAction = (payload) => ({
  type: UPDATE_SEARCHFIELD, payload
});

export const setBooksAction = (payload) => ({
  type: SET_BOOKS, payload
});

export const selectSortingAction = (payload) => ({
  type: SELECT_BY_SORT,
  payload
});

export const setSortingAction = (payload) => ({
  type: SET_SORTING,
  payload
});

export const setFetchingAction = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const setTotalPagesAction = (payload) => ({
  type: SET_TOTAL_PAGES,
  payload,
});

export const setCurrentPageAction = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const setBookProfileAction = (payload) => ({
  type: SET_BOOK_PROFILE,
  payload,
});

export const searchByNameAction = (payload) => ({
  type: SEARCH_BY_NAME,
  payload,
});

export const setFilterCategoryAction = (payload) => ({
  type: SELECT_BY_CATEGORY,
  payload,
});

export const filterByCategoryAction = (payload) => ({
  type: FILTER_BY_CATEGORY,
  payload,
});

export const setMinFilterAction = (payload) => ({
  type: SET_MIN_FILTER,
  payload,
});

export const setMaxFilterAction = (payload) => ({
  type: SET_MAX_FILTER,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const resetFiltersAction = (payload) => ({
  type: RESET_FILTERS,
  payload,
});


// side actions

export const setVersionsAction = (payload) => ({
  type: SET_VERSIONS,
  payload,
});


// cart actions

export const addToCartAction = (book) => ({
  type: ADD_TO_CART,
  payload: {
    book: book
  }
});

export const removeFromCartAction = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});

export const adjustQuantityAction = (payload) => ({
  type: ADJUST_QTY,
  payload
});

export const removeAllAction = (payload) => ({
  type: REMOVE_ALL,
  payload
})














