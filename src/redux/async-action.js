import  { booksAPI }  from "../api/books-api";
import  { setBooksAction, setTotalPagesAction } from "../redux/actions";
import { getPagesCount } from "../utils/pages";

export const fetchBooks = (limit, currentPage) => async (dispatch) => {
  let response = await booksAPI.getBooks(limit, currentPage);
  dispatch(setBooksAction(response.data));
  let totalCount = response.headers['x-total-count']
  dispatch(setTotalPagesAction(getPagesCount(totalCount, limit)));
};
