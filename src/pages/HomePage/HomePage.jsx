import Header from "../../components/Header/Header";
import CatalogBtn from "../../components/homePage/CatalogBtn/CatalogBtn";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header variant="white" />
      <main className={css.main}>
        <div className={css.titleContainer}>
          <h1 className={css.titleHeading}>Find your perfect rental car</h1>
          <p className={css.titleText}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <CatalogBtn />
      </main>
    </>
  );
}
