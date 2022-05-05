import React , { useEffect }from "react";
import MySelect from "../UI/MySelect";
import {
  resetFiltersAction,
  selectSortingAction,
} from "../../redux/actions/actions";
import s from "../../styles/Filters/Filter.module.css";
import { useDispatch, useSelector} from "react-redux";
import ScaleInput from "./ScaleInput";
import Mybutton from "../UI/Mybutton";
import button from "../../styles/Button/MyButton.module.css";
import { fetchFiltredByCategory } from "../../redux/actions/async-action";
import { setSortingAction } from "../../redux/actions/actions";

const FilterBlock = () => {
  const dispatch = useDispatch();
  const {selectedSort} = useSelector((state) => state.book);

  const handleSelectSort = (value) => {
    dispatch(selectSortingAction(value));
  };
  const handleSelectCategory = (value) => {
    dispatch(fetchFiltredByCategory(value))
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetFiltersAction());
  };

  useEffect(() => {
    dispatch(setSortingAction(selectedSort));
  }, [selectedSort, dispatch]);

  return (
    <div className={s.filterBlock}>
      <MySelect
        defaultValue="Sorting"
        options={[
          {
            value: "newest",
            name: "Newest",
          },
          {
            value: "oldest",
            name: "Oldest",
          },
          {
            value: "lowest",
            name: "Lowest",
          },
          {
            value: "highest",
            name: "Highest",
          },
        ]}
        onChange={handleSelectSort}
      />
      <MySelect
        defaultValue="Category"
        options={[
          {
            value: "Fantasy",
            name: "Fantasy",
          },
          {
            value: "Programming",
            name: "Programming",
          },
          {
            value: "Adventure",
            name: "Adventure",
          },
          {
            value: "Classics",
            name: "Classics",
          },
          {
            value: "Psychology",
            name: "Psychology",
          },
          {
            value: "Science",
            name: "Science",
          },
        ]}
        onChange={handleSelectCategory}
      />
      <ScaleInput />
      <Mybutton className={button.primary} onClick={handleReset}>
        Reset
      </Mybutton>
    </div>
  );
};

export default FilterBlock;
