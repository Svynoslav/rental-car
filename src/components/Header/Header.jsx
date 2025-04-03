import { Link } from "react-router-dom";
import clsx from "clsx";

import Navigation from "./Navigation/Navigation";

import css from "./Header.module.css";

export default function Header({ variant }) {
  return (
    <header className={clsx(css.header, css[variant])}>
      <Link to="/">
        <img src="/logo.svg" alt="RentalCar Logo" className={css.logo} />
      </Link>
      <Navigation />
    </header>
  );
}
