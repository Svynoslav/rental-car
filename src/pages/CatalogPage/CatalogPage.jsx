import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/catalogPage/SearchForm/SearchForm";
import CarList from "../../components/catalogPage/CarList/CarList";
import LoadBtn from "../../components/catalogPage/LoadBtn/LoadBtn";

import { fetchCars } from "../../redux/carsOps";
import { incrementPage, selectCars, clearCars } from "../../redux/carsSlice";
import {
  selectBrandFilter,
  selectPriceFilter,
  selectMileageFromFilter,
  selectMileageToFilter,
} from "../../redux/filtersSlice";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const brandFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const mileageFromFilter = useSelector(selectMileageFromFilter);
  const mileageToFilter = useSelector(selectMileageToFilter);

  useEffect(() => {
    dispatch(clearCars());
    dispatch(
      fetchCars({
        brand: brandFilter,
        price: priceFilter,
        mileageFrom: mileageFromFilter,
        mileageTo: mileageToFilter,
      })
    );
  }, [dispatch, brandFilter, priceFilter, mileageFromFilter, mileageToFilter]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(
      fetchCars({
        brand: brandFilter,
        price: priceFilter,
        mileageFrom: mileageFromFilter,
        mileageTo: mileageToFilter,
      })
    );
  };

  return (
    <>
      <Header variant="gray" />
      <main>
        <SearchForm />
        <CarList />
        {cars.length > 0 && <LoadBtn onClick={handleLoadMore} />}
      </main>
    </>
  );
}
