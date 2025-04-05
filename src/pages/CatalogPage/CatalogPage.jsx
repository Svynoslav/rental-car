import Header from "../../components/Header/Header";
import SearchForm from "../../components/catalogPage/SearchForm/SearchForm";
import CarList from "../../components/catalogPage/CarList/CarList";
import LoadBtn from "../../components/catalogPage/LoadBtn/LoadBtn";

export default function CatalogPage() {
  return (
    <>
      <Header variant="gray" />
      <main>
        <SearchForm />
        <CarList />
        <LoadBtn />
      </main>
    </>
  );
}
