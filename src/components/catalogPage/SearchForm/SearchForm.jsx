import { Formik, Form, Field } from "formik";
import { useId, useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setStatusFilter } from "../../../redux/actions";

import SearchBtn from "./SearchBtn/SearchBtn";

import css from "./SearchForm.module.css";

const initialValues = {
  carBrand: "BMW",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

export default function SearchForm() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFromFieldId = useId();
  const mileageToFieldId = useId();

  // const dispatch = useDispatch();
  // const filter = useSelector((state) => state.filters.status);
  // const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/brands")
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={brandFieldId}>
            Car brand
          </label>
          <Field
            as="select"
            name="brand"
            id={brandFieldId}
            placeholder="Choose a brand"
            className={clsx(css.field, css.fieldBrand)}
          >
            <option value="" disabled selected hidden>
              Choose a brand
            </option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>

        <div className={css.formItem}>
          <label className={css.label} htmlFor={priceFieldId}>
            Price / 1 hour
          </label>
          <Field
            as="select"
            name="price"
            id={priceFieldId}
            placeholder="Choose a price"
            className={clsx(css.field, css.fieldPrice)}
          >
            <option value="" disabled selected hidden>
              Choose a price
            </option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>
        </div>

        <div className={css.formItem}>
          <label className={css.label} htmlFor={mileageFromFieldId}>
            Car mileage / km
          </label>
          <div className={css.mileageWrap}>
            <Field
              type="number"
              name="mileageFrom"
              id={mileageFromFieldId}
              placeholder="From"
              className={clsx(css.field, css.fieldMileageFrom)}
            ></Field>
            <Field
              type="number"
              name="mileageTo"
              id={mileageToFieldId}
              placeholder="To"
              className={clsx(css.field, css.fieldMileageTo)}
            ></Field>
          </div>
        </div>

        <SearchBtn />
      </Form>
    </Formik>
  );
}
