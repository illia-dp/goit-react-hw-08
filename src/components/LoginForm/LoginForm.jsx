import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/auth/operations";
import { validationLoginSchema } from "../../validation/validation";
import usePasswordToggle from "../../hooks/usePasswordRoggle";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle(["password"]);

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchLogin(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully login`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };

  return (
    <div className={css.box}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationLoginSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="div" />
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.input}
              name="password"
              type={showPassword.password ? "text" : "password"}
            />
            <ToggleIcon
              onClick={() => setShowPassword("password")}
              showPassword={showPassword.password}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </label>
          <Button className={css.button} type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
