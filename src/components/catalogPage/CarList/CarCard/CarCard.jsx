import { useDispatch, useSelector } from "react-redux";

import ReadLink from "./ReadLink/ReadLink";
import css from "./CarCard.module.css";

import formatMileage from "../../../../utils/formatMileage";
import parseAddress from "../../../../utils/parseAddress";

import {
  addFavorite,
  removeFavorite,
  selectFavoriteCars,
} from "../../../../redux/favouriteSlice";

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
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavorite = favoriteCars.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <>
      <img src={img} alt={description} className={css.img} />
      <img
        src={isFavorite ? "/heart-full.svg" : "/heart-empty.svg"}
        className={css.favourite}
        width="16"
        height="16"
        onClick={toggleFavorite}
      />
      <div className={css.textWrap}>
        <p className={css.textMain}>
          {brand} <span className={css.textBlue}>{model}</span>, {year}
        </p>
        <p className={css.textMain}>${rentalPrice}</p>
      </div>
      <p className={css.textSecondary}>
        {parseAddress(address, " |")} | {rentalCompany} |<br />
        {type} | {formatMileage(mileage, " ")} km
      </p>
      <ReadLink id={id} />
    </>
  );
}
