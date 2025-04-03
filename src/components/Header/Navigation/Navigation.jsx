import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const determineIfActive = ({ isActive }) => {
  return clsx(isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/" className={determineIfActive}>
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/catalog" className={determineIfActive}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
