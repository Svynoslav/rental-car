import { useId } from "react";
import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SendBtn from "./SendBtn/SendBtn";
import css from "./BookForm.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

export default function BookForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    toast.success("Your booking was successful! We'll contact you soon.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            name="name"
            id={nameFieldId}
            placeholder="Name*"
            className={css.field}
          ></Field>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
            className={css.field}
          ></Field>
          <Field
            type="date"
            name="date"
            id={dateFieldId}
            placeholder="Booking date"
            className={css.field}
          ></Field>
          <Field
            as="textarea"
            name="comment"
            id={commentFieldId}
            placeholder="Comment"
            className={clsx(css.field, css.textarea)}
          ></Field>
          <SendBtn />
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
