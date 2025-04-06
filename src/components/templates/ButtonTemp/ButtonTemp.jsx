import css from "./ButtonTemp.module.css";

export default function ButtonTemp({ variant, onClick, children }) {
  return (
    <button type="submit" className={css[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
