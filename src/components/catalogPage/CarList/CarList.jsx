import { useSelector } from "react-redux";

import CarCard from "./CarCard/CarCard";
import css from "./CarList.module.css";

import { selectCars } from "../../../redux/carsSlice";

export default function CarList() {
  const cars = useSelector(selectCars);

  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li className={css.item} key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
