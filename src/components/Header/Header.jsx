import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import clsx from "clsx";
import css from "./Header.module.css";

const addActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav>
          <ul>
            <li>
              <NavLink className={addActive} to={"/"}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
