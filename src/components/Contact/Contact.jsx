import { IoPersonSharp, IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const data = await dispatch(deleteContact(id)).unwrap();
      toast.success(`Card "${data.name}" sucsesfully deleted`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };

  return (
    <div className={css.card}>
      <div>
        <p className={css.name}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={css.number}>
          <IoCall />
          {number}
        </p>
      </div>
      <Button className={css.button} handleClick={handleSubmit}>
        Delete
      </Button>
    </div>
  );
};

export default Contact;
