import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContactList = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      {filteredContactList.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};
export default ContactList;
