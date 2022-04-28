import  { booksAPI }  from "../../api/books-api";
import  { 
  filterByCategoryAction, 
  filterByPriceAction, 
  searchByNameAction, 
  setBookProfileAction, 
  setBooksAction, 
  setTotalPagesAction, 
  setVersionsAction
} from "./actions";
import { getPagesCount } from "../../utils/pages";

export const fetchBooks = (limit, currentPage) => async (dispatch) => {
  let response = await booksAPI.getBooks(limit, currentPage);
  dispatch(setBooksAction(response.data));
  let totalCount = response.headers['x-total-count']
  dispatch(setTotalPagesAction(getPagesCount(totalCount, limit)));
};

export const fetchBook = (id) => async (dispatch) => {
  let response = await booksAPI.getBook(id);
  dispatch(setBookProfileAction(response.data));
};

export const fetchSearch = (inputValue, limit, currentPage) => async (dispatch) => {
  let response = await booksAPI.searchBook(inputValue, limit, currentPage);
  dispatch(searchByNameAction(response.data));
}

export const fetchFiltredByCategory = (selectedValue) => async (dispatch) => {
  let response = await booksAPI.filterCategory(selectedValue);
  dispatch(filterByCategoryAction(response.data));
}

export const fetchFiltredByPrice = (min, max) => async (dispatch) => {
  let response = await booksAPI.filterPrice(min, max);
  dispatch(filterByPriceAction(response.data));
}

// side thunk

export const fetchVersions = () => async (dispatch) => {
  let response = await booksAPI.getVersions();
  dispatch(setVersionsAction(response.data));
}

// cart thunk