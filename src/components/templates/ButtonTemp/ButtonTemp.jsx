import css from "./ButtonTemp.module.css";

export default function ButtonTemp({ variant, children }) {
  return (
    <button type="submit" className={css[variant]}>
      {children}
    </button>
  );
}
