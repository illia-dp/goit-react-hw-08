import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ children, type = "button", className, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(css.button, className && className)}
    >
      {children}
    </button>
  );
};

export default Button;
