import { Formik, Form, ErrorMessage, Field } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactShema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  contactNumber: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "The format should be xxx-xx-xx")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.contactName,
      number: values.contactNumber,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ contactName: "", contactNumber: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      <Form className={css.form}>
        <div className={css.form_container}>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.form_input}
              type="text"
              name="contactName"
              id={nameFieldId}
            />
            <ErrorMessage
              className={css.form_error}
              name="contactName"
              component="span"
            />
          </div>

          <div>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.form_input}
              type="text"
              name="contactNumber"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.form_error}
              name="contactNumber"
              component="span"
            />
          </div>
        </div>
        <div className={css.form_btn}>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
