import { selectIsLoading } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import LoginForm from "../components/LoginForm/LoginForm";
import Loader from "../components/Loader/Loader";

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Section>
      <Container>
        <LoginForm />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default LoginPage;
