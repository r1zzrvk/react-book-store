import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBook } from "../redux/actions/async-action";
import { useHistory } from "react-router-dom";
import ItemPageContent from "./ItemPageContent";
import NotAvailablePage from "./NotAvailablePage";
import MyLoader from "./UI/MyLoader";

const ItemIdPage = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { book, isFetching} = useSelector((state) => state.book);

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(fetchBook(params.id));
    window.scrollTo(0, 0);
  }, [dispatch, params.id]);

  if (isFetching) {
    return <MyLoader />;
  }

  return (
    <div>
      {book ? (
        <ItemPageContent />
      ) : (
        <NotAvailablePage goBack={goBack} />
      )}
    </div>
  );
};

export default ItemIdPage;
