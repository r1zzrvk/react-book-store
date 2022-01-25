import {
  UPDATE_SEARCHFIELD,
  SET_BOOKS, SELECT_BY_DATE,
  SORT_BY_DATE,
  SELECT_BY_PRICE,
  SORT_BY_PRICE,
  SET_FETCHING,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE
} from "./constants";

export const updateSearchFieldAction = (payload) => ({
  type: UPDATE_SEARCHFIELD, payload
});

export const setBooksAction = (payload) => ({
  type: SET_BOOKS, payload
});

export const selectByDateAction = (payload) => ({
  type: SELECT_BY_DATE,
  payload
});

export const sortByDateAction = (payload) => ({
  type: SORT_BY_DATE,
  payload
});

export const selectByPriceAction = (payload) => ({
  type: SELECT_BY_PRICE,
  payload
});

export const sortByPriceAction = (payload) => ({
  type: SORT_BY_PRICE,
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





