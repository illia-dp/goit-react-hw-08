import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationRegisterSchema } from "../../validation/validation";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/auth/operations";
import usePasswordToggle from "../../hooks/usePasswordRoggle";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle(["password"]);

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully register`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };
  return (
    <div className={css.box}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
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
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <Button type="submit" className={css.button}>
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
