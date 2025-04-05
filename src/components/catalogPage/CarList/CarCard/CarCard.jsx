import ReadLink from "./ReadLink/ReadLink";

import css from "./CarCard.module.css";

export default function CarCard({
  car: {
    id,
    year,
    brand,
    model,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  },
}) {
  function parseAddress(address) {
    const parts = address.split(",");
    const city = parts[parts.length - 2]?.trim();
    const country = parts[parts.length - 1]?.trim();

    return `${city} | ${country}`;
  }
  function parseMileage(mileage) {
    const string = mileage.toString();
    return string.length > 1 ? string[0] + " " + string.slice(1) : string;
  }

  return (
    <>
      <img src={img} alt={description} className={css.img} />
      <img src="/heart-empty.svg" className={css.favourite} />
      <div className={css.textWrap}>
        <p className={css.textMain}>
          {brand} <span className={css.textBlue}>{model}</span>, {year}
        </p>
        <p className={css.textMain}>${rentalPrice}</p>
      </div>
      <p className={css.textSecondary}>
        {parseAddress(address)} | {rentalCompany} |<br />
        {type} | {parseMileage(mileage)} km
      </p>
      <ReadLink id={id} />
    </>
  );
}
