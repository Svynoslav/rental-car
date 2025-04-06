import { Formik, Form, Field } from "formik";
import { useId, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import SearchBtn from "./SearchBtn/SearchBtn";
import FormattedField from "../../templates/FormattedField/FormattedField";
import css from "./SearchForm.module.css";

import { fetchBrands } from "../../../redux/brandsOps";
import { selectBrands } from "../../../redux/brandsSlice";
import { changeFilter, clearFilters } from "../../../redux/filtersSlice";
import { fetchCars } from "../../../redux/carsOps";
import { clearCars } from "../../../redux/carsSlice";

const initialValues = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

export default function SearchForm() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFromFieldId = useId();
  const mileageToFieldId = useId();

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCars({}));
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    dispatch(clearFilters());
    dispatch(clearCars());

    for (const [field, value] of Object.entries(values)) {
      dispatch(changeFilter({ field, value }));
    }

    dispatch(fetchCars(values));

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
            <option value="" disabled hidden>
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
            <option value="" disabled hidden>
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
            <FormattedField
              placeholder="From"
              name="mileageFrom"
              id={mileageFromFieldId}
              className={clsx(css.field, css.fieldMileageFrom)}
            />
            <FormattedField
              placeholder="To"
              name="mileageTo"
              id={mileageToFieldId}
              className={clsx(css.field, css.fieldMileageTo)}
            />
          </div>
        </div>

        <SearchBtn />
      </Form>
    </Formik>
  );
}
