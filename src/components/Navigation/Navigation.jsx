import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <CustomNavLink to={"/"}>Home</CustomNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <CustomNavLink to={"/contacts"}>Contacts</CustomNavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
