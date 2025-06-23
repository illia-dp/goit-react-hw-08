import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Loader from "../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/auth/selectors";

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Section>
      <Container>
        <RegisterForm />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default RegisterPage;
