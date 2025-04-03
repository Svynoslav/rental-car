import Header from "../../components/Header/Header";
import SearchBtn from "../../components/catalogPage/SearchForm/SearchBtn/SearchBtn";

export default function CatalogPage() {
  return (
    <>
      <Header variant="gray" />
      <main>
        <p>Catalog Page</p>
        <SearchBtn />
      </main>
    </>
  );
}
