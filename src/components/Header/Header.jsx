import { Link } from "react-router-dom";
import clsx from "clsx";

import Navigation from "./Navigation/Navigation";

import css from "./Header.module.css";

export default function Header({ variant }) {
  return (
    <header className={clsx(css.header, css[variant])}>
      <Link to="/" className={css.logo}>
        <img src="/logo.svg" alt="RentalCar Logo" width="104" height="16" />
      </Link>
      <Navigation />
    </header>
  );
}
