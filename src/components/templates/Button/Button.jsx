import css from "./Button.module.css";

export default function Button({ variant, children }) {
  return <button className={css[variant]}>{children}</button>;
}
