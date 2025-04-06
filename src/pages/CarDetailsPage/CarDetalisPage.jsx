import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import Header from "../../components/Header/Header";
import BookForm from "../../components/carPage/BookForm/BookForm";
import css from "./CarDetailsPage.module.css";

import formatMileage from "../../utils/formatMileage";
import parseAddress from "../../utils/parseAddress";

import { fetchCarById } from "../../redux/carsOps";
import {
  selectError,
  selectLoading,
  selectCarById,
} from "../../redux/carsSlice";

export default function CarDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const car = useSelector(selectCarById);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  function parseId(id) {
    return id.slice(0, 4);
  }

  if (loading) return <p>Loading...</p>;
  if (error || !car) return <p>Something went wrong or car not found</p>;

  return (
    <>
      <Header variant="gray" />
      <main className={css.main}>
        <div className={css.imgFormWrap}>
          <img src={car.img} alt={car.description} className={css.img} />
          <BookForm />
        </div>

        <div className={css.detailsWrap}>
          <div className={css.titleWrap}>
            <h2 className={css.title}>
              {car.brand} {car.model}, {car.year}
            </h2>
            <p className={css.id}>Id: {parseId(car.id)}</p>
          </div>

          <div className={css.locationMileageWrap}>
            <img
              src="/location.svg"
              alt="location icon"
              width="16"
              height="16"
              className={css.locationSvg}
            />
            <p className={clsx(css.text, css.address)}>
              {parseAddress(car.address, ", ")}
            </p>
            <p className={css.text}>
              Mileage: {formatMileage(car.mileage, " ")} km
            </p>
          </div>

          <p className={clsx(css.title, css.price)}>${car.rentalPrice}</p>
          <p className={clsx(css.text, css.description)}>{car.description}</p>

          <ul className={css.specsList}>
            <li>
              <h3 className={css.specsTitle}>Rental Conditions:</h3>
              <ul className={css.specsDescList}>
                {car.rentalConditions?.map((condition, index) => (
                  <li key={index} className={css.specsDescItem}>
                    <img
                      src="/check-circle.svg"
                      alt="check circle icon"
                      width="16"
                      height="16"
                    />
                    <p className={css.text}>{condition}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h3 className={css.specsTitle}>Car Specifications:</h3>
              <ul className={css.specsDescList}>
                <li className={css.specsDescItem}>
                  <img
                    src="/calendar.svg"
                    alt="calendar icon"
                    width="16"
                    height="16"
                  />
                  <p className={css.text}>Year: {car.year}</p>
                </li>
                <li className={css.specsDescItem}>
                  <img src="/car.svg" alt="car icon" width="16" height="16" />
                  <p className={css.text}>Type: {car.type}</p>
                </li>
                <li className={css.specsDescItem}>
                  <img
                    src="/fuel-pump.svg"
                    alt="fuel pump icon"
                    width="16"
                    height="16"
                  />
                  <p className={css.text}>
                    Fuel Consumption: {car.fuelConsumption}
                  </p>
                </li>
                <li className={css.specsDescItem}>
                  <img src="/gear.svg" alt="gear icon" width="16" height="16" />
                  <p className={css.text}>Engine Size: {car.engineSize}</p>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={css.specsTitle}>
                Accessories and functionalities:
              </h3>
              <ul className={css.specsDescList}>
                {car.accessories?.map((accessory, index) => (
                  <li key={`a-${index}`} className={css.specsDescItem}>
                    <img
                      src="/check-circle.svg"
                      alt="check circle icon"
                      width="16"
                      height="16"
                    />
                    <p className={css.text}>{accessory}</p>
                  </li>
                ))}
                {car.functionalities?.map((functionality, index) => (
                  <li key={`f-${index}`} className={css.specsDescItem}>
                    <img
                      src="/check-circle.svg"
                      alt="check circle icon"
                      width="16"
                      height="16"
                    />
                    <p className={css.text}>{functionality}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
