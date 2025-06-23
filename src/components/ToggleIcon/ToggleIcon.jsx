import { FaEye, FaEyeSlash } from "react-icons/fa";
import css from "./ToggleIcon.module.css";

const ToggleIcon = ({ onClick, showPassword }) => {
  return (
    <button className={css.iconBtn} onClick={onClick} type="button">
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

export default ToggleIcon;
