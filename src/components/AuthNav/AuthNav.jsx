import CustomNavLink from "../CustomNavLink/CustomNavLink";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <ul className={css.list}>
        <li>
          <CustomNavLink className={addActive} to={"/login"}>
            Login
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink className={addActive} to={"/register"}>
            Register
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
