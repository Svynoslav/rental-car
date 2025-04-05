import axios from "axios";
import { useState, useEffect } from "react";

import css from "./CarList.module.css";

import CarCard from "./CarCard/CarCard";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/cars")
      .then((res) => setCars(res.data.cars))
      .catch((err) => console.log(err));
  }, []);

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
