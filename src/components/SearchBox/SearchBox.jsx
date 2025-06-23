import { useDispatch } from "react-redux";
import {
  setNameFilterAction,
  setNumberFilterAction,
} from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (/\d/.test(value)) {
      dispatch(setNumberFilterAction(value));
      dispatch(setNameFilterAction(""));
    } else {
      dispatch(setNameFilterAction(value));
      dispatch(setNumberFilterAction(""));
    }
  };

  return (
    <div className={css.filter}>
      <span>Find contacts</span>
      <input className={css.input} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBox;
