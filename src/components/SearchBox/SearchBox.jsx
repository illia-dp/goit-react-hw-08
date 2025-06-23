import { useDispatch } from "react-redux";
import {
  setNameFilterAction,
  setNumberFilterAction,
} from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.filters}>
      <div className={css.filter}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          onChange={(e) => dispatch(setNameFilterAction(e.target.value))}
        />
      </div>
      <div className={css.filter}>
        <span>Find contacts by number</span>
        <input
          className={css.input}
          onChange={(e) => dispatch(setNumberFilterAction(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
