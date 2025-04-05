import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./LinkTemp.module.css";

export default function LinkTemp({ path, variant, children }) {
  return (
    <Link to={`/${path}`} className={clsx(css.link, css[variant])}>
      {children}
    </Link>
  );
}
