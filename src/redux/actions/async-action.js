import  { booksAPI }  from "../../api/books-api";
import  { 
  filterByCategoryAction, 
  filterByPriceAction, 
  searchByNameAction, 
  setBookProfileAction, 
  setBooksAction, 
  setFetchingAction, 
  setTotalPagesAction, 
  setVersionsAction
} from "./actions";
import { getPagesCount } from "../../utils/pages";

export const fetchBooks = (limit, currentPage) => async (dispatch) => {
  dispatch(setFetchingAction(true));
  let response = await booksAPI.getBooks(limit, currentPage);
  dispatch(setBooksAction(response.data));
  let totalCount = response.headers['x-total-count']
  dispatch(setTotalPagesAction(getPagesCount(totalCount, limit)));
  dispatch(setFetchingAction(false));
};

export const fetchBook = (id) => async (dispatch) => {
  dispatch(setFetchingAction(true));
  let response = await booksAPI.getBook(id);
  dispatch(setBookProfileAction(response.data));
  dispatch(setFetchingAction(false));
};

export const fetchSearch = (inputValue, limit, currentPage) => async (dispatch) => {
  let response = await booksAPI.searchBook(inputValue, limit, currentPage);
  dispatch(searchByNameAction(response.data));
}

export const fetchFiltredByCategory = (selectedValue) => async (dispatch) => {
  let response = await booksAPI.filterCategory(selectedValue);
  dispatch(filterByCategoryAction(response.data));
}

export const fetchFiltredByPrice = (min, max, limit, currentPage) => async (dispatch) => {
  let response = await booksAPI.filterPrice(min, max, limit, currentPage);
  dispatch(filterByPriceAction(response.data));
}

// side thunk

export const fetchVersions = () => async (dispatch) => {
  dispatch(setFetchingAction(true));
  let response = await booksAPI.getVersions();
  dispatch(setVersionsAction(response.data));
  dispatch(setFetchingAction(false));
}

// cart thunk