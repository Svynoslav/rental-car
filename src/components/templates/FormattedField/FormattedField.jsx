import { useState } from "react";
import { useField } from "formik";

import formatMileage from "../../../utils/formatMileage";

export default function FormattedField({ placeholder, name, id, className }) {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  const [displayValue, setDisplayValue] = useState(field.value || "");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = formatMileage(value, ",", placeholder);

    setDisplayValue(formattedValue);
    setValue(value);
  };

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={className}
      value={displayValue || field.value}
      onChange={handleChange}
      name={field.name}
    />
  );
}
