import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux//contacts/operations";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Cleave from "cleave.js/react";
import css from "./ContactForm.module.css";

const contactFormSchema = object({
  name: string().required("Name is required").min(3).max(50),
  number: string()
    .required("Phone number is required")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format 123-45-67"
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const data = await dispatch(addContact(values)).unwrap();
      toast.success(`Card "${data.name}" sucsesfully added`);
      actions.resetForm();
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.errorMessage}
            component="div"
            name="name"
          />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field name="number">
            {({ field }) => (
              <Cleave
                {...field}
                className={css.input}
                options={{
                  blocks: [3, 2, 2],
                  numericOnly: true,
                  delimiter: "-",
                }}
              />
            )}
          </Field>
          <ErrorMessage
            className={css.errorMessage}
            component="div"
            name="number"
          />
        </label>
        <Button className={css.button} type="submit" size="medium">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
