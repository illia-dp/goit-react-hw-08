import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Button from "../Button/Button";
import css from "./userMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.list}>
      <p className={css.text}>Welcome, {user.name}!</p>
      <Button type="button" handleClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
