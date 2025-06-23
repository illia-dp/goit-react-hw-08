import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <h1 className="title">Phonebook</h1>
        {isLoading && <Loader />}
        {isError && (
          <Heading
            variant={"error"}
            title={`Something went wrong ! ${isError}.Please try again later`}
          />
        )}
        <ContactForm />
        <SearchBox />
        {!isError && <ContactList />}
      </Container>
    </Section>
  );
};

export default ContactsPage;
